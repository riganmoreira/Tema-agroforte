document.addEventListener("DOMContentLoaded", () => {
    // 1. Navegação suave (já existia)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Efeito de animação ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
            }
        });
    });
    document.querySelectorAll('section').forEach(section => observer.observe(section));

    // 3. Botão Voltar ao Topo
    const btnTopo = document.getElementById("btnTopo");
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    };
});

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4. Feedback no formulário (já existia)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Obrigada pelo seu contato! Vamos transformar o futuro do campo.");
    form.reset();
});
