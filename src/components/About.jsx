import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles['about-container']}>
            <div className={styles['about-image']}>
                <img src="aboutt.jpg" alt="image" />
            </div>
            <div className={styles['about-text']}>
                <h1>About Us</h1>
                <div className={styles.innertext}>
                    <p>Welcome to Easy Recipes, your go-to source for delicious and easy-to-follow recipes. Our mission is to help home cooks of all skill levels explore the joy of cooking and create mouthwatering dishes in their own kitchens.</p>
                    <p>Our journey started with a shared love for food and a desire to simplify the cooking process. Whether you are a seasoned chef or a beginner in the kitchen, you will find something to inspire your culinary adventures here.</p>
                    <p>At Easy Recipes, we offer a diverse collection of recipes, cooking tips, and culinary insights. We believe that cooking should be a fun and rewarding experience, and our goal is to make it accessible to everyone.</p>
                    <p>Our team of passionate food enthusiasts is dedicated to providing you with the best recipes, expert advice, and creative ideas. We are here to support your cooking endeavors and make your kitchen a place of creativity and discovery.</p>
                    <p>Thank you for being a part of our cooking community. We look forward to sharing many delicious meals with you!</p>
                </div>
            </div>
        </div>
    );
}

export default About;
