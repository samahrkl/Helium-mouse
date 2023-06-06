// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
const mousemove = document.querySelector('.mousemove');
const cercle1 = document.querySelector('.cercle1');
const cercle2 = document.querySelector('.cercle2');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.x + "px";
    mousemove.style.top = e.y + "px";

    cercle1.style.left = e.x + "px";
    cercle1.style.top = e.y + "px";

    cercle2.style.left = e.x + "px";
    cercle2.style.top = e.y + "px";
});