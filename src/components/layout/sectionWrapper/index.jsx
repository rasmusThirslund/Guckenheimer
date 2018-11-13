import React, {Component} from 'react';
import styles from './sectionWrapper.scss';

import classNames from "classnames/bind";

let cx = classNames.bind(styles);


class SectionWrapper extends Component {
    render() {

        const {flush, grey, walled, className} = this.props;

        let classes = cx(styles.sectionWrapper, className, {
            marginBottomNone: flush === 'bottom',
            bgGrey: grey,
            walled: walled,
        });

        return (
            <section className={classes}>
                {this.props.children}
            </section>
        )
    }
}

export default SectionWrapper;