
import { title } from 'process';
import './App.css';
import { useState } from 'react';
//State güncellediği anda render işlemi yapar. Yani sayfa yenilenir.

function App() {
  const [name, setName] = useState('Mehmet');
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['Ahmet', 'Mehmet', 'Ayşe']);
  const [adress, setAdress] = useState({title: 'İstanbul', zip: 34000});

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('Ahmet')}>Change Name</button>
      <button onClick={() => setAge(20)}>Change Age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>

      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }

      <br></br>

      <button onClick={() => setFriends([...friends,'Fatma'])}>
        Add new friend sonuna ekle</button>
      <button onClick={() => setFriends(['Fatma',...friends])}>
        Add new friend başına ekle</button>
      
      <hr />
      <br></br>

      <h2>Adress</h2>
      <div>
        {adress.title} {adress.zip}
      </div>

      <br></br>

      <button onClick={() => setAdress({
        ...adress,title: 'Ankara',zip:6000})}>
        Change the adress</button>


    </div>
  );
}

export default App;
