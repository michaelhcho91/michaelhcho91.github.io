import React from 'react';
import WorkItem from './WorkItem';
import work from '../resources/work.json';

const WorkHistory = () => {
  const renderWorkHistory = () => {
    return (
      <ul>
        {work.map(item => {
          return (
            <WorkItem
              key={item.company}
              item={item}
            />
          );
        })}
      </ul>
    );
  };
  
  return (
    <section className="work-container">
      <div className="work-history auto-width">
        <h1>My Work Experience</h1>
        {renderWorkHistory()}
      </div>
    </section>
  );
};

export default WorkHistory;