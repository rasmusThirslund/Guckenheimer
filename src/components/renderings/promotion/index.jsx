import React, {Component} from 'react';
import styles from './promotion.scss'

class Promotion extends Component {
  render() {
    return (
        <section className={styles.promotion}>


			<div className={styles.promotionDetailsDesktop}>
				<img src="https://via.placeholder.com/220x290/cccccc/ffffff?text=Image&font=helvetica" alt="Image" className={styles.promotionImage} />
				<div className={styles.promotionImageText}>September week 1</div>
			</div>

			<div className={styles.promotionContainer}>

				<div className={styles.promotionHeader}>
					<div className={styles.promotionCategory}>Monthly Promotions</div>
					<h1 className={styles.promotionHeadline}>Committed to making food fun again!</h1>
				</div>

				<div className={styles.promotionDetails}>
					<img src="https://via.placeholder.com/120x180/cccccc/ffffff?text=Image&font=helvetica" alt="Image" className={styles.promotionImage} />
					<div className={styles.promotionImageText}>September week 1</div>
				</div>

				<div className={styles.promotionDescription}>
					<p>Our monthly promotions activities are designes to stimulate satisfaction through the introduction of new, interesting food experiences, and the creation of an exciting, festive environment.</p>
					<a href="#" className={styles.promotionButton}>This months promotions</a>
				</div>
				
			</div>

		</section>
    );
  }
}

export default Promotion;
