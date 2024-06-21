import React,{useEffect} from 'react';
import './AlertBox.css';

const CustomAlert = ({ message, onClose }) => {
    // Automatically close the alert after 2 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [onClose]);
  
    return (
      <div className="custom-alert">
        <div className="custom-alert-content">
          <p>{message}</p>
        </div>
      </div>
    );
  };

export default CustomAlert;
