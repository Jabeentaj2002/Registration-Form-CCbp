// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    firstNameErr: false,
    lastNameErr: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameErr: !isValidFirstName,
        lastNameErr: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({firstNameErr: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({lastNameErr: !isValidLastName})
  }

  onrenderForm = () => {
    const {firstName, lastName, firstNameErr, lastNameErr} = this.state
    return (
      <form className="user-credentials" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="first-name-label">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          className="firstname-input"
          onChange={this.onChangeFirstName}
          value={firstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameErr ? <p>Required</p> : ''}

        <label htmlFor="lastName" className="first-name-label">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          id="lastName"
          className="firstname-input"
          onChange={this.onChangeLastName}
          value={lastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameErr ? <p>Required</p> : ''}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onRenderForm = () => {
    this.setState({isFormSubmitted: false, firstName: '', lastName: ''})
  }

  onRenderSubmittedCard = () => (
    <div className="submitted-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submitted-txt">Submitted Successfully</p>
      <button
        type="button"
        className="another-response-btn"
        onClick={this.onRenderForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="registration-heading">Registration</h1>
        {isFormSubmitted ? this.onRenderSubmittedCard() : this.onrenderForm()}
      </div>
    )
  }
}

export default RegistrationForm
