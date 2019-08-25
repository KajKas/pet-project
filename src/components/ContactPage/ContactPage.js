import React from 'react'
import styled from 'styled-components'

const ContactForm = styled.form`
  margin-top: 50px;
`

const FormSelect = styled.select`
  height: 30px;
  width: 430px;
  background: #fff;
  color: #000;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 5px;
  
  &:focus {
    outline: none !important;
    border:2px solid #000;
  }
`

const FormInput = styled.input`
  display: block;
  width: 418px;
  height: 30px;
  padding: 0 5px;
  margin-top: 10px;
  color: #000;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 5px;
  
  &:focus {
    outline: none !important;
    border:2px solid #000;
  }
`

const FormTextarea = styled.textarea`
  display: block;
  width: 423px;
  padding: 5px 0 0 5px;
  margin-top: 10px;
  color: #000;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 5px;
  
  &:focus {
    outline: none !important;
    border:2px solid #000;
  }
`

class ContactPage extends React.Component {


  render() {
    return (
      <div>
        <h1>Contact</h1>
        <h3>If you would like to contact us or an author of a specific course, you can do it here by choosing an appropriate subject. You will be answered via email.</h3>
        <ContactForm>
          <FormSelect required>
            <option disabled selected hidden>Subject</option>
            <option value="1">Technical question</option>
            <option value="2">Payment question</option>
            <option value="3">Course 1</option>
            <option value="4">Course 2</option>
            <option value="5">Course 3</option>
          </FormSelect>
          <FormInput type="text" placeholder='Full name'/>
          <FormInput type="text" placeholder='Email address'/>
          <FormTextarea rows='10' cols='50' placeholder='Your question'/>
        </ContactForm>
      </div>
    )
  }
}

export default ContactPage
