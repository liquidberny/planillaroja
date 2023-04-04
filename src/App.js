import logo from './assets/logo532-no-bg.png';
import './App.css';
import SectionA from './components/SectionA/index';
import SectionB from './components/SectionB/index';
import Video from './components/Video/index'
import Image1 from './assets/img1.jpeg'
import Image2 from './assets/img2.jpeg'
import Image3 from './assets/img3.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Planilla roja UNISON</h1>
        <div className='image-container'>
          <img src={logo} alt="logo planilla roja"/>
        </div>
        <p>
          Tu voz cuenta, tu voto importa.
        </p>
        <Video />
      </header>
      <main className='App-main'>
        <SectionA
          id={'about'}
          title={'¿Quiénes somos?'}
          content={'Nosotros somos estudiantes del departamento de ingenierias industriales colaborando en conjunto para lograr la diferencia y mejora estudiantil en la universidad de Sonora.'}
          img={Image1}
        />
        <SectionB
          id={'mision'}
          title={'Misión'}
          content={'Representar la voz y voto de nuestros compañeros en los Órganos Colegiados, para mejorar la calidad de vida académica y estudiantil.'}
          img={Image2}
        />
        <SectionA
          id={'vision'}
          title={'Visión'}
          content={'Asegurarnos que todos los estudiantes de departamento tengan acceso a los recursos y las oportunidades necesarias para alcanzar su maximo potencial.'}
          img={Image3}
        />
      </main>
      
    </div>
  );
}

export default App;
