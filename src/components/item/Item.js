import { useState, useEffect } from 'react';
import "./Item.css";

const Item = ({card}) => {
    const [showLogo, setShowLogo] = useState(true);

    const {name, img, options} = card;

    const handleClick = () => {
        showLogo ? setShowLogo(!showLogo) : 
        setShowLogo(!showLogo);
    }

    useEffect (() => {
        if (!showLogo) {
            setTimeout(() => setShowLogo(!showLogo), 3000);
        }}, [showLogo]);
    
  return (
    <div className="card" onClick={handleClick}>
        {
            showLogo ? (
                <div>
                    <img className="card-logo" src={img} alt="lang-logo" />
                    <h1 className="card-title"> {name}</h1>
                </div>
            ) : (
                <ul className='list'>
                    {options.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}
                </ul>
            )}
    </div>
  )
}

export default Item