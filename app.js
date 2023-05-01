const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    })
});

const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((el) => observer.observe(el));
