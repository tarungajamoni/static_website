import React, { useState } from 'react';

const TailwindAlert = ({ message, type, onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  let alertClasses = "px-4 py-3 rounded relative";
  let positionClasses = "fixed top-0 left-0 right-0 mx-auto";

  if (type === 'success') {
    alertClasses += " bg-green-100 border border-green-400 text-green-700";
  } else if (type === 'error') {
    alertClasses += " bg-red-100 border border-red-400 text-red-700";
  }

  return (
    <>
      {showAlert && (
        <div className={`${alertClasses} ${positionClasses} w-1/4 mt-10`}role="alert">
          <span className="block sm:inline">{message}</span>
          <button
            onClick={() => {
              setShowAlert(false);
              onClose(); 
            }}
            className="absolute top-0 right-0 px-4 py-3"
          >
            <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.36 5.652a.5.5 0 00-.707.707L9.293 10l-3.64 3.645a.5.5 0 00.707.707L10 10.707l3.645 3.64a.5.5 0 00.707-.707L10.707 10l3.641-3.645a.5.5 0 000-.707z"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default TailwindAlert;
