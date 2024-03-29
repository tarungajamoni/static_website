import React from "react";
import ChatBot from "react-simple-chatbot";

function SimpleChatbot() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Next",
    },
    {
      id: "Next",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select options to know more about us ",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Vision",
          label: "Vision",
          trigger: "Vision",
        },
        { value: "Values", label: "Values", trigger: "Values" },
        {
          value: "Services",
          label: "Services",
          trigger: "Services",
        },
      ],
    },
    {
      id: "Vision",
      message:
        "Our vision at HANVI GLOBAL TECH  is to become the go-to IT services provider for small businesses.",
      trigger: "Yes/No",
    },
    {
      id: "Values",
      message:
        "At HANVI GLOBAL TECH , we believe in honesty, integrity, and accountability.",
      trigger: "Yes/No",
    },
    {
      id: "Services",
      message:
        "We offer a wide range of IT services to meet the needs of small businesses.",
      trigger: "Yes/No",
    },
    {
      id: "Yes/No",
      message:"Want to know more?",
      trigger: "Y/N",
    },
    {
      id: "Y/N",      
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "Yes",
        },
        {
          value: "No",
          label: "No",
          trigger: "No",
        },
      ],
    },
    {
      id: "Yes",
      message: "Please select your issue",
      trigger: "issues",
    },
    {
      id: "No",
      message: "Please write us an Email if you need more information. Thank you for reaching out to me.",
      end: true,
    },
  ];

  return (
    <div style={{ position: "fixed", bottom: "4.25rem", right: "20px" }}>
      <ChatBot
        steps={steps}
        headerTitle="Chat with us"
        //botAvatar="https://example.com/avatar.png" 
        //userAvatar="https://example.com/user-avatar.png" 
      />
    </div>
  );
}

export default SimpleChatbot;
