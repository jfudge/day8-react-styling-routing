// Making the class component for really no reason. Use it as exposure.
import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Button from '../components/Button';

// Create styled component for the Contact Page layout
const FormContainer = styled.div`
  width: 450px;
  margin: auto;
  margin-top: 40px;
`;

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
    }
    // Remember when you create methods in a class component, you have to bind it to "this"
    this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
    this.handleMessageFieldChange = this.handleMessageFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // For controlled components
  handleNameFieldChange(event) {
    // Update the stae for the name field
    this.setState({
      name: event.target.value,
    });
  }

  // For controlled components
  handleMessageFieldChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  // Method for handling the form submission
  handleSubmit() {
    const { name, message } = this.state;

    console.log({
      name,
      message,
    })
  }

  render() {
    // To set up the controlled form fields, you have to force the values to reflect the form state
    const { name, message } = this.state;

    return (
      <FormContainer>
        <Card>
          <p className="lead">I would love to hear from you!</p>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(event) => this.handleNameFieldChange(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="4"
              value={message}
              onChange={e => this.handleMessageFieldChange(e)}
            ></textarea>
          </div>
          <div className="form-group">
            {/* Button is a styled component that will forward all props automatically */}
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
          </div>
        </Card>
      </FormContainer>
    );
  }
}

export default Contact;
