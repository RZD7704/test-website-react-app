import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {

    const {path, label, text, src} = props; 
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img className="cards__item__img" src={src} alt="Travel Image"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;
