import React from 'react';
import styles from './module.css';

function FourthBlock({ data: { square_1, square_2, square_3 } }) {
    return (
        <div className={styles.FourthBlock}>
            <div className='squares'>
                <div className='box1'>
                    <h1>{square_1.title}</h1>
                </div>
                <div className='box2'>
                    <h1>{square_2.title}</h1>
                </div>
                <div className='box3'>
                    <h1>{square_3.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default FourthBlock;
