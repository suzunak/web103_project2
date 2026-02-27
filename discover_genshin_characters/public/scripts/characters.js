const renderCharacters = async () => {
    const response = await fetch('/characters');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data) {
        data.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'card';

            const topContainer = document.createElement('div');
            topContainer.className = 'top-container';

            const bottomContainer = document.createElement('div');
            bottomContainer.className = 'bottom-container';

            const characterImage = document.createElement('img');
            characterImage.src = `${character.image}`;

            topContainer.appendChild(characterImage);

            const cardHeader = document.createElement('h3');
            cardHeader.textContent = character.name;
            bottomContainer.appendChild(cardHeader);

            const characterElement = document.createElement('p');
            characterElement.textContent = character.element;
            bottomContainer.appendChild(characterElement);

            const characterWeapon = document.createElement('p');
            characterWeapon.textContent = character.weapon;
            bottomContainer.appendChild(characterWeapon);

            const characterPlaystyle = document.createElement('p');
            characterPlaystyle.textContent = character.playstyle;
            bottomContainer.appendChild(characterPlaystyle);

            const characterCardLink = document.createElement('a');
            characterCardLink.href = `/characters/${character.id}`;
            characterCardLink.textContent = 'View Character';
            bottomContainer.appendChild(characterCardLink);

            characterCard.appendChild(topContainer);
            characterCard.appendChild(bottomContainer);

            mainContent.appendChild(characterCard);
        })
    } else {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'No characters found';
    }
}

const requestedURL = window.location.href.split('/').pop();

if (requestedURL) {
    window.location.href = '../404.html';
} else {
    renderCharacters();
}