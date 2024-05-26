
import './App.css';
import Navigation from './components/Navigation';
import Herosection from './components/Herosection';
import Countries from './components/Countries';
import Featuredsection from './components/Featuredsection';
import Studentresult from './components/Studentresult';
import Horizontalscroll from './components/Horizontalscroll';
import Topcourses from './components/Topcourses';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Herosection/>
      <Countries/>
      <Featuredsection/>
      <Studentresult/>
      <Topcourses/>
      <Horizontalscroll/>
      
    </div>
  );
}

export default App;
