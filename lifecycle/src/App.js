import { useEffect, useState } from 'react';


function App() {
  const[number,setNumber] = useState(0);
  const [name,setName] = useState('Mehmet');

  useEffect(()=>{//component ilk kez render edildiğinde çalışır
    console.log('Component yüklendi');
  },[]);

  useEffect(()=>{//state her güncellendiğinde çalışır
    console.log('Number state güncellendi');
  },[number]);

  useEffect(()=>{//state her güncellendiğinde çalışır
    console.log('Name state güncellendi');
  },[name]);




  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>
      
      <hr/>

      <h1>{name}</h1>
      <button onClick={()=>setName('Ahmet')}>Change Name</button>

    </div>
  );
}

export default App;
