import React, { Component, Fragment } from 'react';
import style from './nutrionpage.scss';


class NutritionPage extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <section>

                <nav>
                    <div>
                    <h1 className={style.navHeader}>Nutrion Fact</h1>
                    <div>
                    <select>
                        <option value={null} >Select food type</option>
                        <option>Food 1</option>
                        <option>Food 2</option>
                        <option>Food 3</option>
                    </select>
                    </div>
                    </div>
                </nav>

            </section>
        )
    }
}

export default NutritionPage;