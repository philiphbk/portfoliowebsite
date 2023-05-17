import React from "react";
import { CSSTransition } from "react-transition-group";

const Skills = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <h1>Skills</h1>
        {/* Add your skills information here */}
      </div>
    </CSSTransition>
  );
};

export default Skills;