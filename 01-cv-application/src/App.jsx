import { useState } from 'react'
import './App.css'

// Hay que crear un funcion que cuando escribes en el input se actualice el state


function App() {
  const [name, setName] = useState('John Wick')
  const [email, setEmail] = useState('johnwick@gmail.com')
  const [phone, setPhone] = useState('612345678')
  const [address, setAddress] = useState('Orlando, Florida')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the respective state variable based on the input field's name
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  };


  return (
    <div className='main-container'>
      <div className='input-container'>
        <div className='personal-input'>
          <h2>Personal Information</h2>
          <form className = "form-container" action="submit">
            <label htmlFor="name">Full name</label>
            <input type="text" name="name" id="name" onChange={handleInputChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"onChange={handleInputChange} />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" onChange={handleInputChange} />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" onChange={handleInputChange}/>
          </form>
        </div>
        <div className='education-input'>Education</div>
        <div className='experience-input'>Experience</div>
      </div>

      <div className='output-container'>
        <div className='personal-output'>
          <h1 className='personal-name'>{name}</h1>
            <div className='contact-info'>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{address}</p>
            </div>
          </div>
        <div className='experience'></div>
        <div className='education-output'>Education</div>
        <div className='professional-output'>Experience</div>

      </div>

    </div>

  )
}

export default App
