
import './App.css';
import textbg1 from './images/textbg1.jpg';

function App() {

  return (

    <div>
      <h1>HELLO SOLAR SYSTEM </h1>
      <p>This is my first REACT APP</p>

      <img src={textbg1} className="position1" alt="background" />
      <button className="shapesbutton">SHAPES </button>

    </div>
  );

}

export default App;



