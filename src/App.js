import React from 'react';
import './App.scss';
import Header from './js/Header';
import SkillsSection from './js/SkillsSection';
import WorkHistory from './js/WorkHistory';
import Education from './js/Education';
import Extracurricular from './js/Extracurricular';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SkillsSection />
      <WorkHistory />
      <Education />
      <Extracurricular />
    </div>
  );
};

export default App;