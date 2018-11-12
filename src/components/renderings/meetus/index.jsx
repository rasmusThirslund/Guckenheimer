import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './meetus.scss'

class MeetUs extends Component {
	render() {
		let settings = {
			//arrows: false,
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 5,
			initialSlide: 0,
			className: styles.meetUsSlider,
			dotsClass: styles.meetUsDots,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		let contacts = [
			{ title: 'Chef Manager', name: 'Vinny DeVittorio', phone: '407-245-6487', email: 'xxx@guckenheimer.com' },
			{ title: 'Front of House Manager', name: 'Kristy Aviles', phone: '407-245-6488', email: 'xxx@guckenheimer.com' },
			{ title: 'Area Manager', name: 'Dana Hoffman', phone: '615-504-2322', email: 'xxx@guckenheimer.com' },
			{ title: 'Area Vice President', name: 'Rex Roe', phone: '972-243-4028', email: 'xxx@guckenheimer.com' },
			{ title: 'Chef Manager', name: 'Vinny DeVittorio', phone: '407-245-6487', email: 'xxx@guckenheimer.com' },
			{ title: 'Front of House Manager', name: 'Kristy Aviles', phone: '407-245-6488', email: 'xxx@guckenheimer.com' },
			{ title: 'Area Manager', name: 'Dana Hoffman', phone: '615-504-2322', email: 'xxx@guckenheimer.com' },
			{ title: 'Area Vice President', name: 'Rex Roe', phone: '972-243-4028', email: 'xxx@guckenheimer.com' }]

		return (
			<section className={styles.meetUs}>
				<div className={styles.meetUsCategory}>Guckenheimer</div>
				<div className={styles.meetUsHeader}>Pleased to meet you</div>
				<Slider {...settings}>
					{contacts.map((contact, index) => {
						return (
							<div key={index}>
								<div className={styles.meetUsContact}>
									<div className={styles.meetUsContactTitle}>{contact.title}</div>
									<div className={styles.meetUsContactName}>{contact.name}</div>
									<a href={'tel:' + contact.phone} className={styles.meetUsContactPhoneNo}>{contact.phone}</a><br />
									<a href={'mailto:' + contact.email} className={styles.meetUsContactEmail}>Email me</a>
								</div>
							</div>)
					})}
				</Slider>
			</section>
		);
	}
}

export default MeetUs;
