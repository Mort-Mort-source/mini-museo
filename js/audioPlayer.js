// Reproductor de audio corregido
class AudioPlayer {
    constructor() {
        this.audio = document.getElementById('audio-player');
        
        if (!this.audio) {
            console.warn('Elemento de audio no encontrado');
            return;
        }
        
        this.playerElement = document.querySelector('.audio-player');
        this.playPauseBtn = document.querySelector('.play-pause');
        this.progressBar = document.querySelector('.progress');
        this.progressHandle = document.querySelector('.progress-handle');
        this.progressContainer = document.querySelector('.progress-bar');
        this.currentTimeEl = document.querySelector('.current-time');
        this.durationEl = document.querySelector('.duration');
        this.volumeBtn = document.querySelector('.volume-btn');
        this.volumeLevel = document.querySelector('.volume-level');
        this.volumeHandle = document.querySelector('.volume-handle');
        this.volumeSlider = document.querySelector('.volume-slider');
        
        this.isDragging = false;
        this.isVolumeDragging = false;
        
        this.init();
    }
    
    init() {
        if (!this.playPauseBtn || !this.progressContainer) {
            console.warn('Elementos del reproductor no encontrados');
            return;
        }
        
        // Event listeners
        this.playPauseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.togglePlay();
        });
        
        // Prevenir el comportamiento por defecto del botón
        this.playPauseBtn.addEventListener('mousedown', (e) => e.preventDefault());
        this.playPauseBtn.addEventListener('touchstart', (e) => e.preventDefault());
        
        this.progressContainer.addEventListener('click', (e) => this.setProgress(e));
        this.volumeBtn?.addEventListener('click', () => this.toggleMute());
        this.volumeSlider?.addEventListener('click', (e) => this.setVolume(e));
        
        // Drag events
        this.progressHandle?.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startDragging('progress');
        });
        
        this.volumeHandle?.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startDragging('volume');
        });
        
        // Global mouse events
        document.addEventListener('mousemove', (e) => this.handleDrag(e));
        document.addEventListener('mouseup', () => this.stopDragging());
        
        // Touch events
        this.progressContainer.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startDragging('progress');
        }, { passive: false });
        
        this.progressContainer.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.handleDrag(e.touches[0]);
        }, { passive: false });
        
        document.addEventListener('touchend', () => this.stopDragging());
        
        // Audio events
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.resetPlayer());
        this.audio.addEventListener('volumechange', () => this.updateVolumeDisplay());
        
        // Añadir eventos para play y pause
        this.audio.addEventListener('play', () => {
            this.playerElement?.classList.add('playing');
            console.log('Audio playing');
        });
        
        this.audio.addEventListener('pause', () => {
            this.playerElement?.classList.remove('playing');
            console.log('Audio paused');
        });
        
        // Inicializar
        this.audio.volume = 0.7;
        this.updateDuration();
        this.updateVolumeDisplay();
        
        console.log('Reproductor de audio inicializado');
    }
    
    togglePlay() {
        console.log('togglePlay called, audio paused:', this.audio.paused);
        if (this.audio.paused) {
            this.audio.play()
                .then(() => {
                    console.log('Audio started playing');
                })
                .catch(error => {
                    console.error('Error al reproducir:', error);
                });
        } else {
            this.audio.pause();
            console.log('Audio paused');
        }
    }
    
    toggleMute() {
        if (this.audio) {
            this.audio.muted = !this.audio.muted;
            this.playerElement?.classList.toggle('muted', this.audio.muted);
        }
    }
    
    setProgress(e) {
        if (!this.audio.duration) return;
        
        const rect = this.progressContainer.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.audio.currentTime = percent * this.audio.duration;
        
        // Efecto visual
        this.progressHandle.style.transform = 'translate(-50%, -50%) scale(1.3)';
        setTimeout(() => {
            this.progressHandle.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
    }
    
    setVolume(e) {
        if (!this.volumeSlider) return;
        
        const rect = this.volumeSlider.getBoundingClientRect();
        const percent = 1 - Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        this.audio.volume = percent;
        this.audio.muted = (percent === 0);
        this.updateVolumeDisplay();
    }
    
    startDragging(type) {
        if (type === 'progress') {
            this.isDragging = true;
            this.progressContainer.classList.add('dragging');
        } else if (type === 'volume') {
            this.isVolumeDragging = true;
            this.volumeSlider.classList.add('dragging');
        }
        document.body.style.userSelect = 'none';
    }
    
    stopDragging() {
        this.isDragging = false;
        this.isVolumeDragging = false;
        this.progressContainer?.classList.remove('dragging');
        this.volumeSlider?.classList.remove('dragging');
        document.body.style.userSelect = '';
    }
    
    handleDrag(e) {
        if (this.isDragging && this.audio.duration) {
            const rect = this.progressContainer.getBoundingClientRect();
            const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            this.audio.currentTime = percent * this.audio.duration;
        } else if (this.isVolumeDragging && this.volumeSlider) {
            const rect = this.volumeSlider.getBoundingClientRect();
            const percent = 1 - Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
            this.audio.volume = percent;
            this.audio.muted = (percent === 0);
            this.updateVolumeDisplay();
        }
    }
    
    updateProgress() {
        if (!this.audio.duration || isNaN(this.audio.duration)) return;
        
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        
        this.progressBar.style.width = percent + '%';
        this.progressHandle.style.left = percent + '%';
        this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
    
    updateDuration() {
        if (this.audio.duration && !isNaN(this.audio.duration) && this.durationEl) {
            this.durationEl.textContent = this.formatTime(this.audio.duration);
        }
    }
    
    updateVolumeDisplay() {
        if (!this.volumeLevel || !this.volumeHandle) return;
        
        const percent = this.audio.muted ? 0 : this.audio.volume * 100;
        this.volumeLevel.style.height = percent + '%';
        this.volumeHandle.style.bottom = percent + '%';
        
        // Actualizar estado muted
        this.playerElement?.classList.toggle('muted', this.audio.muted || this.audio.volume === 0);
    }
    
    resetPlayer() {
        this.playerElement?.classList.remove('playing');
        this.audio.currentTime = 0;
    }
    
    formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Inicialización
function initAudioPlayer() {
    if (document.getElementById('audio-player')) {
        try {
            new AudioPlayer();
        } catch (error) {
            console.error('Error inicializando reproductor:', error);
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudioPlayer);
} else {
    initAudioPlayer();
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.AudioPlayer = AudioPlayer;
}