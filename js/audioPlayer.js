// Reproductor de audio minimalista - Contramuseo
class AudioPlayer {
    constructor() {
        this.audio = document.getElementById('audio-player');
        
        if (!this.audio) {
            console.warn('Elemento de audio no encontrado');
            return;
        }
        
        this.playPauseBtn = document.querySelector('.play-pause');
        this.progressBar = document.querySelector('.progress');
        this.progressHandle = document.querySelector('.progress-handle');
        this.progressContainer = document.querySelector('.progress-container');
        this.currentTimeEl = document.querySelector('.current-time');
        this.durationEl = document.querySelector('.duration');
        this.volumeBtn = document.querySelector('.volume-btn');
        this.volumeLevel = document.querySelector('.volume-level');
        this.volumeHandle = document.querySelector('.volume-handle');
        this.volumeSlider = document.querySelector('.volume-slider');
        
        this.isDragging = false;
        this.isVolumeDragging = false;
        this.wasPlaying = false;
        
        this.init();
    }
    
    init() {
        // Verificar elementos requeridos
        if (!this.playPauseBtn || !this.progressContainer) {
            console.warn('Elementos del reproductor no encontrados');
            return;
        }
        
        // Configurar iconos FontAwesome si no existen
        this.setupIcons();
        
        // Event listeners básicos
        this.playPauseBtn.addEventListener('click', () => this.togglePlay());
        this.progressContainer.addEventListener('click', (e) => this.setProgress(e));
        this.volumeBtn?.addEventListener('click', () => this.toggleMute());
        this.volumeSlider?.addEventListener('click', (e) => this.setVolume(e));
        
        // Event listeners para arrastre
        this.progressHandle?.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startDragging();
        });
        
        this.volumeHandle?.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startVolumeDragging();
        });
        
        // Event listeners globales
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) this.dragProgress(e);
            if (this.isVolumeDragging) this.dragVolume(e);
        });
        
        document.addEventListener('mouseup', () => {
            if (this.isDragging || this.isVolumeDragging) {
                this.stopDragging();
            }
        });
        
        // Event listeners del audio
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.resetPlayer());
        this.audio.addEventListener('volumechange', () => this.updateVolumeDisplay());
        this.audio.addEventListener('play', () => this.updatePlayState(true));
        this.audio.addEventListener('pause', () => this.updatePlayState(false));
        
        // Inicializar volumen
        this.audio.volume = 0.7;
        this.audio.muted = false;
        this.updateVolumeDisplay();
        
        // Actualizar duración si ya está cargada
        if (this.audio.readyState >= 1) {
            this.updateDuration();
        }
        
        console.log('Reproductor de audio inicializado');
    }
    
    setupIcons() {
        // Reemplazar SVGs por FontAwesome si es necesario
        const playIcon = this.playPauseBtn?.querySelector('.play-icon');
        const pauseIcon = this.playPauseBtn?.querySelector('.pause-icon');
        
        if (playIcon && playIcon.tagName === 'svg') {
            playIcon.outerHTML = '<i class="fas fa-play play-icon"></i>';
        }
        if (pauseIcon && pauseIcon.tagName === 'svg') {
            pauseIcon.outerHTML = '<i class="fas fa-pause pause-icon" style="display: none;"></i>';
        }
        
        // Configurar iconos de volumen
        const volumeHigh = this.volumeBtn?.querySelector('.volume-high');
        const volumeMute = this.volumeBtn?.querySelector('.volume-mute');
        
        if (volumeHigh && volumeHigh.tagName === 'svg') {
            volumeHigh.outerHTML = '<i class="fas fa-volume-up volume-high"></i>';
        }
        if (volumeMute && volumeMute.tagName === 'svg') {
            volumeMute.outerHTML = '<i class="fas fa-volume-mute volume-mute" style="display: none;"></i>';
        }
    }
    
    togglePlay() {
        if (this.audio.paused) {
            this.audio.play().catch(error => {
                console.error('Error al reproducir:', error);
            });
        } else {
            this.audio.pause();
        }
    }
    
    toggleMute() {
        if (this.audio) {
            this.audio.muted = !this.audio.muted;
            this.updateVolumeDisplay();
        }
    }
    
    setProgress(e) {
        if (!this.audio.duration) return;
        
        const rect = this.progressContainer.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.audio.currentTime = percent * this.audio.duration;
        
        // Efecto visual
        if (this.progressHandle) {
            this.progressHandle.style.transform = 'translate(-50%, -50%) scale(1.3)';
            setTimeout(() => {
                if (this.progressHandle) {
                    this.progressHandle.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            }, 200);
        }
    }
    
    setVolume(e) {
        if (!this.volumeSlider) return;
        
        const rect = this.volumeSlider.getBoundingClientRect();
        const percent = 1 - Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        this.audio.volume = percent;
        this.audio.muted = (percent === 0);
        this.updateVolumeDisplay();
    }
    
    startDragging() {
        this.isDragging = true;
        this.wasPlaying = !this.audio.paused;
        if (this.wasPlaying) {
            this.audio.pause();
        }
        
        if (this.progressHandle) {
            this.progressHandle.style.cursor = 'grabbing';
        }
        document.body.style.userSelect = 'none';
    }
    
    startVolumeDragging() {
        this.isVolumeDragging = true;
        if (this.volumeHandle) {
            this.volumeHandle.style.cursor = 'grabbing';
        }
        document.body.style.userSelect = 'none';
    }
    
    stopDragging() {
        this.isDragging = false;
        this.isVolumeDragging = false;
        
        if (this.wasPlaying) {
            this.audio.play().catch(console.error);
            this.wasPlaying = false;
        }
        
        if (this.progressHandle) {
            this.progressHandle.style.cursor = '';
        }
        if (this.volumeHandle) {
            this.volumeHandle.style.cursor = '';
        }
        document.body.style.userSelect = '';
    }
    
    dragProgress(e) {
        if (!this.audio.duration) return;
        
        const rect = this.progressContainer.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.audio.currentTime = percent * this.audio.duration;
    }
    
    dragVolume(e) {
        if (!this.volumeSlider) return;
        
        const rect = this.volumeSlider.getBoundingClientRect();
        const percent = 1 - Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        this.audio.volume = percent;
        this.audio.muted = (percent === 0);
        this.updateVolumeDisplay();
    }
    
    updateProgress() {
        if (!this.audio.duration || isNaN(this.audio.duration)) return;
        
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        
        if (this.progressBar) {
            this.progressBar.style.width = percent + '%';
        }
        if (this.progressHandle) {
            this.progressHandle.style.left = percent + '%';
        }
        if (this.currentTimeEl) {
            this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
        }
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
        
        // Actualizar icono
        const audioPlayer = document.querySelector('.audio-player');
        if (audioPlayer) {
            if (this.audio.muted || this.audio.volume === 0) {
                audioPlayer.classList.add('muted');
            } else {
                audioPlayer.classList.remove('muted');
            }
        }
    }
    
    updatePlayState(playing) {
        const audioPlayer = document.querySelector('.audio-player');
        if (!audioPlayer) return;
        
        if (playing) {
            audioPlayer.classList.add('playing');
        } else {
            audioPlayer.classList.remove('playing');
        }
    }
    
    resetPlayer() {
        const audioPlayer = document.querySelector('.audio-player');
        if (audioPlayer) {
            audioPlayer.classList.remove('playing');
        }
        this.audio.currentTime = 0;
    }
    
    formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Inicialización automática
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

// Soporte para navegación SPA (si aplica)
document.addEventListener('page:load', initAudioPlayer);
document.addEventListener('turbolinks:load', initAudioPlayer);

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.AudioPlayer = AudioPlayer;
    window.initAudioPlayer = initAudioPlayer;
}