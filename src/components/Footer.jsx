// import styles from './Footer.module.css'

// function Footer() {
//     return (
//         <footer className={styles.footer}>
//             <p>&copy; {new Date().getFullYear()} Easy Recipes</p>
//         </footer>
//     )
// }

// export default Footer

import styles from './Footer.module.css'; // Assuming the CSS module file is named Footer.module.css
import knife from '../assets/knife.jpg'
import chicken from '../assets/pan.jpg'
import taste from '../assets/taste.jpg'
import spag from '../assets/spag.jpg'
import vig from '../assets/vig.jpg'
import cook from '../assets/cook.jpg'
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h3>Easy Recipes</h3>
                    <ul className={styles.icons}>
                        <li>
                            <a href="/" className={`${styles.facebook}`}>
                                <i className={`fa-brands fa-facebook-f ${styles['icon-one']}`}></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className={`${styles.twitter}`}>
                                <i className={`fa-brands fa-twitter ${styles['icon-two']}`}></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className={`${styles.youtube}`}>
                                <i className={`fa-brands fa-youtube ${styles['icon-three']}`}></i>
                            </a>
                        </li>
                    </ul>
                    <p className={styles.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
                    </p>
                </div>

                <div className={styles.box}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Recipes</a></li>
                        <li><a href="/">Cooking Tips</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.box}>
                    <div className={styles.text}>
                        <i className={`fa-regular fa-location-dot`}></i>
                        <p className={styles.info}>Tunisia, Tunis, Inside The Sphinx, Room Number 220</p>
                    </div>
                    <div className={styles.text}>
                        <i className={`fa-regular fa-clock`}></i>
                        <p className={styles.info}>Business Hours: From 10:00 To 18:00</p>
                    </div>
                    <div className={styles.text}>
                        <i className={`fa-regular fa-phone`}></i>
                        <div className={styles.number}>
                            <span>+21695017336</span>
                            <span>+21696546519</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.box} ${styles['footer-images']}`}>
                    <img src={knife} alt="image" />
                    <img src={chicken} alt="" />
                    <img src={taste} alt="" />
                    <img src={spag} alt="" />
                    <img src={vig} alt="" />
                    <img src={cook} alt="" />
                </div>
            </div>
            <p className={styles.copyright}>Made With &lt;3 By Fatma</p>
        </div>
    );
}

export default Footer;
