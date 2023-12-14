import React from 'react';
import photo from './img/imgVel.png';
import styles from './module.css';

function SecondBlock() {
    return (
        <div className={styles.SecondBlock}>
            <div className='main-block1'>
                <div className='container'>
                    <div className='text1'>
                        <h1>Что мы предлагаем</h1>
                        <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
                    </div>
                </div>
                <div className='photo1'><img src={photo} /></div>

            </div>
        </div>
    );
};

export default SecondBlock;