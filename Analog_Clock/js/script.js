function clock() {
    const hourHand = document.querySelector('.hours');
    const minuteHand = document.querySelector('.minutes');
    const secondHand = document.querySelector('.seconds');
    const degrees = 6;

    setInterval(() => {
        const date = new Date();

        const hours = date.getHours() * 30;
        const minutes = date.getMinutes() * degrees;
        const seconds = date.getSeconds() * degrees;

        hourHand.style.transform = `rotateZ(${hours}deg)`;
        minuteHand.style.transform = `rotateZ(${minutes}deg)`;
        secondHand.style.transform = `rotateZ(${seconds}deg)`;
    }, 0)
}

clock();