import logo from './logo.svg';
import './App.css';
import FormCard from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormCard></FormCard>
      </header>
    </div>
  );
}

export default App;
