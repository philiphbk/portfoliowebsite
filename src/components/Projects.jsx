import React from "react";
import { CSSTransition } from "react-transition-group";


const Projects = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <h1>Projects</h1>
        {/* Add your projects information here */}
      </div>
    </CSSTransition>
  );
};

export default Projects;