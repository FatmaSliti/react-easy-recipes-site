import styles from './Home.module.css';

const Home = () => {
    const recipes = [
        {
            title: 'Spaghetti Carbonara',
            description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
        },
        {
            title: 'Chicken Alfredo',
            description: 'Creamy and delicious pasta with tender chicken and Alfredo sauce.',
        },
        {
            title: 'Vegetable Stir-Fry',
            description: 'Quick and healthy stir-fry with assorted vegetables and tofu.',
        },
    ];

    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <h1>Welcome to Your Cooking Website</h1>
            </header>
            <main>
                <section id="featured-recipes" className={styles.section}>
                    <div className={styles.Sectiontitle}>
                        <h2 >TOP RATED RECIPES</h2>
                        <p>Celebrate the best of our recipes at Your Cooking Website - these are the ones that never go out of style and keep you coming back for more</p>
                    </div>
                    <ul className={styles.recipeList}>
                        {recipes.map((recipe, index) => (
                            <li key={index} className={`${styles.recipeItem} ${styles['recipeItem' + (index + 1)]}`}>
                                <div>
                                    <h3>{recipe.title}</h3>
                                    <p>{recipe.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div >
    );
};

export default Home;
