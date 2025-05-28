import { useState } from 'react';
import reactLogo from './components/assets/react.svg';
import viteLogo from '/vite.svg';
import {SkillSection} from './components/SkillSection'
import './App.css';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Address } from './components/Address';
import { MyHeader } from './components/MyHeader';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <MyHeader/>

      <main>
        <AboutMe/>

        <SkillSection/>

        <Projects/>
        <Contact/>
       <Address/>
      </main>

      <footer>
        &copy; Anika Tasnim, All rights reserved 2024
      </footer>
    </>
  );
}

export default App;
