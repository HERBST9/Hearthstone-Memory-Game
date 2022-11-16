import './SingleCard.css'



const SingleCard = ({card, handleChoice}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return ( 
       
        <div className="card">
         <div>
           <img className="front" src={card.src} alt="card front" />
           <img onClick={handleClick} className="back" src="/img/cover.png" alt="cover" />
         </div>
      </div>

     );
}
 
export default SingleCard;