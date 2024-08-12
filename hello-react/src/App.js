
import './App.css';
import User from './components/user';

/* const name = 'Ahmet';
const surname = 'Yılmaz';
const isLoggedIn = false; */

function App() {
  return (
  <>
    < User name ='Ahmet' surname ='Yılmaz' isLoggedIn = {true} age = {29} friends = {['Mehmet','Veli','Sevgi']} />
    
  </>
   

    
     
  );
}

export default App;
