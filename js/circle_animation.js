updateCounter() {
    // Actualizar el valor de stroke-dashoffset
    const circle = document.querySelector('.circle-progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * ((this.timeToElapse / 60) / 25);
    circle.style.strokeDashoffset = offset;
}