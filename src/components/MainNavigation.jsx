// import { Link } from 'react-router-dom';
// import styles from './MainNavigation.module.css'
// function MainNavigation() {
//     return (

//         <header className={styles.header}>
//             <h1 className={styles.logo}>Easy Recipes</h1>

//             <div className={styles.container}>
//                 <p>
//                     <Link to="/" className={styles.button}>Home</Link>
//                 </p>
//                 <p>
//                     <Link to="/recipes" className={styles.button}>Recipes</Link>
//                 </p>
//                 <p>
//                     <Link to="/tips" className={styles.button}>Cooking Tips</Link>
//                 </p>
//                 <p>
//                     <Link to="/about" className={styles.button}>About</Link>
//                 </p>
//                 <p>
//                     <Link to="/contact" className={styles.button}>Contact</Link>
//                 </p>
//             </div>
//         </header>

//     )
// }

// export default MainNavigation

// import { Link } from 'react-router-dom';
// import styles from './MainNavigation.module.css'
// function MainNavigation() {
//     return (


//         <nav class="navbar bg-primary" data-bs-theme="dark">
//             <div class="container-fluid">
//                 <Link class="navbar-brand" to="#">Navbar</Link>
//             </div>
            
//         </nav>
//     )
// }




// export default MainNavigation


// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark" style={{ height: '70px' }} >
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">Navbar</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/recipes">Recipes</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/tips">Cooking Tips</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark" style={{ height: '70px' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipes">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tips">Cooking Tips</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
