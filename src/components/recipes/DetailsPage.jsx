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










// import { useEffect, useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { useLoaderData, useParams } from 'react-router-dom';

// function DetailsPage({ modalIsVisible, modalIsHidden }) {

//     // const [ingredinets, setIngredients] = useState([])

//     const { id } = useParams();
//     const mealDetails = useLoaderData(); // Access data loaded by the loader function

//     const ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//         const ingredient = mealDetails[`strIngredient${i}`];
//         const measure = mealDetails[`strMeasure${i}`];

//         if (ingredient && measure) {
//             ingredients.push(`${ingredient} - ${measure}`);
//         } else if (ingredient) {
//             ingredients.push(ingredient);
//         }
//     }

//     return (
//         <Modal show={modalIsVisible} onHide={modalIsHidden}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Ingredients</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <p>Modal Content</p>
//                 <p>ID: {id}</p>
//                 {mealDetails ? (
//                     <div>
//                         {ingredients.map((ingredient, index) => (
//                             <p key={index}>{ingredient}</p>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>Loading...</p> // Or display an error message for failed data retrieval
//                 )}
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={modalIsHidden}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

// export default DetailsPage;

// export const loader = async ({ params }) => {
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.id);
//     const resData = await response.json();
//     console.log( resData)
//     // return null

//     return resData.meals ? resData.meals[0] : null;
// }








import styles from './DetailsPage.module.css';
import { Modal, Button } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

function DetailsPage({ modalIsVisible, modalIsHidden }) {
    const { id } = useParams();
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


// export const loader = async ({ params }) => {
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + params.id);
//     const resData = await response.json();
//     console.log(resData.meals.idMeal)
//     return resData.meals ? resData.meals[0] : null;
// };

















    // const data = useLoaderData();
    // const { id } = useParams()
    

    // useEffect(() => {
    //     const fetchMeals = async () => {
    //         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    //         const data = await response.json();

    //         if (data.meals && data.meals.length > 0) {
    //             const mealDetails = data.meals[0];

    //             // Fetch only the ingredients
    //             const ingredients = [];
    //             for (let i = 1; i <= 20; i++) {
    //                 const ingredient = mealDetails[`strIngredient${i}`];
    //                 const measure = mealDetails[`strMeasure${i}`];

    //                 // Check if both ingredient and measure exist
    //                 if (ingredient && measure) {
    //                     ingredients.push(`${ingredient} - ${measure}`);
    //                 } else if (ingredient) {
    //                     ingredients.push(ingredient);
    //                 }
    //             }

    //             // Now 'ingredients' array contains the list of ingredients
    //             console.log('Ingredients:', ingredients);
    //             setIngredients(ingredients);
    //         }
    //     }
    //     fetchMeals();
    // }, [id])