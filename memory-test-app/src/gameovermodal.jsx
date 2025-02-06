import React, { useState } from "react"
import Modal from "./Modal"


export default function LoadGameOverModal(){
    const [modalState, setModalState] = useState(true)
    const handleOpen = () => {
        setModalState(true)
    }
    const handleClose = () => {
        setModalState(false)
    }
    return(
        <div>
            <Modal isOpen = {modalState} onClose = {handleClose}>
                <>
                Testing
                </>
            </Modal>
        </div>
    )
}