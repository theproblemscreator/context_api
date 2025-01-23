import logo from './logo.svg';
import './App.css';
import A from './components/A';
import UserContext from './components/UserContext';
import Addtion from './components/Addtion_One';
import Addtion_One from './components/Addtion_One';
import Addition_Second from './components/Addition_Second';

function App() {
  const data = {
    name: "Umesh",
    city: "Pune"
  }

  
  return (
    <div className="App">
     
     <UserContext.Provider  value={data}>
     <A/>   
     <Addtion_One/>
     <Addition_Second/>
     </UserContext.Provider>
     

      <hr></hr>

  
    </div>
  );
}

export default App;
