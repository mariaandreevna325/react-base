import React from 'react';
import styles from './module.css';

function ThirdBlock() {
    return (
        <div className={styles.ThirdBlock}>
            <div className='main-block3'>
                <p className='first-text'>Приехав однажды, многие наши клиенты становятся <br /> постоянными, а часть из них даже друзьями.</p>
                <p className='second-text'>А также в нашей мастерской можно отремонтировать <br /> электросамокат и электровелосипед.</p>
            </div>
        </div>
    );
};

export default ThirdBlock;