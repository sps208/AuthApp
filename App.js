import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import config from './src/config';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';
import Button from './src/components/Button';

class App extends Component {

  state = {
    loggedIn: null
  }

  componentDidMount() {
    if(!firebase.apps.length) {
      console.log('Init firebase...');
      firebase.initializeApp(config.firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
        this.setState(({loggedIn: !!user}))
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
        case true: return(
            <Card>
                <CardSection>
                    <Button>Logout</Button>
                </CardSection>
            </Card>
        )
        case false: return <LoginForm />
        
        default:
        return (
            <Card>
                <CardSection>
                    <Button>Logout</Button>
                </CardSection>
            </Card>
        )
    }
}

    render(){
      return(
        <View >
         <Header title="Authentication"/>
          { this.renderContent() }
        </View>
      );
    }
}

export default App;