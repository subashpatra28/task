import './App.css';
import Delete from './Delete';
import Post from './Post';
import Update from './Update';
import Get from './Get';

function App() {
  return (
    <div className="App">
      <div>
        <button>GET{Get}</button>
      </div>
      <div>
        <button>POST{Post}</button>
      </div>
      <div>
        <button>PUT{Update}</button>
      </div>
      <div>
        <button>DELETE{Delete}</button>
      </div>
    </div>
  );
}

export default App;
