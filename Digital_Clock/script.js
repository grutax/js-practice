window.onload = function() {
    window.setInterval(function() {
        const date = new Date();

        const hours = ("00" + date.getHours()).slice(-2);
        const minutes = ("00" + date.getMinutes()).slice(-2);
        const seconds = ("00" + date.getSeconds()).slice(-2);

        const clock = `${hours}:${minutes}:${seconds}`;
        document.querySelector('.clock').innerHTML = clock;
    }, 500);
}