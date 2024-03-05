import './App.css';

import NavigationSection from './components/Navigation/NavigationSection';
import IntroductionSection from './components/Introduction/IntroductionSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import FooterSection from './components/Footer/FooterSection';
import Coming from './components/Coming/Coming';



function App() {

  return (
    <>
        <div className="app">
          <NavigationSection />
          <IntroductionSection/>
          <ProjectsSection />
          <Coming/>
          <FooterSection />
        </div>
    </>
  )
}

export default App;