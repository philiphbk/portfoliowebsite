import React from "react";
import { CSSTransition } from "react-transition-group";


const Contact = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <h1>Contact</h1>
        {/* Add your contact information here */}
      </div>
    </CSSTransition>
  );
};

export default Contact;