import React, { useState, useEffect } from 'react';
import Header from '../components/HangMan/Header';
import Figure from '../components/HangMan/Figure';
import WrongLetters from '../components/HangMan/WrongLetters';
import Word from '../components/HangMan/Word';
import Popup from '../components/HangMan/Popup';
import Notification from '../components/HangMan/Notification';
import { showNotification as show, checkWin } from '../components/HangMan/helpers/helpers';

import '../components/HangMan/css/MainScreen.css';
import MainSlideBarContainer from '../components/MainSlideBarContainer';
import NavBar from '../components/NavBar';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function HangManScreen() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div>
      <MainSlideBarContainer />
      <NavBar />
      <div className="content-wrapper">
        <div style={{ display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50 }}>Trò chơi: Hang Man</div>
        <div className="hangman-game">
          <Header />
          <div className="game-container">
            <Figure wrongLetters={wrongLetters} />
            <WrongLetters wrongLetters={wrongLetters} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          </div>
          <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
          <Notification showNotification={showNotification} />
        </div>
      </div>
    </div>
  );
}

export default HangManScreen;