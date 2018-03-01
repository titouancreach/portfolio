import React from 'react';
import CardEpitech from './CardEpitech.jsx';
import CardExperience from './CardExperience.jsx';
import CardOpenSource from './CardOpenSource.jsx';

const Experience = () => {
  return (
    <React.Fragment>
      <CardEpitech />
      <CardExperience />
      <CardOpenSource />
    </React.Fragment>
  );
};

export default Experience;
