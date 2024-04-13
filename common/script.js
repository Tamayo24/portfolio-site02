

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
            const offsetTop = targetElement.offsetTop;
            const duration = 1000;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
                duration: duration,
            });
        }
    })
})





const btn = document.querySelector('#btn');
const form_hidden = document.querySelector('.form_hidden');
btn.addEventListener('click', () => {
    form_hidden.classList.add('form_show');
});