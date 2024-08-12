
import './App.css';
import User from './components/user';

const friends = [{
  id:1,
  name:'Mehmet',
},
{
  id:2,
  name:'Veli',
},
{
  id:3,
  name:'Sevgi',

}];

function App() {
  return (
  <>
    < User
    name ='Ahmet'
    surname ='Yılmaz'
    isLoggedIn = {true} 
    age = {29} 
    friends = {friends} />
    
  </>
   

    
     
  );
}

export default App;
