import { presentations } from './presentations.js';

const grid = document.getElementById('presentations-grid');

function renderPresentations(items) {
    grid.innerHTML = '';
    let index = 0;
    items.forEach(presentation => {
        if (!presentation.active) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'presentation-card';
        card.style.animationDelay = `${index * 60}ms`;
        card.innerHTML = `
            <div class="card-content">
                <img src="${presentation.image}" alt="${presentation.title}" class="card-img">
                <h3 class="card-title">${presentation.title}</h3>
                <div class="card-actions">
                    <a href="${presentation.links.ver}" class="card-btn card-btn-primary" target="_blank">
                        <i class="fa-solid fa-magnifying-glass"></i> Ver
                    </a>
                    <a href="${presentation.links.pdf}" class="card-btn card-btn-secondary" target="_blank">
                        <i class="fa-solid fa-download"></i> PDF
                    </a>
                    <a href="${presentation.links.md}" class="card-btn card-btn-secondary" target="_blank">
                        <i class="fa-solid fa-file-lines"></i> MD
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
        index++;
    });
}

// Initial render
renderPresentations(presentations.sort((a, b) => a.id - b.id));

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPresentations = presentations.filter(presentation => presentation.title.toLowerCase().includes(searchTerm));
    renderPresentations(filteredPresentations);
});