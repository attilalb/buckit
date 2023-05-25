import { useEffect, useState } from 'react';
import './App.css';
import XButton from './components/XButton';
import HeartButton from './components/HeartButton';
import { GiFishBucket } from 'react-icons/gi';

function App() {
  const [bucketListItem, setBucketListItem] = useState(null);
  const [myList, setMyList] = useState(['Buck it'])

  const testListItem = 'Eat Croissants in Paris';
  const fetchNewItem = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        headers: {
          // 'X-Api-Key': 'imQk21qaV4TZhGn0ySbwNGof2tonLjtF5tRk0wYs',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setBucketListItem(data.item);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // useEffect(() => {
  //   fetchNewItem();
  // }, []);

  const addListItem = () => {
    setMyList(
      [...myList, 
      // bucketListItem]
      testListItem]
    )}

  return (
    <>
      <div className="flex flex-row justify-center content-baseline text-3xl font-bold text-emerald-500">
        <h1>Buck'it</h1>
        <GiFishBucket />
      </div>
      <div className="container my-6">
        <div className="card aspect-[2/3] bg-slate-50 rounded-2xl text-emerald-500 font-bold flex flex-col justify-around max-w-xs mx-auto">
          <h2 id="cardHeader" className="text-xl">
            Your next adventure:{' '}
          </h2>
          <h3>
            {bucketListItem} {testListItem}
          </h3>
          <div className="flex flex-row justify-evenly">
          
            <button 
              className="bg-slate-200 min-w-min px-12 py-2 rounded-full"
              onClick={addListItem}
              >
                Save
            </button>
            <button
              className="bg-slate-200 min-w-min px-12 py-2 rounded-full"
              onClick={fetchNewItem}
            >
              New{' '}
            </button>
          </div>
        </div>
        <h2 className='my-5 text-2xl font-semibold text-emerald-500'>Your Buck'it:</h2>
        <ul>
          {myList.map(myListItem => <li>{myListItem}</li>)}
          </ul>
      </div>
    </>
  );
}

export default App;
