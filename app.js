const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
        } else {
            entry.target.classList.remove('shown')
        }
    })
});

// Applies scroll animation to every element using .blogimg class:

let x, i;
x = document.querySelectorAll(".blogimg");
for (i = 0; i < x.length; i++) {
    x[i].classList.add('animated');
}

const animated = document.querySelectorAll('.animated');
animated.forEach((el) => observer.observe(el));


