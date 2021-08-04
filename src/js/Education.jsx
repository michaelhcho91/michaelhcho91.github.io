import React from 'react';
import education from '../resources/education.json';

const Education = () => {
  const renderEducation = () => {
    return (
      <ul>
        {education.map(item => {
          return (
            <li key={item.school}>
              {item.school}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className="education-container">
      <div className="education-section auto-width">
        <h1>My Education</h1>
        {renderEducation()}
      </div>
    </section>
  );
};

export default Education;