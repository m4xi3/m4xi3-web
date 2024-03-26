document.addEventListener('DOMContentLoaded', function () {
    // Select the "Projects" and "Blog" links
    let homeLink = document.getElementById('nav-home');

    // Function to apply the hover effect
    function applyHoverEffect(element) {
        element.style.transition = 'transform  0.3s, background-color  0.3s';
        element.addEventListener('mouseenter', function () {
            element.style.transform = 'scale(1.1)';
        });
        element.addEventListener('mouseleave', function () {
            element.style.transform = 'scale(1)';
        });
    }

    applyHoverEffect(homeLink);
});

/* Website under construction bar */
const messages = ['Website under construction ⚒️', "I'm working on it! ⛏️", 'Coming soon... ⏳'];
let index = 0;

function changeMessage() {
    document.querySelector('.construction-bar p').textContent = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(changeMessage, 5000);