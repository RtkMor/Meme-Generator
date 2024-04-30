import React from "react";

// import ProjectOne from './ProjectOne/ProjectOne.jsx';

// import ProjectSecond from './ProjectSecond/ProjectSecond.jsx';

// import JokesBody from './ProjectThird/JokesBody.jsx';

// import journeyData from "./ProjectFourth/journeyData"
// import Header from "./ProjectFourth/Header";
// import CardItem from "./ProjectFourth/CardItem";

import Header from "./ProjectFifth/Header";
import Body from "./ProjectFifth/Body";

// import ProjectSixth from "./ProjectSixth/ProjectSixth";

// import ProjectSeventh from './ProjectSeventh/ProjectSeventh.jsx';

function App() {

  const [darkMode, setDarktMode] = React.useState(false);

  function toggleDarkMode(){
    setDarktMode(prev => !prev);
  }
  
    return (
      <div className={'p-2 position-relative z-0 ' + (darkMode ? "bg-dark" : "")} data-bs-theme={darkMode ? "light" : ""}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Body darkMode={darkMode}/>
      </div>
    )
}

export default App;
