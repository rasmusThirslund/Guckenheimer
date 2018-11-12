import React, { Component } from 'react';
import styles from './todaysmenu.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class TodaysMenu extends Component {
	constructor(props) {
		super(props);
		this.onTabClick = this.onTabClick.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.state = { selectedMenuIndex: 0 }
	}

	onTabClick(index) {
		this.setState({
			selectedMenuIndex: index
		});
	}

	onSelectChange(event) {
		this.setState({
			selectedMenuIndex: parseInt(event.target.value)
		});
	}

	render() {
		let menuTags = [{ tag: 'S', title: 'Seafood' }, { tag: 'VG', title: 'Vegan' }, { tag: 'V', title: 'Vegetarian' }, { tag: 'HL', title: 'Halal' }, { tag: 'GF', title: 'Gluten Free' }];
		let dates = [{ day: 'Monday', date: '27/8' }, { day: 'Tuesday', date: '28/8' }, { day: 'Wednesday', date: '29/8' }, { day: 'Thursday', date: '30/8' }, { day: 'Friday', date: '1/9' }];
		let menues = [
			{
				menues: [
					{ title: 'The Block Breakfast', timespan: 'Served form 7.30 to 11.00', subHeadline: 'Denver Omelet with Ham, Onion, Pepper and Cheddar Cheese served with Two Toast', largePrize: 5.95 },
					{
						title: 'Lunch', timespan: 'Served form 11.30 to 1.00', subHeadline: null, largePrize: null,
						dishes: [
							{
								title: 'Soup I',
								price: '2.99 - 4.25',
								description: 'Mushroom Bisque'
							},
							{
								title: 'Soup II',
								price: '2.99 - 4.25',
								description: 'Vegetable Stew'
							},
							{
								title: 'Pressed Panini',
								price: '5.95',
								description: 'Roast Beef and Cheddar with Horseradish Mayo served with a Side',
								tags: [{ tag: 'GF', title: 'Gluten Free' }]
							},
							{
								title: 'Foodlab - Innovation Station',
								price: '5.95',
								description: 'Hand Rolled Sushi',
								tags: [{ tag: 'S', title: 'Seafood' }]
							},
							{
								title: 'Market Bistro',
								price: '6.50',
								description: 'Chicken Pot Pie'
							},
							{
								title: 'The Block - better burger',
								price: '6.50',
								description: 'Bacon Mushroom Cheeseburger with Lettuce, Tomato and Onion served with Potato Salad'
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							}
						]
					}]
			},
			{
				menues: [
					{ title: 'Menu 2', timespan: 'Served form 7.30 to 11.00', subHeadline: 'Denver Omelet with Ham, Onion, Pepper and Cheddar Cheese served with Two Toast', largePrize: 5.95 },
					{
						title: 'Menu 2', timespan: 'Served form 11.30 to 1.00', subHeadline: null, largePrize: null,
						dishes: [
							{
								title: 'Soup II',
								price: '2.99 - 4.25',
								description: 'Vegetable Stew'
							},
							{
								title: 'Soup I',
								price: '2.99 - 4.25',
								description: 'Mushroom Bisque'
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							},
							{
								title: 'Pressed Panini',
								price: '5.95',
								description: 'Roast Beef and Cheddar with Horseradish Mayo served with a Side',
								tags: [{ tag: 'GF', title: 'Gluten Free' }]
							},
							{
								title: 'Market Bistro',
								price: '6.50',
								description: 'Chicken Pot Pie'
							},
							{
								title: 'The Block - better burger',
								price: '6.50',
								description: 'Bacon Mushroom Cheeseburger with Lettuce, Tomato and Onion served with Potato Salad'
							},
							{
								title: 'Foodlab - Innovation Station',
								price: '5.95',
								description: 'Hand Rolled Sushi',
								tags: [{ tag: 'S', title: 'Seafood' }]
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							}
						]
					}]
			},
			{
				menues: [
					{ title: 'Menu 3', timespan: 'Served form 7.30 to 11.00', subHeadline: 'Denver Omelet with Ham, Onion, Pepper and Cheddar Cheese served with Two Toast', largePrize: 5.95 },
					{
						title: 'Menu 3', timespan: 'Served form 11.30 to 1.00', subHeadline: null, largePrize: null,
						dishes: [
							{
								title: 'Soup II',
								price: '2.99 - 4.25',
								description: 'Vegetable Stew'
							},
							{
								title: 'Soup I',
								price: '2.99 - 4.25',
								description: 'Mushroom Bisque'
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							},
							{
								title: 'Pressed Panini',
								price: '5.95',
								description: 'Roast Beef and Cheddar with Horseradish Mayo served with a Side',
								tags: [{ tag: 'GF', title: 'Gluten Free' }]
							},
							{
								title: 'Market Bistro',
								price: '6.50',
								description: 'Chicken Pot Pie'
							},
							{
								title: 'The Block - better burger',
								price: '6.50',
								description: 'Bacon Mushroom Cheeseburger with Lettuce, Tomato and Onion served with Potato Salad'
							},
							{
								title: 'Foodlab - Innovation Station',
								price: '5.95',
								description: 'Hand Rolled Sushi',
								tags: [{ tag: 'S', title: 'Seafood' }]
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							}
						]
					}]
			},
			{
				menues: [
					{ title: 'Menu 4', timespan: 'Served form 7.30 to 11.00', subHeadline: 'Denver Omelet with Ham, Onion, Pepper and Cheddar Cheese served with Two Toast', largePrize: 5.95 },
					{
						title: 'Menu 4', timespan: 'Served form 11.30 to 1.00', subHeadline: null, largePrize: null,
						dishes: [
							{
								title: 'Soup II',
								price: '2.99 - 4.25',
								description: 'Vegetable Stew'
							},
							{
								title: 'Soup I',
								price: '2.99 - 4.25',
								description: 'Mushroom Bisque'
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							},
							{
								title: 'Pressed Panini',
								price: '5.95',
								description: 'Roast Beef and Cheddar with Horseradish Mayo served with a Side',
								tags: [{ tag: 'GF', title: 'Gluten Free' }]
							},
							{
								title: 'Market Bistro',
								price: '6.50',
								description: 'Chicken Pot Pie'
							},
							{
								title: 'The Block - better burger',
								price: '6.50',
								description: 'Bacon Mushroom Cheeseburger with Lettuce, Tomato and Onion served with Potato Salad'
							},
							{
								title: 'Foodlab - Innovation Station',
								price: '5.95',
								description: 'Hand Rolled Sushi',
								tags: [{ tag: 'S', title: 'Seafood' }]
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							}
						]
					}]
			},
			{
				menues: [
					{ title: 'Menu 5', timespan: 'Served form 7.30 to 11.00', subHeadline: 'Denver Omelet with Ham, Onion, Pepper and Cheddar Cheese served with Two Toast', largePrize: 5.95 },
					{
						title: 'Menu 5', timespan: 'Served form 11.30 to 1.00', subHeadline: null, largePrize: null,
						dishes: [
							{
								title: 'Soup II',
								price: '2.99 - 4.25',
								description: 'Vegetable Stew'
							},
							{
								title: 'Soup I',
								price: '2.99 - 4.25',
								description: 'Mushroom Bisque'
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							},
							{
								title: 'Pressed Panini',
								price: '5.95',
								description: 'Roast Beef and Cheddar with Horseradish Mayo served with a Side',
								tags: [{ tag: 'GF', title: 'Gluten Free' }]
							},
							{
								title: 'Market Bistro',
								price: '6.50',
								description: 'Chicken Pot Pie'
							},
							{
								title: 'The Block - better burger',
								price: '6.50',
								description: 'Bacon Mushroom Cheeseburger with Lettuce, Tomato and Onion served with Potato Salad'
							},
							{
								title: 'Foodlab - Innovation Station',
								price: '5.95',
								description: 'Hand Rolled Sushi',
								tags: [{ tag: 'S', title: 'Seafood' }]
							},
							{
								title: 'The Block Feature',
								price: '8.50',
								description: 'Grilled Tilapia with Charred Tomato Chipotle Salsa, Roasted Vegetables and Yellow Rice',
								tags: [{ tag: 'V', title: 'Vegetarian' }]
							},
							{
								title: 'Budget Feature',
								price: '4.99',
								description: 'Half Sandwich and Large Soup'
							}
						]
					}]
			}];
		let buttonList = [];
		let optionList = [];
		let tagList = [];

		dates.map((date, index) => {
			let tabClass = cx({
				todaysMenuNavButton: true,
				todaysMenuNavButtonActive: index === this.state.selectedMenuIndex
			});
			optionList.push(
				<option key={index} value={index}>{date.day} {date.date}</option>
			)
			buttonList.push(
				<li className={styles.todaysMenuNavItem} key={index}>
					<button className={tabClass} onClick={this.onTabClick.bind(null, index)}>
						<strong>{date.day}</strong> {date.date}
					</button>
				</li>
			);
		});

		menuTags.map((tag, tagIndex) => {
			tagList.push(
				<div className={styles.todaysMenuDishTagsMenuItem} key={tagIndex}>
					<abbr title={tag.title} className={styles.todaysMenuDishTag}>{tag.tag}</abbr>
					<span className={styles.todaysMenuDishTagTitle}>{tag.title}</span></div>);
		});

		let selectedMenu = menues[this.state.selectedMenuIndex];

		return (
			<section className={styles.todaysMenu}>

				<div className={styles.todaysMenuSelectWrapper}>
					<div className={styles.todaysMenuSelectStyle}>
						<select className={styles.todaysMenuSelect} onChange={this.onSelectChange} value={this.state.selectedMenuIndex}>
							{optionList}
						</select>
					</div>
				</div>

				<ul className={styles.todaysMenuNav}>
					{buttonList}
				</ul>

				{selectedMenu.menues.map((menu, index) => {
					return (
						<div className={styles.todaysMenuContainer} key={index}>
							<div className={styles.todaysMenuHeader}>
								{menu.title}
							</div>
							<div><strong>{menu.timespan}</strong></div>
							<div>{menu.subHeadline}</div>
							<div className={styles.todaysMenuLargePrice}>{menu.largePrize}</div>

							{menu.dishes && <ul className={styles.todaysMenuDishes}>
								{menu.dishes.map((dish, dishIndex) => {
									return (
										<li className={styles.todaysMenuDish} key={dishIndex}>
											<div className={styles.todaysMenuPriceContainer}>
												<div className={styles.todaysMenuDishTitle}><span>{dish.title}</span></div>
												<div className={styles.todaysMenuDishPrice}>{dish.price}</div>
											</div>
											<div className={styles.todaysMenuDishDescription}>
												{dish.description}
												{dish.tags && <div className={styles.todaysMenuDishTags}>
													{dish.tags.map((tag, tagIndex) => {
														return (<abbr title={tag.title} className={styles.todaysMenuDishTag} key={tagIndex}>{tag.tag}</abbr>)
													})}
												</div>}
											</div>
										</li>)
								})}
							</ul>}
						</div>)
				})}

				<div className={styles.todaysMenuDishTagsMenu}>{tagList}</div>
			</section>
		);
	}
}

export default TodaysMenu;
