import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import faq from "../../image/question.jpg"

const Help = () => {
    const { user } = useAuth();
    const [final, setFinal] = useState(false);
  
    const handleSubmit = () => {
      setFinal(true);
    };
      return (
          <div>
        <img className="w-50 pt-5" src={faq} alt="" />
        <div className="login-form">
          {!final ? (
            <>
              <h1>Your Question </h1>
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="Your Name"
                    required
                  />
                  <input type="text" placeholder="Topic" />
                  <input
                    className="pb-5"
                    type="text"
                    placeholder="Your Question"
                    required
                  />
                  <input type="email" name="" id="" defaultValue={user.email} />
                </div>
                <input className="login-btn px-4" type="submit" value="Submit" />
              </form>
            </>
          ) : (
            <>
              <h1 className="mb-5">You will get Your answer very soon!</h1>
              <NavLink to="/home" className="about">
                Back Home <i class="fas fa-arrow-alt-circle-right"></i>
              </NavLink>
            </>
          )}
        </div>
      </div>
      );
};

export default Help;