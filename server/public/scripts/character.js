const renderCharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/characters');
    const data = await response.json();

    const characterContent = document.getElementById('character-content');

    let character;

    character = data.find(character => character.id === requestedID);

    if (character) {
        document.getElementById('image').src = character.image;
        document.getElementById('name').textContent = character.name;
        document.getElementById('element').textContent = character.element;
        document.getElementById('weapon').textContent = character.weapon;
        document.getElementById('playstyle').textContent = character.playstyle;
        document.getElementById('talent_priority').textContent = character.talent_priority;
        document.getElementById('recommended_weapons').textContent = character.recommended_weapons;
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Character not found';
        characterContent.appendChild(errorMessage);
    }
}

renderCharacter();