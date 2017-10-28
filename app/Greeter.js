import React ,{Component} from 'react'
import config from './config.js'
import styles from './Greeter.css'

class Greeter extends Component{
  render() {
    return (
      <div className={styles.app}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter