import React from 'react';
import School from './School';
import education from '../resources/education.json';

const Education = () => {
  const renderEducation = () => {
    return (
      <ul>
        {education.map(item => {
          return (
            <School
              key={item.school}
              item={item}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <section className="education container">
      <div className="section auto-width">
        <h1>My Education</h1>
        {renderEducation()}
      </div>
    </section>
  );
};

export default Education;