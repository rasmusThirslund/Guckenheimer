import React, { Component } from 'react';
import styles from './footer.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>

				<div className={styles.footerSections}>

					<div className={cx('footerSection', 'footerSectionImage')}>
						<img src="https://via.placeholder.com/115x115/cccccc/ffffff?text=Map&font=helvetica" alt="logo" />
						<p>
							<strong>DARDEN RESTAURANTS</strong><br />
							Vincent DeVittorio,<br />
							Food Service Manager<br />
							1000 Darden Center Drive<br />
							Orlando, FL 32837<br />
							Tel. 123-456-6789
						</p>
					</div>

					<div className={styles.footerSection}>
						<p>
							<strong>Cafe Hours of Operation:</strong><br />
							Breakfast 7:70 AM - 10:00 AM<br />
							Lunch 11:30 AM - 1:30 PM<br /><br />
							<strong>Company Store Hours of Operation:</strong><br />
							7:00 AM - 5:00 PM
						</p>
					</div>

					<div className={styles.footerSection}>
						<div style={{ textAlign: 'center' }}>
							<img src="https://via.placeholder.com/200x80/5e5e5e/ffffff?text=Logo(200x80)&font=helvetica" alt="logo" /><br />
							Copyright &copy; 2018. Lorem ipsum dolor
						</div>
					</div>
				</div>

			</footer>
		);
	}
}

export default Footer;
