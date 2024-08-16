
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

//Aşağıdaki fetch ve axios kullanımı aynıdır. İkiside aynı işlemi yapar. Fetch kullanımı daha yaygındır.
/* import {useEffect,useState} from 'react'
import axios from 'axios'

function Users() {
    const [users,setUsers]=useState([])
    const [isLoading,setIsLoading]=useState(true) */

/*     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res)=>res.json())
       .then(data=>setUsers(data))
       .catch(e=>console.log(e))
       .finally(()=>setIsLoading(false))
    }, [])//Bu kısım fetch kullanılan kısımdır. useEffect içerisinde fetch işlemi yapılır. fetch işlemi sonucunda gelen veri setUsers ile users state'ine atanır. fetch işlemi başarılı ya da başarısız olsun finally kısmı çalışır ve setIsLoading(false) ile loading durumu kapatılır. */


    /* useEffect(() => {
        axios ('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUsers(res.data))
       .catch(e=>console.log(e))
       .finally(()=>setIsLoading(false));
    });

  return (
    <div>
        <h1>Users</h1>

        {isLoading && <div>Loading...</div>}

        {
            users.map(user=>(
                <div key={user.id}>
                    {user.name}
                </div>
            ))
        }

    </div>
  )
}

export default Users */