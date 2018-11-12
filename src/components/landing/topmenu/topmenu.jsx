import React, {Component} from 'react';
import styles from './topmenu.scss';

class TopMenu extends Component {

  render() {

    return (
      <header className={styles.topMenu}>
        <div className={styles.first}>
          <span>
            Guckenheimer
          </span>
        </div>
        <div className={styles.second}>
          <span>
            <strong>Welcome to Guckenheimer</strong>
          </span>
        </div>
        <div className={styles.third}>
          <span>
            Dining Services at <strong>Shire</strong>
          </span>
        </div>
      </header>
    )
  }
}

export default TopMenu;
