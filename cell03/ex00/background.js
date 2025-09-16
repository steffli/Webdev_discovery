document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorBtn');
    
    button.addEventListener('click', function() {
        // Generate random RGB values
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        // Apply the random color to the button
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});