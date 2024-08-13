
import { useEffect, useState } from 'react';

function Counter() {
    const[number,setNumber] = useState(0);

  useEffect(()=>{//component ilk kez render edildiğinde çalışır
    console.log('Component mount edildi');

    const interval = setInterval(()=>{
        setNumber((n)=> n + 1);//setNumber(number+1)
      },1000);

    return ()=> clearInterval(interval);
  },[]);



  useEffect(()=>{//state her güncellendiğinde çalışır
    console.log('Number state güncellendi');
  },[number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>
    </div>
  )
}

export default Counter