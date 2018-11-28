import React from 'react';
import { Grid, Header, Icon, Form, Segment, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for React Chat
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid name='username' icon='user' iconPosition='left'
                placeholder='Username' onChange={this.handleChange} type='text'
                autoComplete=''
              />
              <Form.Input fluid name='email' icon='mail' iconPosition='left'
                placeholder='Email' onChange={this.handleChange} type='email'
                autoComplete=''
              />
              <Form.Input fluid name='password' icon='lock' iconPosition='left'
                placeholder='Password' onChange={this.handleChange} type='password'
                autoComplete=''
              />
              <Form.Input fluid name='passwordConfirmation' icon='repeat' iconPosition='left'
                placeholder='Password Confirmation' onChange={this.handleChange} type='password'
                autoComplete=''
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
