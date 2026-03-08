const filterContainer = document.querySelector('#filter-container');

const filterForm = document.createElement('form');
filterForm.id = 'filter-form';

const filterLabel = document.createElement('label');
filterLabel.textContent = 'Filter by Element: ';
filterLabel.htmlFor = 'element-select';

const filterSelect = document.createElement('select');
filterSelect.id = 'element-select';

const elements = ['All', 'Pyro', 'Hydro', 'Electro', 'Cryo', 'Anemo', 'Geo', 'Dendro'];

elements.forEach(element => {
    const option = document.createElement('option');
    option.value = element.toLowerCase();
    option.textContent = element;
    filterSelect.appendChild(option);
});

filterSelect.addEventListener('change', () => {
    const selected = filterSelect.value;
    const cards = document.querySelectorAll('#main-content .card');

    cards.forEach(card => {
        if (selected === 'all' || card.dataset.element === selected) {
            card.style.display = ''; // need to reset the display since some cards may be hidden by previous filters
        } else {
            card.style.display = 'none';
        }
    });
});

filterForm.appendChild(filterLabel);
filterForm.appendChild(filterSelect);
filterContainer.appendChild(filterForm);
