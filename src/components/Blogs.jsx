import React from "react";
import { CSSTransition } from "react-transition-group";


const Blogs = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <h1>Blogs</h1>
        {/* Add your blogs information here */}
      </div>
    </CSSTransition>
  );
};

export default Blogs;