import Canvas from "./canvas/Index";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <h1 className='head-text'>Sanguine X</h1> */}

      <Home />
      <Canvas />
      <Customizer /> 
    </main>
  )
}

export default App  
