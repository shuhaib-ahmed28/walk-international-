
import './App.css';
import Navigation from './components/Navigation';
import Herosection from './components/Herosection';
import Countries from './components/Countries';
import Featuredsection from './components/Featuredsection';
import Studentresult from './components/Studentresult';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Herosection/>
      <Countries/>
      <Featuredsection/>
      <Studentresult/>
      
    </div>
  );
}

export default App;
