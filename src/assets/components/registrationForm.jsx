import { Component } from 'react'

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    gender: 'male',
    music_hobby: false,
    sport_hobby: false,
    hobby: [],
    birthdate: '',
    age: 0,
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target
    // Handle different input types
    this.setState({
      [name]: type === 'checkbox' ? checked : type === 'radio' ? value : value,
    })
  }

  // handleInputChange = (event) => {
  //   const { name, value, type, checked } = event.target
  //   // Handle different input types

  //   if (type === 'checkbox' && checked) {
  //     this.state.hobby.push(value)
  //   } else {
  //     this.setState({
  //       [name]: type === 'radio' ? value : value,
  //     })
  //   }
  // }

  handleRegisterClick = () => {
    console.log('Registration Data:', this.state)
  }

  render() {
    return (
      <div className='main_form_container'>
        <div className='form_container'>
          <h3 className='registration_main_text'>Registration Form</h3>
          {/* full name */}
          <div className='fullname'>
            <label htmlFor='userInput'>Full Name</label>
            <input
              type='text'
              className='userInput'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          {/* Email */}
          <div className='userEmail'>
            <label htmlFor='userEmail'>Email</label>
            <input
              type='email'
              className='userInputEmail'
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          {/* Password */}
          <div className='userPassword'>
            <label htmlFor='userPassword'>Password</label>
            <input
              type='password'
              className='userInputPassword'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          {/* Gender */}
          <div className='userGender'>
            <p className='genderText'>Gender</p>
            <input
              type='radio'
              id='male'
              name='gender'
              value={this.state.gender === 'male'}
              onChange={this.handleInputChange}
            />
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              id='female'
              name='gender'
              value={this.state.gender === 'female'}
              onChange={this.handleInputChange}
            />
            <label htmlFor='female'>Female</label>
          </div>
          {/* Intrest */}
          <div className='userIntrest'>
            <p className='userIntrest'>Intrest</p>
            <input
              type='checkbox'
              name='hobby'
              checked={this.state.hobby === 'music'}
              onChange={this.handleInputChange}
            />
            <label htmlFor='music'>Music</label>
            <input
              type='checkbox'
              name='hobby'
              checked={this.state.hobby === 'sports'}
              onChange={this.handleInputChange}
            />
            <label htmlFor='sports'>Sports</label>
          </div>
          {/* Age */}
          <div className='Userage'>
            <label htmlFor='Age'>Age</label>
            <input
              type='range'
              name='age'
              value={this.state.age}
              min='0'
              max='100'
              onChange={this.handleInputChange}
            />
            <div className='ageText'>Age {this.state.age}</div>
          </div>
          {/* BirthDate */}
          <div className='UserBirthdate'>
            <label htmlFor='Birthdate'>Birthdate</label>
            <input
              type='date'
              className='userInputBirthdate'
              name='birthdate'
              value={this.state.birthdate}
              onChange={this.handleInputChange}
            />
          </div>
          <button onClick={this.handleRegisterClick}>Register</button>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
