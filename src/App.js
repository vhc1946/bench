import logo from './logo.svg';
import './App.css';
import { TableContainer } from './Components/TableContainer';
import { Data } from './TestData';
import { Data2 } from './TestData2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TableContainer data = {Data}/>
      </header>
    </div>
  );
}

export default App;
