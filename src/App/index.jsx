import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './styles.module.scss';

class App extends Component {
  state = {
    b: 10,
    max: 100,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({b: 25});
    }, 3000);
  };

  handlerClick = () => {
    this.setState({max: 150});
    console.log('123');
  };

  render() {
    const { b, max } = this.state;
    const { handlerClick } = this;

    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {b}
          </p>
          <button type="button" onClick={handlerClick}>Нажми меня</button>
          <a
              className={styles['App-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
