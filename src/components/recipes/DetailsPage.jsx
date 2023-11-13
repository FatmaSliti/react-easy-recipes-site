// import { useParams } from "react-router-dom"
// import Modal from "../../UI/Modal"

// import styles from './DetailsPage.module.css';
// // import { useState } from "react";

// function DetailsPage({modalIsVisible, modalIsHidden}) {

//     const { id } = useParams()
//     return (
//         <>
//             {modalIsVisible && (
//                 <Modal onClose={modalIsHidden}>
//                     <div className={styles.detailsContainer}>
//                         <h1>DetailsPage</h1>
//                         <p>ID: {id}</p>
//                     </div>
//                 </Modal>
//             )}
//         </>
//     )
// }

// export default DetailsPage










import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

function DetailsPage({ modalIsVisible, modalIsHidden }) {
    // const dat = useLoaderData();
    const { id } = useParams()


    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();

            if (data.meals && data.meals.length > 0) {
                const mealDetails = data.meals[0];

                // Fetch only the ingredients
                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = mealDetails[`strIngredient${i}`];
                    const measure = mealDetails[`strMeasure${i}`];

                    // Check if both ingredient and measure exist
                    if (ingredient && measure) {
                        ingredients.push(`${ingredient} - ${measure}`);
                    } else if (ingredient) {
                        ingredients.push(ingredient);
                    }
                }

                // Now 'ingredients' array contains the list of ingredients
                console.log('Ingredients:', ingredients);
            }
        }
        fetchMeals();
    }, [id])

    return (
        <Modal show={modalIsVisible} onHide={modalIsHidden}>
            <Modal.Header closeButton>
                <Modal.Title>Ingredients</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Modal Content</p>
                {/* <p>ID: {ingredients}</p> */}
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

// const loader = async ({ params }) => {
//     // const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s' + params.id);
//     // const resData = await response.json();
// }

