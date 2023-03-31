import logo from './assets/logo.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <h1>VOTA ROJO!</h1>
      </nav>

      <header className="App-header">
        <h1>Planilla roja UNISON</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tu voz cuenta, tu voto importa.
        </p>
      </header>
      <main className='App-main'>
        <div class="card">
          <h3><em>¿Quiénes somos?</em></h3>
          <p>Estudiantes del departamento de ingenierias industriales colaborando en conjunto para lograr la diferencia y mejora estudiantil en la universidad de Sonora.</p>

        </div>
        <div class="card">
          <h3><em>Misión</em></h3>
          <p>Representar la voz y voto de nuestros
          compañeros en los Órganos Colegiados, para mejorar la calidad de vida académica y estudiantil.</p>

        </div>
        <div class="card">
          <h3><em>Visión</em></h3>
          <p>
          Asegurarnos que todos los estudiantes de departamento tengan acceso a los recursos y las oportunidades necesarias para alcanzar su maximo potencial
          </p>

        </div>
      </main>
      <footer className='Footer'>
      <SocialIcon url="https://www.instagram.com/p/CqYhyLevbrO/"  network="instagram" bgColor='red' />
      </footer>
    </div>
  );
}

export default App;
