import React from "react";
import { CSSTransition } from "react-transition-group";


const Profile = () => {
  return (
    <CSSTransition 
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <h1 class="uppercase font-bold tracking-wide text-lg">Profile</h1>
        <p class="mt-3 text-gray-600">
          Getting a new business off the ground is a lot of hard work.
          Here are five ideas you can use to find your first customers.
        </p>
      </div>
    </CSSTransition>
  )
}

export default Profile;
