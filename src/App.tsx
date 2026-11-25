import "./App.scss";
import Header from "./ts/Header";
import SkillsSection from "./ts/SkillsSection";
import WorkHistory from "./ts/WorkHistory";
import Education from "./ts/Education";
import Extracurricular from "./ts/Extracurricular";

function App() {
  return (
    <div className="App">
      <Header />
      <SkillsSection />
      <WorkHistory />
      <Education />
      <Extracurricular />
    </div>
  );
}

export default App;
