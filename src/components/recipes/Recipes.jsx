import styles from './Recipes.module.css';
import RecipesData from './RecipesData';

function Recipes() {
    return (
            <div className={styles.allRecepies}>
                <div className={styles.recipesContainer}>
                    <h1 className={styles.title}>Recipes</h1>
                    <p className={styles.recipes}>
                        We have carefully curated these recipes so you can effortlessly find the perfect dish for any occasion. Whether you are catering to specific dietary preferences, planning quick weeknight dinners, or exploring our tried-and-true classics, our collection is designed to make your culinary journey a delightful one. No matter how you explore our site, we are confident you will discover the perfect recipe to satisfy your cravings.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 >All Recipes</h2>
                    <ul >
                        <RecipesData />
                    </ul>
                </div>
            </div>
        
    );
}

export default Recipes;
