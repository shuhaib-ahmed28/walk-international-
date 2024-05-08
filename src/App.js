
import './App.css';
import Navigation from './components/Navigation';
import Herosection from './components/Herosection';
import Countries from './components/Countries';
import Featuredsection from './components/Featuredsection';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Herosection/>
      <Countries/>
      <Featuredsection/>
      
    </div>
  );
}

export default App;
