import React, {Component} from 'react';
import styles from './sectionWrapper.scss';

import classNames from "classnames/bind";

let cx = classNames.bind(styles);



class SectionWrapper extends Component {
    render () {

        let classes = cx(styles.sectionWrapper,{
             marginBottomNone: this.props.flush === 'bottom'
            });

        return (
            <section className={classes}>
                {this.props.children}
            </section>
        )
    }
}

export default SectionWrapper;