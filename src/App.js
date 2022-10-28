import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Createnote from './Components/Createnote';


function App() {
  return (
         <div className='app'>
          <Header/>
          <Createnote/>
          <Footer/>
         </div>
  );
}

export default App;
