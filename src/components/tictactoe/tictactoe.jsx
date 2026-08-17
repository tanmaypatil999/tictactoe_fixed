import React, { useRef, useState } from "react";
import './tictactoe.css';
import circle from '../images/circle.png';
import cross from '../images/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {

    let [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    let titleref = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {

        if (lock) {
            return;
        }

        if (data[num] !== "") {
            return;
        }

        if (count % 2 === 0) {

            e.target.innerHTML = `<img src='${cross}' />`;
            data[num] = "x";
            setCount(count + 1);

        }
        else {

            e.target.innerHTML = `<img src='${circle}' />`;
            data[num] = "o";
            setCount(count + 1);
        }

        checkWin();
    }

    const won = (winner) => {

        setLock(true);

        if (winner === 'x') {
            titleref.current.innerHTML =
                `Congratulations <img src='${cross}' /> wins`;
        }
        else {
            titleref.current.innerHTML =
                `Congratulations <img src='${circle}' /> wins`;
        }
    }

    const checkWin = () => {

        if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            won(data[0]);
        }

        else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            won(data[3]);
        }

        else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            won(data[6]);
        }

        else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
            won(data[0]);
        }

        else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
            won(data[1]);
        }

        else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
            won(data[2]);
        }

        else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
            won(data[0]);
        }

        else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
            won(data[2]);
        }
    }

    const reset = () => {

        setLock(false);
        setCount(0);

        data = ["", "", "", "", "", "", "", "", ""];

        titleref.current.innerHTML =
            `Tic Tac Toe In <span>ReactJS</span>`;

        box_array.forEach((e) => {
            e.current.innerHTML = "";
        });
    }

    return (
        <div className="container">

            <h1 className="title" ref={titleref}>
                Tic Tac Toe Puzzle in
                <span> ReactJS</span>
            </h1>

            <div className="board">

                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)} ref={box1}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)} ref={box2}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)} ref={box3}></div>
                </div>

                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)} ref={box4}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)} ref={box5}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)} ref={box6}></div>
                </div>

                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)} ref={box7}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)} ref={box8}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)} ref={box9}></div>
                </div>

            </div>

            <button className="restart" onClick={reset}>
                Restart
            </button>

        </div>
    );
}

export default TicTacToe;