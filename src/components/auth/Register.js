import React from 'react';
import { Grid, Header, Icon, Form, Segment, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Register extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(createdUser => {
      console.log('createdUser: ', createdUser);
    })
    .catch(error => {
      console.log('error: ', error);
    });

  }
  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register Slack
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input fluid name='username' icon='user' iconPosition='left'
                placeholder='Username' onChange={this.handleChange} type='text'
                autoComplete='' value={username}
              />
              <Form.Input fluid name='email' icon='mail' iconPosition='left'
                placeholder='Email' onChange={this.handleChange} type='email'
                autoComplete='' value={email}
              />
              <Form.Input fluid name='password' icon='lock' iconPosition='left'
                placeholder='Password' onChange={this.handleChange} type='password'
                autoComplete='' value={password}
              />
              <Form.Input fluid name='passwordConfirmation' icon='repeat' iconPosition='left'
                placeholder='Password Confirmation' onChange={this.handleChange} type='password'
                autoComplete='' value={passwordConfirmation}
              />
              <Button color='orange' fluid size='large'>Submit</Button>
            </Segment>
          </Form>
          <Message>Already a user ? <Link to='/login'>Login</Link></Message>
        </Grid.Column>
      </Grid>
    )
  }
}
export default Register;
