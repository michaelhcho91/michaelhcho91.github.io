import React from 'react';
import Extra from './Extra';
import extracurricular from '../resources/extracurricular.json';

const Extracurricular = () => {
  const renderExtracurricular = () => {
    return (
      <ul>
        {extracurricular.map(item => {
          return (
            <Extra
              key={item.name}
              item={item}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <section className="extracurricular container">
      <div className="section auto-width">
        <h1>Extracurricular</h1>
        {renderExtracurricular()}
      </div>
    </section>
  );
};

export default Extracurricular;