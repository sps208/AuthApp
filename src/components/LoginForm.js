import React, { Component } from 'react';

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import Input from './Input'

class LoginForm extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email1@gmail.com" />
                </CardSection>
                <CardSection>
                <Input label="Password" placeholder="password" />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
