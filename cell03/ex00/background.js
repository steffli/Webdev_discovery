document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorBtn');
    
    button.addEventListener('click', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});