import logo from './logo.svg';
import './App.css';
import ActParent from './Act1Parent';
import ActChild1 from './ActChild1';
import ActChild2 from './ActChild2';
import ActChild3 from './ActChild3';

function App() {
  return (
    <div>
      <ActParent/>
      <ActChild1/>  
      <ActChild2/>  
      <ActChild3/>  
    </div>  
  );
}

export default App;
