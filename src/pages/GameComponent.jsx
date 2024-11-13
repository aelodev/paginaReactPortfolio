import React, { useState } from 'react';
import './game.css';

const GameComponent = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [cards, setCards] = useState([]);
    const [gameCards, setGameCards] = useState([]); // Almacena las cartas para el juego
    const [currentCardIndex, setCurrentCardIndex] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [newWord, setNewWord] = useState('');
    const [newDefinition, setNewDefinition] = useState('');
    const textIntroSection = document.querySelector('.text-intro-section');

    // Function to start the game
    const startGame = () => {
        if (cards.length > 0) {
            setGameCards([...cards]); // Copia las cartas a gameCards
            textIntroSection.classList.add('hide-animation');
            textIntroSection.classList.add('hide');
            setCards([]); // Borra la lista de cartas añadidas
            setCurrentCardIndex(0); // Empieza desde la primera carta
            setGameStarted(true);
        } else {
            alert("No hay cartas. Añade algunas para empezar el juego.");
        }
    };

    // Function to add a new card with key and value
    const addCard = () => {
        if (newWord.trim() && newDefinition.trim()) {
            setCards([...cards, { key: newWord, value: newDefinition }]);
            setNewWord('');
            setNewDefinition('');
        }
    };

    // Function to handle input change for game guess
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Function to handle checking the answer
    const checkAnswer = () => {
        if (inputValue.trim().toLowerCase() === gameCards[currentCardIndex].key.toLowerCase()) {
            setInputValue('');
            // Move to next card, or end game if no more cards
            if (currentCardIndex < gameCards.length - 1) {
                setCurrentCardIndex(currentCardIndex + 1);
            } else {
                alert("¡Felicidades, has completado todas las cartas!");
                setGameStarted(false);
                setGameCards([]); // Vacía las cartas del juego al finalizar
            }
        } else {
            alert("Inténtalo de nuevo.");
        }
    };

    return (
        <main>
            <section className="text-intro-section">
                <h1>Bienvenida al juego para estudiar de Nadiacita para estudiar</h1>
                <p>En este juego tendrás que crear tus propias cartas con las definiciones y tú tendrás que decir qué palabras son.</p>

                <input
                    type="text"
                    placeholder="Nueva palabra"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nueva definición"
                    value={newDefinition}
                    onChange={(e) => setNewDefinition(e.target.value)}
                />
                <button onClick={addCard}>Añadir Carta</button>
                <button onClick={startGame}>Empezar juego</button>
            </section>

            {/* Section to show cards as they are added */}
            {cards.length > 0 && (
                <section className="cards-section">
                    <h2>Cartas</h2>
                    <div id="cards-container">
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <strong>{card.key}</strong>: {card.value}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Game section visible only when game starts */}
            {gameStarted && currentCardIndex !== null && (
                <section className="game-section show-animation">
                    <h2>Juego</h2>
                    <div id="game-container">
                        <div id="game-card">
                            <h3>{gameCards[currentCardIndex].value}</h3> {/* Show definition */}
                        </div>
                        <div id="game-input-container">
                            <input
                                type="text"
                                id="game-input"
                                placeholder="Escribe la palabra"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <button id="game-submit-button" onClick={checkAnswer}>
                                Comprobar
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default GameComponent;
