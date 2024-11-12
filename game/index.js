document.addEventListener('DOMContentLoaded', function () {
    const textIntroDiv = document.querySelector('.text-intro-section');
    const cardSection = document.querySelector('.cards-section');
    const cardContainer = document.querySelector('#cards-container');
    const buttonStart = document.querySelector('#start-game-button');
    const gameSection = document.querySelector('.game-section');

    setTimeout(function () {
        if (textIntroDiv) {
            const elements = textIntroDiv.children;
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add('hide-animation');
            }
            setTimeout(function () {
                textIntroDiv.classList.add('hide');
            }, 1000);
        }
    }, 200);

    setTimeout(function () {
        const elements = cardContainer.children;
        for (let i = 0; i < elements.length; i++) {
            createCards.classList.remove('hide');
            elements[i].classList.add('show-animation');
        }
    }, 200)

    cardSection.classList.remove('hide');
    cardSection.classList.add('show-animation');

    const cardMap = new Map();
    const cardsArray = [];

    cardMap.forEach((value, key) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<strong>${key}:</strong> ${value}`;
        cardContainer.appendChild(cardElement);
    });

    const createCardForm = document.createElement('form');
    createCardForm.classList.add('create-card-form');

    const keyInput = document.createElement('input');
    keyInput.type = 'text';
    keyInput.placeholder = 'Enter key';
    createCardForm.appendChild(keyInput);

    const valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.placeholder = 'Enter value';
    createCardForm.appendChild(valueInput);

    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.textContent = 'Save';
    createCardForm.appendChild(saveButton);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    createCardForm.appendChild(deleteButton);

    document.body.appendChild(createCardForm);

    window.addEventListener('beforeunload', function (e) {
        if (cardCount > 0 && cardsArray.length > 0) {
            e.preventDefault();
        }
    });

    let cardCount = 0;

    saveButton.addEventListener('click', function () {
        const key = keyInput.value;
        const value = valueInput.value;
        if (key && value) {
            cardMap.set(key, value);
            cardsArray.push({ key, value });
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `<strong>${key}:</strong> ${value}`;
            cardContainer.appendChild(cardElement);
            keyInput.value = '';
            valueInput.value = '';
            cardCount++;
        }
    });

    deleteButton.addEventListener('click', function () {
        const key = keyInput.value;
        if (cardMap.has(key)) {
            cardMap.delete(key);
            const cardElements = cardContainer.querySelectorAll('.card');
            cardElements.forEach(cardElement => {
                if (cardElement.innerHTML.includes(`<strong>${key}:</strong>`)) {
                    cardContainer.removeChild(cardElement);
                }
            });
            keyInput.value = '';
            valueInput.value = '';
            cardCount--;
        }
    });

    saveButton.addEventListener('click', function () {
        const key = keyInput.value;
        const value = valueInput.value;
        if (key && value) {
            cardMap.set(key, value);
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `<strong>${key}:</strong> ${value}`;
            cardContainer.appendChild(cardElement);
            keyInput.value = '';
            valueInput.value = '';
            cardCount++;
        }
    });

    deleteButton.addEventListener('click', function () {
        const key = keyInput.value;
        if (cardMap.has(key)) {
            cardMap.delete(key);
            const cardElements = cardContainer.querySelectorAll('.card');
            cardElements.forEach(cardElement => {
                if (cardElement.innerHTML.includes(`<strong>${key}:</strong>`)) {
                    cardContainer.removeChild(cardElement);
                }
            });
            keyInput.value = '';
            valueInput.value = '';
            cardCount--;
        }
    });

1


    buttonStart.addEventListener('click', function () {
        setTimeout(function () {
            const elements = cardContainer.children;
            const elements2 = cardSection.children;
            const minLength = Math.min(elements.length, elements2.length);
            for (let i = 0; i < minLength; i++) {
                elements[i].classList.add('hide-animation');
                elements2[i].classList.add('hide-animation');
            }
            setTimeout(function () {
                cardContainer.remove(); // This will delete the cardContainer from the DOM
                cardSection.classList.add('hide'); // Hide the card-section
                createCardForm.classList.add('hide'); // Hide the create-card-form
                cardSection.classList.remove('show-animation');
            }, 1000);
        }, 200);

        setTimeout(function () {
            const elements = gameSection.children;
            for (let i = 0; i < elements.length; i++) {
                gameSection.classList.remove('hide');
                elements[i].classList.add('show-animation');
            }
        }, 200)

        gameSection.classList.remove('hide');
        gameSection.classList.add('show-animation');

        const definition = document.querySelector('#game-card-definition');
        const word = document.querySelector('#game-input');
        const submit = document.querySelector('#game-submit-button');

        let currentCardIndex = 0;

        function showNextCard() {
            if (currentCardIndex < cardsArray.length) {
            const currentCard = cardsArray[currentCardIndex];
            definition.textContent = currentCard.value;
            word.value = '';
            } else {
            alert('Correct! You have completed all cards!');
            }
        }

        showNextCard();

        submit.addEventListener('click', function () {
            const currentCard = cardsArray[currentCardIndex];
            if (word.value.trim().toLowerCase() === currentCard.key.toLowerCase()) {
            currentCardIndex++;
            showNextCard();
            } else {
            alert('Incorrect! Try again.');
            }
        });

        word.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
            e.preventDefault();
            submit.click();
            }
        });




    });

});