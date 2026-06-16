document.addEventListener("DOMContentLoaded", () => {
    console.log("Bem-vindo ao Agro Sustentável! Vamos transformar o futuro do campo.");
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Obrigada pelo seu contato! Sua mensagem sobre o futuro do agro é muito importante.");
    form.reset();
});
