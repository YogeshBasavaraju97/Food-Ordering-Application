import React from 'react';
import UserClass from './UserClass';
import userContext from '../../utils/UserContext';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <userContext.Consumer>
        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
      </userContext.Consumer>
      <h2> a practice project</h2>
      <UserClass />
    </div>
  );
};

export default About;
