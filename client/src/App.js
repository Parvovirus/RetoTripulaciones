import './App.css';
import axios from "axios"

function App() {


  const test = () => {


    const filtro = {
      nombre: "coke"
    }

    axios.post("register", filtro).then(res=> console.log(res.data));

  }

  return (
    <div className="App">
      <div>
        <button onClick={test}>Click</button>
      </div>
    </div>
  );

}

export default App;
