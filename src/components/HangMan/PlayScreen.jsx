import React, { useState, useEffect } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Popup from './Popup';
import Notification from './Notification';
import { showNotification as show, checkWin } from './helpers/helpers';

import './css/MainScreen.css';

const words = ['hci'];
const tohopphims = ['H', 'TZ', 'PR','*-I','K'];
// const tohopphim = ['h', '0', 'n','i','k'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function PlayScreen() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [point, setPoint] = useState(0);
    const [count, setCount] = useState(0);
    const [tohopphim, setTohopphim] = useState("");

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            setTohopphim(tohopphim+tohopphims[count]+" ")
            setCount(count+1)
            console.log(count);
            // setTimeout(() => {
            //     setCount(count+1)
            //   }, 20);
            
            if (playable && keyCode >= 65 && keyCode <= 90  ) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                        setPoint(point + 5000);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                        setPoint(point - 1000);
                    } else {
                        show(setShowNotification);
                    }
                }
               
            }
            

        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable, point, count, tohopphim]);

    function playAgain() {
        setPlayable(true);
        setPoint(0)
        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);
        setTohopphim('');
        setCount(0);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <div>
            <div style={{ display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50 }}>Trò chơi: Người treo cổ</div>
            <div className="hangman-game">
                <Header />
                <p>Điểm hiện tại: {point}</p>
                <p> <b>Tổ hợp phím đã nhập</b> </p>
                <p><h4>{tohopphim}</h4></p>
                <div className="game-container">
                    <Figure wrongLetters={wrongLetters} />
                    <WrongLetters wrongLetters={wrongLetters} />
                    <Word selectedWord={selectedWord} correctLetters={correctLetters} />
                </div>
                <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} point={point} />
                <Notification showNotification={showNotification} />
            </div>
        </div>
    );
}

export default PlayScreen;