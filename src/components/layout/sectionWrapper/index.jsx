import React, {Component} from 'react';
import style from './sectionWrapper.scss';


class SectionWrapper extends Component {
    render () {

        return (
            <section className={style.sectionWrapper}>
                {this.props.children}
            </section>
        )
    }
}

export default SectionWrapper;