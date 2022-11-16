import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/abyssal.png"},
  {"src": "/img/garosh.png"},
  {"src": "/img/maiev.png"},
  {"src": "/img/murloc.png"},
  {"src": "/img/polymorph.png"},
  {"src": "/img/valeera.png"},

]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) => ({...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        console.log('those cards match')
        resetTurn()
      } else {
        console.log('those cards do not match')
        resetTurn()
      }

    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }


 


  return (
    <div className="App">

      
     <h1>Card Match</h1>
     <button onClick={shuffleCards}> New Game </button>
     <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
