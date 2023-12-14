import { useState, useEffect } from 'react';
import { generateRandomNum } from '../utils/generationRandomNum'; 

function RandomNumber({ maxNum }) {
    const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
    
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(maxNum));
    };

    useEffect(() => {
        setRandomNum(generateRandomNum(maxNum));
    }, [maxNum]);

    return(
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>generate new random number</button>
        </div>
    );
}

export default RandomNumber;