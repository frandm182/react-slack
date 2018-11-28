import React from 'react';
import { Grid, Header, Icon, Form, Segment, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Register extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: []
  };

  isFormValid = () => {
    let errors = [];

    let error;

    if(this.isFormEmpty(this.state)) {
      error = { message: 'Fill in all fields'}
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if(!this.isPasswordValid(this.state)) {
      error = { message: 'Password is invalid'};
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  }

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p> )

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return !username.length || !email.length || !password.length || !passwordConfirmation.length;
  }

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if(password.length < 6 || passwordConfirmation < 6) {
      return false;
    } else if(password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    if(this.isFormValid()) {
      e.preventDefault();
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

  }
  render() {
    const { username, email, password, passwordConfirmation, errors } = this.state;
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
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>Already a user ? <Link to='/login'>Login</Link></Message>
        </Grid.Column>
      </Grid>
    )
  }
}
export default Register;
