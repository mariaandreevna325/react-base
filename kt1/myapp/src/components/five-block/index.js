import React from 'react';
import photo from './img/linkedin.png';
import styles from './module.css';

function FiveBlock() {
    return (
        <div className={styles.FiveBlock}>
            <div className='main-block4'>
                <div className='photo4'>
                    <img src={photo} />
                </div>
                <div className='text4'>
                    <div className='container'>
                        <h1 className='italic-text'>Прокат велосипедов</h1>
                        <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiveBlock;
