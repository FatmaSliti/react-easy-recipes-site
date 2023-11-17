import styles from './DetailsPage.module.css';
import { Modal, Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

function DetailsPage({ modalIsVisible, modalIsHidden }) {
    const mealDetails = useLoaderData(); // Access data loaded by the loader function

    const recipeName = mealDetails ? mealDetails.strMeal : '';

    const ingredients = mealDetails
        ? Object.keys(mealDetails)
            .filter((key) => key.startsWith('strIngredient') && mealDetails[key])
            .map((key) => `${mealDetails[key]} - ${mealDetails[`strMeasure${key.split('strIngredient')[1]}`]}`)
        : [];

    return (
        <Modal show={modalIsVisible} onHide={modalIsHidden}>
            <Modal.Header closeButton>
                <Modal.Title >
                    <p className={styles.detailsTitle}>{recipeName}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <p>ID: {id}</p> */}
                {/* <p>Name: {recipeName}</p> */}
                <p className={styles.ingredients}>Ingredients</p>
                <ul className={styles.detailsPageList}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className={styles.detailsPageItems}>{ingredient}</li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modalIsHidden}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailsPage;

export const loader = async ({ params }) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + params.id);
    const resData = await response.json();

    if (resData.meals && resData.meals.length > 0) {
        console.log(resData.meals[0]);
        return resData.meals[0];
    } else {
        return null;
    }
};
