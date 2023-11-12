import { useParams } from "react-router-dom"
import Modal from "../../UI/Modal"

import styles from './DetailsPage.module.css';

function DetailsPage() {
    const { id } = useParams()
    return (
        <Modal >
            <div className={styles.detailsContainer}>
                <h1>DetailsPage</h1>
                <p>ID: {id}</p>
            </div>
        </Modal>
    )
}

export default DetailsPage
