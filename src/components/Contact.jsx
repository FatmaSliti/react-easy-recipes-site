import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
        <div className={styles['contact-container']}>
            <h1 className={styles.contactTitle}>Contact Us</h1>

            <form className={styles['contact-form']} action="process_contact.php" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                {/* <input type="submit" value="Submit" /> */}
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>

            <p>Alternatively, you can email us at <a href="mailto:fatmasliti289@gmail.com">fatmasliti@gmail.com</a></p>
            
        </div>
            <div className={styles.contactImage}>
                <img src="contactUs.jpg" alt="image"  className={styles.contactImage}/>
            </div>
        </div>
    );
}

export default Contact;
