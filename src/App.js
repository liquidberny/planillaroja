import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Planilla roja UNISON</h1>
        <div className='image-container'></div>
        <img src={logo} alt="logo" />
        <p>
          Tu voz cuenta, tu voto importa.
        </p>
      </header>
      <main className='App-main'>
        <div className="card">
          <h3><em>¿Quiénes somos?</em></h3>
          <p>Estudiantes del departamento de ingenierias industriales colaborando en conjunto para lograr la diferencia y mejora estudiantil en la universidad de Sonora.</p>

        </div>
        <div className="card">
          <h3><em>Misión</em></h3>
          <p>Representar la voz y voto de nuestros
          compañeros en los Órganos Colegiados, para mejorar la calidad de vida académica y estudiantil.</p>

        </div>
        <div className="card">
          <h3><em>Visión</em></h3>
          <p>
          Asegurarnos que todos los estudiantes de departamento tengan acceso a los recursos y las oportunidades necesarias para alcanzar su maximo potencial
          </p>

        </div>
      </main>
      
    </div>
  );
}

export default App;
