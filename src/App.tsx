import './App.scss';
import Cta from './cta/cta';
import Phone from './phone/phone';

function App() {

  return (
    <div className='wrapper'>
    <main>
      <Phone></Phone>
      <Cta></Cta>
    </main>

    <footer>
      <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p> 
      <p>Coded by Dennis Brüning.</p>
    </footer>

    <div className="bg-top-left"></div>
    <div className="bg-bottom-right"></div>
    </div>
  )
}

export default App
