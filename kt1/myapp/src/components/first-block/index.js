import React from 'react';
import png from './img/din.png';
import styles from './module.css';

const FirstBlock = () => {
    return (
        <div className={styles.FirstBlock}>
            <div className='main-block'>
                <div className='text'>
                    <div className='container'>
                        <h1 className='italic-text'>Веломастерская "Велозар"</h1>
                        <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
                    </div>
                </div>
                <div className='photo'>
                    <img src={png} />
                </div>
            </div>
        </div>
    );
};

export default FirstBlock;
