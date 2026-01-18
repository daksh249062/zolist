import React, { useState, useEffect } from 'react';

const animatedStyles = `
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes panBackground {
  0% {
    background-size: 105% 105%;
    background-position: 50% 50%;
  }
  50% {
    background-size: 110% 110%;
    background-position: 55% 55%;
  }
  100% {
    background-size: 105% 105%;
    background-position: 50% 50%;
  }
}

@keyframes shimmer {
    0% {
        text-shadow: 0 0 5px rgba(225, 161, 98, 0.4);
    }
    50% {
        text-shadow: 0 0 10px rgba(225, 161, 98, 0.8), 0 0 20px rgba(225, 161, 98, 0.3);
    }
    100% {
        text-shadow: 0 0 5px rgba(225, 161, 98, 0.4);
    }
}

.contact-container {
  color: #e6deddff;
  min-height: 90.2vh;
  padding: 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: url('https://i.pinimg.com/originals/95/ef/b8/95efb8425d270933e5e890b33ab5ef70.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.contact-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(21, 21, 21, 0.4);
  z-index: 0;
}

.contact-content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
}

.contact-title {
  font-size: 2.8rem;
  color: #ece7e5ff;
  margin-bottom: 1rem;
  font-weight: 800;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #c2c2c2;
  margin-bottom: 2rem;
  max-width: 600px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  background-color: transparent ;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(225, 161, 98, 0.2);
}

.contact-input,
.contact-textarea {
  padding: 0.83rem;
  border-radius: 8px;
  border: 1px solid #a0a0a0;
  font-size: 0.5rem;
  background-color: transparent;
  color: #e6deddff;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.contact-input:focus,
.contact-textarea:focus {
  border-color: #e1a162;
  box-shadow: 0 0 15px rgba(225, 161, 98, 0.8), 0 4px 8px rgba(0, 0, 0, 0.4);
  transform: scale(1.02);
  background-color: #252525;
  outline: none;
}

.contact-input:hover,
.contact-textarea:hover {
    border-color: #ea630fff;
    transform: scale(1.01);
}

.contact-button {
  background-color: #e02c14ff;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  transition: all 0.15s ease-in-out;
  box-shadow: 0 5px #d93c15ff;
}

.contact-button:hover {
  background-color: #000000ff; 
  transform: translateY(-3px);
}

.contact-button:active {
  transform: translateY(2px);
  box-shadow: 0 2px #b8824f;
}

.contact-back-button {
  margin-top: 3rem;
  color: #e6deddff;
  background: rgba(14, 13, 12, 0.9);
  border: 2px solid #e1a162;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 300;
  transition: all 0.3s;
  z-index: 1;
}

.contact-back-button:hover {
  background: transparent;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(225, 161, 98, 0.6);
}
`;

const Contact = ({ onBackToHome }) => {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            alert('Message Sent (Simulated)!');
            setIsSending(false);
        }, 1500);
    };

    useEffect(() => {
        if (!document.getElementById('contact-animations')) {
            const style = document.createElement('style');
            style.id = 'contact-animations';
            style.innerHTML = animatedStyles;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <div className="contact-container">
            <div className="contact-overlay"></div>
            <div className="contact-content">
                <h1 className="contact-title">Feedback Us </h1>
                <p className="contact-subtitle">We’d love to hear from you! Send us your feedback, queries, or collaborations.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" className="contact-input" required />
                    <input type="email" placeholder="Your Email" className="contact-input" required />
                    <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
                    <button 
                        type="submit" 
                        className="contact-button"
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                <button className="contact-back-button" onClick={onBackToHome}>
                    ← Back to Home
                </button>
            </div>
        </div>
    );
};

export default Contact;