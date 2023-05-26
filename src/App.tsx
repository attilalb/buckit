import { useEffect, useState } from 'react';
import './App.css';
import XButton from './components/XButton';
import HeartButton from './components/HeartButton';
import { GiFishBucket, GiTrashCan } from 'react-icons/gi';

interface IMyList {
  id: number;
  item: string;
}

function App() {
  const [bucketListItem, setBucketListItem] = useState('');
  const [myList, setMyList] = useState<IMyList[]>([]);

  const testListItem = 'Drink a Gin in London.';
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
    setMyList([
      ...myList,
      // bucketListItem]
      { id: myList.length + 1, item: testListItem },
    ]);
  };

  const deleteListItem = (id: number) => {
    const updatedList = myList.filter((listItem) => {
      return listItem.id !== id;
    });
    setMyList(updatedList);
  };

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
        <h2 className="my-5 text-2xl font-semibold text-emerald-500">
          Your Buck'it:
        </h2>
        <div className="container max-w-sm mx-auto">
          <ul className="flex flex-col gap-2">
            {myList.map((myListItem) => (
              <div className="flex bg-slate-100 font-semibold text-emerald-500 justify-between rounded-lg px-4 py-3 hover:scale-101 drop-shadow-xs hover:drop-shadow-xl duration-300">
                <li key={myListItem.id} className="text-xl font bold">
                  {myListItem.item}
                </li>
                <button
                  onClick={() => deleteListItem(myListItem.id)}
                  className="text-2xl cursor-pointer text-slate-100 opacity-60 hover:text-emerald-400 duration-300 ease-in-out"
                >
                  <GiTrashCan />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
