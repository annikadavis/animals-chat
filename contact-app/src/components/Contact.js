import React from "react";
import "./Contact.css";

const online = true;
const Contact = () => {
  let onlineMessage = online ? "online" : "offline";
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://www.especes-menacees.fr/wp-content/uploads/2018/01/Image2-642x300.jpg"
        alt="Red Panda"
      />
      <div>
        <h1>Marcus</h1>
        <div className="status">
          <div className={`status-${onlineMessage}`} />
          <p className={`status-text`}>{onlineMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
