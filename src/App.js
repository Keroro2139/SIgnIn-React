import React, { Component } from 'react';
import Radium from 'radium';

import Button from './components/Button';
import Input from './components/Input';

class App extends Component {

  // Handle for when submit
  // sign in form.
  handleSubmit = event => {

    // For don't refresh
    // page when submit.
    event.preventDefault();

    console.log(event.target.username.value);
    console.log(event.target.password.value);
  }

  render() {
    const styles = {
      layout: {
        display: 'flex',
        userSelect: 'none',
      },
      leftContainer: {
        background: '#EFEFEF',
        height: '100vh',
        width: '550px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
      rightContainer: {
        width: 'calc(100% - 550px)',
        height: '100vh',
        float: 'right',
        background: '#f2b632',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#242E42',
      },
    }

    return (
      <div style={styles.layout}>

        <div style={styles.leftContainer}>

          <h1 style={styles.header}>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              type={'text'}
              placeholder={'Username'}
              height={'20px'}
              autoFocus={true}
              name={'username'}
            />
            <Input
              type={'password'}
              placeholder={'Password'}
              height={'20px'}
              name={'password'}
            />

            <Button
              text={'Sign In'}
              type={'submit'}
              background={'#f2b632'}
              hover={'#CF981E'}
              border={'none'}
              borderRadius={'1px'}
              width={'270px'}
              height={'38px'}
              marginTop={'30px'}
              boxShadow={'0 3px 4px rgba(0, 0, 0, 0.125)'}
            />
          </form>

        </div>

        <div style={styles.rightContainer}>
          <h1>Route Planning</h1>
        </div>

      </div>
    );
  }
}

export default Radium(App);
