import logo from './logo.svg';
// import './App.css';
import "./default.css"


import Header from './Component/Header';
import Course from './Component/Course';
import Experience from './Component/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <Course/>
      <Experience/>
    </div>
  );
}

export default App;
