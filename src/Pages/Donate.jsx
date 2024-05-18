import React, { useState } from 'react';
import logo from '../assets/LOGO 1.png';
import './donate.css';
import { Link } from 'react-router-dom';
import toprated from '../assets/toprated.png';
import fourStar from '../assets/fourstar.png';

const Donate = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('One-Time-Gift');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleFrequencyClick = (frequency) => {
    setSelectedFrequency(frequency);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount when a predefined amount is selected
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      setCustomAmount(value);
      setSelectedAmount(`${value}$`);
    } else if (value === '') {
      setCustomAmount('');
      setSelectedAmount('');
    }
  };

  const handleDonateClick = () => {
    if (selectedAmount && selectedFrequency) {
      setShowDialog(true);
    } else {
      alert('Please select an amount and a frequency.');
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText('whitewolf642784@gmail.com').then(() => {
      window.location.href = 'https://www.paypal.com';
    });
  };

  return (
    <div className='donate'>
      <div className='donateNav'>
        <Link to={"/"}><img src={logo} alt="" /></Link>
        <div>
          <img src={fourStar} alt="" />
          <img src={toprated} alt="" />
        </div>
      </div>
      <div className="bill">
        <div>
          <h1>GIFT FREQUENCY</h1>
        </div>
        <div className='btnss'>
          <div className="btnd">
            <button 
              className={selectedFrequency === 'One-Time-Gift' ? 'selected' : ''} 
              onClick={() => handleFrequencyClick('One-Time-Gift')}
            >
              One-Time Gift
            </button>
            <button 
              className={selectedFrequency === 'Monthly Gifts' ? 'selected' : ''} 
              onClick={() => handleFrequencyClick('Monthly Gifts')}
            >
              Monthly Gift
            </button>
          </div>
          {selectedFrequency === 'One-Time-Gift' && (
            <h1>A monthly gift does even more to help Israel's brave soldiers.</h1>
          )}
        </div>
        <div className='billing'>
          {['50$', '100$', '250$', '500$', '1000$', '2000$'].map((amount) => (
            <button 
              key={amount} 
              className={selectedAmount === amount ? 'selected' : ''} 
              onClick={() => handleAmountClick(amount)}
            >
              {amount}
            </button>
          ))}
          <input 
            type="text"  
            placeholder='Other Amounts' 
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
        </div>
        
        {/* BILLING classNameM ////////////////////////////////////////////////////////////////////// */}
        <div className="form-container">
          <form action='https://formspree.io/f/xkndzkkw' method='POST'>
          <h2>BILLING INFORMATION</h2>
            
            <label className="title">Title</label>
            <select id="title" name="title">
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
            </select>
          
            <label className="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required></input>
          
            <label className="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required></input>
          
            <label className="address">Apt/Box/Unit/Suite</label>
            <input type="text" id="address" name="address"></input>
          
            <label className="city">City</label>
            <input type="text" id="city" name="city" required></input>
          
            <label className="state">State/Province</label>
            <input type="text" id="state" name="state" required></input>
          
            <label className="zip">Zip/Postal Code</label>
            <input type="text" id="zip" name="zip" required></input>
          
            <label className="country">Country</label>
            <input type="text" id="country" name="country" required></input>
          
            <label className="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required></input>
          
            <label className="email">Email Address</label>
            <input type="email" id="email" name="email" required></input>

            <button type="submit">CONFIRM</button>
          
          </form>
        </div>
        <br></br> <br></br>


        <div className='rb'>
          <button className='donatebtn' onClick={handleDonateClick}>Donate Now</button>
        </div>
      </div>

      {showDialog && (
        <div className='dialog'>
          <div className='dialog-content'>
            <p>
              Thank you className your generous donation of {selectedAmount} as a {selectedFrequency.replace('-', ' ')} to support the IDF. Please send your payment to the PayPal account below; 
              <br></br> <br></br>
              <p className='P'>whitewolf642784@gmail.com</p> <br></br>

              <p className='P2'>NOTICE!!<br></br>
              Send as (friends and family)</p>
            </p>
            <button onClick={handleCopyClick}>Copy</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
