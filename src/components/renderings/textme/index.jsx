import React, { Component } from 'react';
import styles from './textme.scss'

class TextMe extends Component {
	constructor(props) {
		super(props);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.state = { selectedMenuIndex: 0 }
	}

	onSelectChange(event) {
		this.setState({
			selectedMenuIndex: parseInt(event.target.value)
		});
	}
	render() {
		return (
			<section className={styles.textMe}>

				<h1 className={styles.textMeHeader}>Get the menu in your mailbox, every day!</h1>

				<form action="#" className={styles.textMeForm}>

					<input className={styles.textMeInput} name="email" type="email" required placeholder="Your email" />

					<button className={styles.textMeButton} type="submit">Subscribe</button>

					<a href="#" className={styles.textMeLink}>Unsubscribe</a>

				</form>
				
			</section>
		);
	}
}

export default TextMe;
