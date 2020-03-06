(function() {
    setInterval(() => {
        const colors = ['red', 'green', 'blue'];
        const selectedColor = colors[Math.floor(Math.random() * 3)];
        const ball = document.querySelector('.ball');
        ball.style['background-color'] = selectedColor;
        ball.style['border-radius'] = '50%';
    }, 1000);

    document.querySelector('.ball').addEventListener('click', function() {
        this.style['background-color'] = 'black';
        this.style['border-radius'] = '0';
    });
})();
