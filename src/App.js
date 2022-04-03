import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Row,Col,InputGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Guess Game!</h1>
      <div className="row">
      <div className="col col-3 " >
        <input className="row"></input>
        <Button as={Col} variant="secondary">Check!</Button>
      </div>

      <div className="col col-3" >
        <input className="row"></input>
        <Button as={Col} variant="secondary">Check!</Button>
      </div>
      </div>
    </div>
  );
}

export default App;
