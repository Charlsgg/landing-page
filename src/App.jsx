import React from 'react';
import Navbar from './components/Navbar';
import BodySection from './components/BodySection';
import ContactUsSection from './components/ContactUsSection';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BodySection></BodySection>
      <ContactUsSection></ContactUsSection>
    </div>
  );
}

export default App;
