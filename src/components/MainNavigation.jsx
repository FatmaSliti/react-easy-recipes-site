import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css'
function MainNavigation() {
    return (

        <header className={styles.header}>
            <h1 className={styles.logo}>Easy Recipes</h1>

            <div className={styles.container}>
                <p>
                    <Link to="/" className={styles.button}>Home</Link>
                </p>
                <p>
                    <Link to="/recipes" className={styles.button}>Recipes</Link>
                </p>
                <p>
                    <Link to="/tips" className={styles.button}>Cooking Tips</Link>
                </p>
                <p>
                    <Link to="/about" className={styles.button}>About</Link>
                </p>
                <p>
                    <Link to="/contact" className={styles.button}>Contact</Link>
                </p>
            </div>
        </header>

    )
}

export default MainNavigation
