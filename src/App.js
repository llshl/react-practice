import logo from './logo.svg';
import './App.css';

function App() {

  let post = "강남 우동 맛집"

  return (
    <div className="App">
      <div className="black-nav"><h4>블로그</h4></div>
      <div style={{color: 'red', fontSize: '16px'}}>{post}</div>
    </div>
  );
}

export default App;
