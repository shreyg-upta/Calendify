import React from 'react';
import us from '../assets/us.jpg';

function App() {
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '42.8vw',
    margin: '2vh auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  };

  const imageStyle = {
    width: '600px', // Increase width as desired
    height: 'auto', // Maintain aspect ratio
    borderRadius: '12px', // Adjust border radius for curved corners
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#333',
  };

  return (
    <>
      <div style={containerStyle}>
        <img src={us} alt="Us" style={imageStyle} />
        <h3 style={textStyle}>
        Hello people (hopefully, more than 1 user on the site)!
        <br /><br />
        I am Shrey, and as I write this about us section, I want to share a bit about our journey. Alongside me is Prakhar (Kumar Aditya Kumar Jagdish Prasad) Gupta, who is coding while sleeping in the image, tirelessly working to develop this idea into reality.
        <br /><br />
        And we are the developers of this project. We have worked really hard to make this website what it is today. Our goal was to create something truly useful and enjoyable for our users. We hope you find it helpful and engaging.
        <br /><br />
        Thank you for visiting our site and being a part of our community.
        </h3>
      </div>
    </>
  );
}

export default App;





