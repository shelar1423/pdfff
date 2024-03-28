import GeneralContextProvider from "../GeneralContextProvider.js";
import Home from "./Home.js";

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <span className='header'> PDF GENERATOR</span>

        <img className="logo" src="newlogo.png" alt="Example" />


      </div>
      <GeneralContextProvider>
        <Home />
      </GeneralContextProvider>
    </div>
  );
}

export default App;
