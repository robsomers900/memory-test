import { useState, useEffect } from "react"
import LoadGameOverModal from "./gameovermodal"

function getRandomInt(range){
    return Math.floor(Math.random() * range)
}

export default function LoadGrid() {
    const [clickedValues, setClickedValues] = useState([])
    const [lastClicked, setLastClicked] = useState(null)
    const [value, setValue] = useState([getRandomInt(100),getRandomInt(100),getRandomInt(100),getRandomInt(100)])
    const [modalVisible, setModalVisible] = useState(false)
    const handleButtonClick = (valueClicked) => {
        setClickedValues(prevClickedValues => [...prevClickedValues, valueClicked])
        setLastClicked(valueClicked)
        setValue([getRandomInt(100),getRandomInt(100),getRandomInt(100),getRandomInt(100)])
    }
    useEffect(() => {
        console.log(clickedValues)
        console.log(lastClicked)
        //if last clicked in clickedvalues, modal displays saying you lost - use length of array for score
        let clickedValuesExcludingLast = clickedValues.slice(0, -1)
        console.log(clickedValuesExcludingLast.includes(lastClicked))
        if(clickedValuesExcludingLast.includes(lastClicked)){
            setModalVisible(true)
        }
    }, [clickedValues, lastClicked])
    return(
        <>
            <div className='number-grid'>
                <div className='number-button-container'>
                    <button className='number-button' onClick={() => handleButtonClick(value[0])}>
                        {value[0]}
                    </button>
                </div>
                <div className='number-button-container'>
                    <button className='number-button' onClick={() => handleButtonClick(value[1])}>
                        {value[1]}
                    </button>
                </div>
                <div className='number-button-container'>
                    <button className='number-button' onClick={() => handleButtonClick(value[2])}>
                        {value[2]}
                    </button>
                </div>
                <div className='number-button-container'>
                    <button className='number-button' onClick={() => handleButtonClick(value[3])}>
                        {value[3]}
                    </button>
                </div>
            </div>
            {modalVisible && <LoadGameOverModal />}
        </>
    )
}