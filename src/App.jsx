
import Speakers from './components/speakers.jsx';
import CallToAction from './components/call to action.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Schedule from './components/schedule.jsx';
import EventDetail from './components/event detail.jsx';

function App() {
  return (
    <>
      <div>
       <CallToAction /> 
       <Header /> 
       <EventDetail />
        <Schedule />
        <Speakers />
        <Footer />
      </div>
    </>
  );
}

export default App
