import React, { Component, Fragment } from 'react';
// import Banner from "./components/renderings/banner";
// import TodaysMenu from "./components/renderings/todaysmenu";
// import TextMe from "./components/renderings/textme";
// import ThreeColGrid from "./components/renderings/threecolgrid";
// import MeetUs from "./components/renderings/meetus";
// import Promotion from "./components/renderings/promotion";
import NutritionPage from './components/renderings/nutrionpage'
import TopMenu from "./components/renderings/topmenu";
import Footer from "./components/renderings/footer";
import styles from './styles/main.scss'

class App_page2 extends Component {
	render() {
		return (
			<Fragment>

				<TopMenu hideNavigation back></TopMenu>

                <NutritionPage />

				{/*<Banner type="heroBanner"*/}
					{/*hasImage={true}*/}
					{/*header="Super food for your brain"*/}
					{/*subHeader="Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur."*/}
					{/*buttonText="Be smart about your diet"*/}
					{/*bannerBgStyle={{ backgroundImage: "url('//picsum.photos/1280/500?image=999')" }}></Banner>*/}

				{/*<TodaysMenu></TodaysMenu>*/}

				{/*<TextMe></TextMe>*/}

				{/*<ThreeColGrid>*/}
					{/*<Banner type="inlineBanner"*/}
						{/*hasImage={true}*/}
						{/*category="Nutrition"*/}
						{/*header="Get the scoop on your daily nutrition"*/}
						{/*buttonText="Feast your eyes on the facts"*/}
						{/*bannerBgStyle={{ backgroundImage: "url('//picsum.photos/1280/500?image=835')" }}*/}
                            {/*href="/index2.html"></Banner>*/}
					{/*<Banner type="inlineBanner"*/}
						{/*category="Feedback"*/}
						{/*header="Your opinion makes a difference!"*/}
						{/*subHeader="How are you doing?"*/}
						{/*buttonText="Give us a vote"*/}
						{/*bannerBgStyle={{ backgroundColor: "#387091" }}></Banner>*/}
					{/*<Banner type="inlineBanner"*/}
						{/*dark={true}*/}
						{/*category="Take home orders"*/}
						{/*header="Too busy to cook tonight?"*/}
						{/*subHeader="Let us give you a hand"*/}
						{/*buttonText="Get your dinner here"*/}
						{/*bannerBgStyle={{ backgroundColor: "#ccc" }}></Banner>*/}
				{/*</ThreeColGrid>*/}


				{/*<Banner*/}
					{/*hasImage={true}*/}
					{/*category="Catering"*/}
					{/*header="We're ready to craft a culinary experience for you"*/}
					{/*buttonText="View menu and order today"*/}
					{/*bannerBgStyle={{ backgroundImage: "url('//picsum.photos/1280/500?image=999')" }}></Banner>*/}

                {/*<MeetUs></MeetUs>*/}

                {/*<ThreeColGrid reverse={true}>*/}
                    {/*<Banner type="inlineBanner"*/}
                            {/*hasImage={true}*/}
                            {/*category="Our history"*/}
                            {/*header="50 years of Culinary Excellence"*/}
                            {/*buttonText="We also started in a garage"*/}
                            {/*bannerBgStyle={{ backgroundImage: "url('//picsum.photos/1280/500?image=674')" }}></Banner>*/}
                    {/*<Banner type="inlineBanner"*/}
                            {/*category="Cafe account"*/}
                            {/*header="Get a Café Account and save time every single day"*/}
                            {/*buttonText="Get on the fast track"*/}
                            {/*bannerBgStyle={{ backgroundColor: "#387091" }}></Banner>*/}
                    {/*<Banner type="inlineBanner"*/}
                            {/*dark={true}*/}
                            {/*category="Our food blog"*/}
                            {/*header="10 Tips for Creating a Healthy Home Environment"*/}
                            {/*buttonText="Get started today"*/}
                            {/*bannerBgStyle={{ backgroundColor: "#ccc" }}></Banner>*/}
                {/*</ThreeColGrid>*/}

                {/*<Promotion></Promotion>*/}

				<Footer></Footer>

			</Fragment>
		);
	}
}

export default App_page2;
