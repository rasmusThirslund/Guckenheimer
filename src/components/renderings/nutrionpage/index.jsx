import React, {Component, Fragment} from 'react';
import TopMenu from "../topmenu";
import SectionWrapper from '../../layout/sectionWrapper';
import SingleWrapper from "../../layout/singleWrapper";
import Footer from "../footer";
import styles from './nutrionpage.scss';
import classNames from "classnames/bind";
let cx = classNames.bind(styles);


class NutritionPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>


                <TopMenu hideNavigation back/>


                <SectionWrapper>

                    <div className={styles.selectorWrapper}>
                        <SingleWrapper>
                            <div className={styles.cols}>
                            <h1 className={styles.navHeader}>Nutrion Fact</h1>
                            <div className={styles.select}>
                                <select>
                                    <option value={null}>Select food type</option>
                                    <option>Food 1</option>
                                    <option>Food 2</option>
                                    <option>Food 3</option>
                                </select>
                            </div>
                            </div>
                        </SingleWrapper>

                    </div>

                </SectionWrapper>


                <Footer/>

            </Fragment>

        )
    }
}

export default NutritionPage;