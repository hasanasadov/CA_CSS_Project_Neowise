//! WHILE SCROLL BLOCK APPERANCE
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.add('hide');
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element);
});



//! COUNT FUNCTIONS 
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let count = 0;

    const interval = setInterval(() => {
        count++;
        counterElement.textContent = count;
        if (count === 30) {
            clearInterval(interval);
        }
    }, 50); 
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter2');
    let count = 0;
    const step = 3; 

    const interval = setInterval(() => {
        count += step;
        counterElement.textContent = count;
        if (count >= 1425) {
            counterElement.textContent = 1425;
            clearInterval(interval);
        }
    }, 1); 
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter3');
    let count = 0;
    const step = 2; 

    const interval = setInterval(() => {
        count += step;
        counterElement.textContent = count;
        if (count >= 502) {
            counterElement.textContent = 502;
            clearInterval(interval);
        }
    }, 1); 
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter4');
    let count = 0;
    const step = 2; 

    const interval = setInterval(() => {
        count += step;
        counterElement.textContent = count;
        if (count >= 604) {
            counterElement.textContent = 604;
            clearInterval(interval);
        }
    }, 1); 
});