import styles from './Tips.module.css'

const Tips = () => {

    const cookingTips = [
        "Taste as You Go: Taste your food throughout the cooking process and adjust the seasoning if needed. This ensures your dish is perfectly seasoned.",
        "Master Basic Knife Skills: Learn basic knife skills like chopping, dicing, and mincing to make cooking more enjoyable and efficient.",
        "Rest Meat: Allow cooked meat to rest before slicing. This helps the juices redistribute, resulting in juicier and more tender meat.",
        "Balance Flavors: Achieve a balance of sweet, salty, sour, and savory flavors in your dishes to create a well-rounded taste.",
        "Use Fresh Ingredients: Whenever possible, use fresh, seasonal ingredients for the best flavor and texture.",
        "Organize Your Workspace: Keep your kitchen organized and clean while cooking to make the process more enjoyable and efficient.",
        "Don't Crowd the Pan: Overcrowding the pan can lead to uneven cooking. Cook in batches if necessary.",
        "Patience with Stir-Frying: When stir-frying, cook ingredients in small batches to maintain high heat and avoid steaming.",
    ];

    return (
        <div className={styles.tipsContainer}>
            <h2 className={styles.tipsTitle}>Cooking Tips</h2>
            <ul className={styles.tips}>
                {cookingTips.map((tip, index) => <li key={index}>{tip}</li>)}
            </ul>
        </div>
    )
}

export default Tips
