import React, {Component} from 'react';
import styles from './singleWrapper.scss';




class SingleWrapper extends Component {
    render () {

        return (
            <div className={styles.singleWrapper}>
                {this.props.children}
            </div>
        )
    }
}

export default SingleWrapper;