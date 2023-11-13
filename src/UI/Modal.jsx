import { useNavigate } from 'react-router-dom'

import styles from './Modal.module.css'
const Modal = ({children, onClose}) => {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/recipes');
        
    }

    return (
        <>
            {/* <div className={styles.backdrop} onClick={closeHandler} /> */}
            <div className={styles.backdrop} onClick={onClose} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal
