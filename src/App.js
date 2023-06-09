import logo from './logo.svg';
import './App.css';
import { PruebasComponent } from './components/PruebasComponent';
import { AjaxComponent } from './components/AjaxComponent';
import { AsyncAwaitComponent } from './components/AsyncAwaitComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AsyncAwaitComponent />

        <PruebasComponent />

        <AjaxComponent />

        
      </header>
    </div>
  );
}

export default App;
