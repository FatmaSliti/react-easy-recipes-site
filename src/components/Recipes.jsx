import styles from './Recipes.module.css';

const recipesData = [
    {
        title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
    },
    {
        title: 'Chicken Alfredo',
        description: 'Creamy and delicious pasta with tender chicken and Alfredo sauce.',
    },
    {
        title: 'Grilled Salmon with Lemon Butter',
        description: 'Flaky salmon fillets grilled to perfection and drizzled with a zesty lemon butter sauce.',
    },
    {
        title: 'Mushroom Risotto',
        description: 'Creamy and savory risotto with sautéed mushrooms, white wine, and Parmesan cheese.',
    },
    {
        title: 'Roasted Chicken with Herbs',
        description: 'Juicy and flavorful roasted chicken seasoned with a medley of fresh herbs and spices.',
    },
    {
        title: 'Chocolate Lava Cake',
        description: 'Decadent chocolate cake with a gooey, molten center that is sure to satisfy your sweet tooth.',
    },
    {
        title: 'Crispy Fried Chicken',
        description: 'Golden and crispy fried chicken with a secret blend of herbs and spices for extra flavor.',
    },
];

function Recipes() {
    return (
        <>
            <div className={styles.recipesContainer}>
                <h1 className={styles.title}>Recipes</h1>
                <p className={styles.recipes}>
                    We have carefully curated these recipes so you can effortlessly find the perfect dish for any occasion. Whether you are catering to specific dietary preferences, planning quick weeknight dinners, or exploring our tried-and-true classics, our collection is designed to make your culinary journey a delightful one. No matter how you explore our site, we are confident you will discover the perfect recipe to satisfy your cravings.
                </p>
            </div>
            <div className={styles.section}>
                <h2 >All Recipes</h2>
                <ul className={styles.recipeList}>
                    {recipesData.map((recipe, index) => (
                        <li key={index} className={styles.recipeItem}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Recipes;
