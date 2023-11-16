import { useEffect, useState } from "react"
import styles from './RecipesData.module.css'

import { Link } from 'react-router-dom'
import DetailsPage from "./DetailsPage";

function RecipesData({ modalIsVisible }) {
    // const [modalIsVisible, setModalIsVisible] = useState(true)

    const [data, setData] = useState([]);
    useState()
    // const categories = ["chicken", "beef", "pasta", "fish", "vegetarian"];

    const [visibleMeals, setVisibleMeals] = useState(8);

    // const showModalHandler = () => {
    //     setModalIsVisible(true);
    // }

    // const hideModalHandler = () => {
    //     setModalIsVisible(false);
    // }

    useEffect(() => {
        const fetchMeals = async () => {
            // const randomIndex = Math.floor(Math.random() * categories.length);
            // const category = categories[randomIndex];

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
            const data = await response.json();
            console.log(data);

            const transformedData = data.meals.map(product => {
                return {
                    id: product.idMeal,
                    title: product.strMeal,
                    area: product.strArea
                }
            })
            setData(transformedData);
        }

        fetchMeals();
    }, [])

    const loadMore = () => {
        setVisibleMeals(prevMeals => prevMeals + 4)
    }

    return (
        <>
            <ul className={styles.list}>
                {data.slice(0, visibleMeals).map((item) => (
                    <li key={item.id} className={styles.listItem}>
                        <Link to={`/recipes/${item.id}`} style={{textDecoration: 'none'}}>
                            <div onClick={modalIsVisible}>
                                <h1 className={styles.title}>{item.title}</h1>
                                <h2 className={styles.area}>{item.area}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            {visibleMeals < data.length && <button onClick={loadMore} type='submit' className={`btn btn-primary ${styles.recipeBtn}`}>Load More...</button>}
        </>
    )
}

export default RecipesData
