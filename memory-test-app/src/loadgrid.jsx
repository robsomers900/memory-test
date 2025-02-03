import { useState } from "react"

function getRandomInt(range){
    return Math.floor(Math.random() * range)
}

export default function LoadGrid() {
    const [value, setValue] = useState([getRandomInt(100),getRandomInt(100),getRandomInt(100),getRandomInt(100)])
    const handleButtonClick = () => {
        setValue([getRandomInt(100),getRandomInt(100),getRandomInt(100),getRandomInt(100)])
    }

    return(
        <>
            <div className='number-grid'>
                <div className='number-button-container'>
                    <button className='number-button' onClick={handleButtonClick}>
                        {value[0]}
                    </button>
                </div>
                <div className='number-button-container'>
                    <button className='number-button' onClick={handleButtonClick}>
                        {value[1]}
                    </button>
                </div>
                <div className='number-button-container'>
                    <button className='number-button' onClick={handleButtonClick}>
                        {value[2]}
                    </button>
                </div>
                <div className='number-button-container'>
                    <button className='number-button' onClick={handleButtonClick}>
                        {value[3]}
                    </button>
                </div>
            </div>
        </>
    )
}