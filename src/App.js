import logo from './logo.svg';
import './App.css';
import Navbarr from './Navbarr';
import Home from './Home';
import Courses from './Courses';
import Teachers from './Teachers';
import Signin from './Signin';




function App() {
  return (
    <div>
      <Navbarr></Navbarr>
      <Home></Home>
      <Courses></Courses>
      <Teachers></Teachers>
      <Signin></Signin>
    </div>
  );
}

export default App;
