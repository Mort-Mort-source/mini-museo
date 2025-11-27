// Reproductor de audio personalizado - VOLUMEN CORREGIDO
class AudioPlayer {
    constructor() {
        this.audio = document.getElementById('audio-player');
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
        
        this.init();
    }
    
    init() {
        // Event listeners para los controles
        this.playPauseBtn.addEventListener('click', () => this.togglePlay());
        this.progressContainer.addEventListener('click', (e) => this.setProgress(e));
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        this.volumeSlider.addEventListener('click', (e) => this.setVolume(e));
        
        // Event listeners para arrastrar
        this.progressHandle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startDragging();
        });
        
        this.volumeHandle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startVolumeDragging();
        });
        
        // Event listeners globales para el arrastre
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) this.dragProgress(e);
            if (this.isVolumeDragging) this.dragVolume(e);
        });
        
        document.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.isVolumeDragging = false;
        });
        
        // Event listeners del audio
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.resetPlayer());
        this.audio.addEventListener('volumechange', () => this.updateVolumeDisplay());
        
        // Inicializar volumen
        this.audio.volume = 0.8;
        this.updateVolumeDisplay();
    }
    
    togglePlay() {
        if (this.audio.paused) {
            this.audio.play();
            document.querySelector('.audio-player').classList.add('playing');
        } else {
            this.audio.pause();
            document.querySelector('.audio-player').classList.remove('playing');
        }
    }
    
    toggleMute() {
        this.audio.muted = !this.audio.muted;
        document.querySelector('.audio-player').classList.toggle('muted', this.audio.muted);
    }
    
    setProgress(e) {
        const rect = this.progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = percent * this.audio.duration;
    }
    
    setVolume(e) {
        const rect = this.volumeSlider.getBoundingClientRect();
        // Para barra vertical: 0% en la parte inferior, 100% en la superior
        const percent = 1 - ((e.clientY - rect.top) / rect.height);
        this.audio.volume = Math.max(0, Math.min(1, percent));
        this.updateVolumeDisplay();
    }
    
    startDragging() {
        this.isDragging = true;
        this.progressHandle.style.cursor = 'grabbing';
    }
    
    startVolumeDragging() {
        this.isVolumeDragging = true;
        this.volumeHandle.style.cursor = 'grabbing';
    }
    
    dragProgress(e) {
        const rect = this.progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = Math.max(0, Math.min(this.audio.duration, percent * this.audio.duration));
        this.audio.currentTime = newTime;
    }
    
    dragVolume(e) {
        const rect = this.volumeSlider.getBoundingClientRect();
        const percent = 1 - ((e.clientY - rect.top) / rect.height);
        this.audio.volume = Math.max(0, Math.min(1, percent));
        this.updateVolumeDisplay();
    }
    
    updateProgress() {
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        this.progressBar.style.width = percent + '%';
        this.progressHandle.style.left = percent + '%';
        this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
    
    updateDuration() {
        this.durationEl.textContent = this.formatTime(this.audio.duration);
    }
    
    updateVolumeDisplay() {
        const percent = this.audio.volume * 100;
        this.volumeLevel.style.height = percent + '%';
        this.volumeHandle.style.bottom = percent + '%';
        
        // Actualizar estado de mute
        if (this.audio.muted) {
            document.querySelector('.audio-player').classList.add('muted');
        } else {
            document.querySelector('.audio-player').classList.remove('muted');
        }
    }
    
    resetPlayer() {
        document.querySelector('.audio-player').classList.remove('playing');
        this.audio.currentTime = 0;
    }
    
    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Inicializar el reproductor cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new AudioPlayer();
});

// Soporte para dispositivos táctiles
document.addEventListener('touchstart', (e) => {
    const audioPlayer = document.querySelector('.audio-player');
    if (audioPlayer && audioPlayer.contains(e.target)) {
        e.preventDefault();
    }
});

// Restaurar cursores cuando se suelta el mouse
document.addEventListener('mouseup', () => {
    const progressHandle = document.querySelector('.progress-handle');
    const volumeHandle = document.querySelector('.volume-handle');
    
    if (progressHandle) progressHandle.style.cursor = 'grab';
    if (volumeHandle) volumeHandle.style.cursor = 'grab';
});