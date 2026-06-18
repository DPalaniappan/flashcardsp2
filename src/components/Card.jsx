import { useState, useEffect } from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    setIsFlipped(false);
  }, [props.question]);

  return (
    <div className="card" onClick={handleClick}>
        <div className={isFlipped ? 'card-flipped' : 'card-notflipped'} id={props.category}>
            {isFlipped ? (
                <div className="card-back">
                    <p>{props.answer}</p>
                </div>
            ) : (
                <div className="card-front">
                    <h3>{props.question}</h3>
                </div>
            )}
        </div>
    </div>
  )
}

export default Card;
