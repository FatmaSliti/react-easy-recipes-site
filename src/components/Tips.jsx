import styles from './Tips.module.css'
import { Container, Card, Row, Col } from 'react-bootstrap';

import pan from '../assets/pan.jpg';
import taste from '../assets/taste.jpg';
import knife from '../assets/knife.jpg';

const imageSources = [taste, knife, pan];

const Tips = () => {
    const cookingTipsData = [
        {
            title: "Taste as You Go",
            description: "Taste your food throughout the cooking process and adjust the seasoning if needed. This ensures your dish is perfectly seasoned."
        },
        {
            title: "Master Basic Knife Skills",
            description: "Learn basic knife skills like chopping, dicing, and mincing to make cooking more enjoyable and efficient."
        },
        {
            title: "Don't Crowd the Pan",
            description: "Don't Crowd the Pan. Overcrowding the pan can lead to uneven cooking. Cook in batches if necessary."
        },
        
    ];

    return (
        <Container className={styles.tipsContainer}>
            <h2 className={styles.tipsTitle}>Cooking Tips</h2>
            <Row className={styles.tips}>
                {cookingTipsData.map((tip, index) => (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <Card className={styles.tipCard}>
                            <Card.Img variant="top" src={imageSources[index]} alt={`Tip ${index + 1}`} />
                            <Card.Body>
                                <Card.Title>{tip.title}</Card.Title>
                                <Card.Text>{tip.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tips
