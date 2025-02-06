import React, { useState } from "react"
import Modal from "./Modal"


export default function LoadGameOverModal({value}){
    const [modalState, setModalState] = useState(true)
    const handleOpen = () => {
        setModalState(true)
    }
    const handleClose = () => {
        setModalState(false)
        window.location.reload()
    }
    return(
        <div>
            <Modal isOpen = {modalState} onClose = {handleClose}>
                <>
                {value}
                </>
            </Modal>
        </div>
    )
}