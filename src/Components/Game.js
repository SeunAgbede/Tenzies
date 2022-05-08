import React from "react"
import Die from "../Components/Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import {useLocation} from 'react-router-dom';


export default function Game() {

    const location = useLocation();
    let userName = location.state
   

    //Creates an array and pushes 10 random die number objects in them 
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }


    //Creates an array and push 10 random die objects in them 
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice

    }

    const [diceNum, setDiceNum] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [statRoll, setStatRoll] = React.useState(0)
    const [gameTime, setGameTime] = React.useState(0)




    function rollDice() {
        if (!tenzies) {
            setDiceNum(prevState => prevState.map(die => {
                return die.isHeld ? die : generateNewDie()
            }))
            setStatRoll(prevState => prevState + 1)
        } else {
            setTenzies(false)
            setDiceNum(allNewDice())
            setStatRoll(0)
            setGameTime(0)
        }
    }

    React.useEffect(() => {

        let timerId

        if (!tenzies) {
            timerId = setInterval(() => {
                setGameTime(prevTime => prevTime + 1)
            }, 1000)
        }

        return () => clearInterval(timerId)

    }, [tenzies])


    function holdDice(id) {
        setDiceNum(prevState => prevState.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }

    const diceElements = diceNum.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
    ))


    React.useEffect(() => {
        //array.every() returns a boolean
        const allHeld = diceNum.every(die => die.isHeld)
        const firstValue = diceNum[0].value
        const allSameValue = diceNum.every(die => die.value === firstValue)

        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [diceNum])

    


    return (
        <main>

            {tenzies && <Confetti />}


            <h1 className="title">Tenzies</h1>

            <p className="instructions">Roll until all dice are the same.<br />Click each die to freeze it at its current value between rolls.</p>

            {/* No of rolls and game time */}
            <div className="user-info">
                
                {/* addinga dummy username if user doesn't inputname */}
                <p>Hello, <strong>{userName ? userName : "User"}</strong></p>

                
                <div className="user-info-stats">
                    <p>No of Rolls : {statRoll}</p>
                    <p>Game time : {gameTime} s</p>
                </div>
            </div>


            <div className="die--container">
                {diceElements}
            </div>

            {tenzies && <p className="win"><strong>Congratulations!</strong> You won!</p>}

            <button className="roll--btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}