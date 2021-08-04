import React from 'react';
import './App.scss';
import Header from './js/Header';
import SkillsSection from './js/SkillsSection';
import WorkHistory from './js/WorkHistory';
import Education from './js/Education';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SkillsSection />
      <WorkHistory />
      <Education />
    </div>
  );
};

export default App;