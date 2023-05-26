import { useEffect, useState } from 'react';
import './App.css';
import TrashButton from './components/TrashButton'
import HeartButton from './components/HeartButton';
import { GiFishBucket, GiTrashCan } from 'react-icons/gi';
import MyBuckit from './components/MyBuckit';
import Loader from './components/Loader'

export interface IMyList {
  id: number;
  item: string;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [bucketListItem, setBucketListItem] = useState('');
  const [myList, setMyList] = useState<IMyList[]>(() => {
    const savedBuckit = localStorage.getItem('myBuckit')
      //if there is a saved buckit
      if (savedBuckit) {
        return JSON.parse(savedBuckit);
      }
  });

  const testListItem = 'Take over the world.';
  const fetchNewItem = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'imQk21qaV4TZhGn0ySbwNGof2tonLjtF5tRk0wYs',
        },
      });
      if (!response.ok) {
        setIsLoading(false)
        throw new Error('Network response was not ok');
      }
      setIsLoading(false)
      const data = await response.json();
      setBucketListItem(data.item);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchNewItem();
  }, []);

  useEffect(() => {
    localStorage.setItem("myBuckit", JSON.stringify(myList)); 
  }, [myList])

  const addListItem = () => {
    setMyList([
      ...myList,
     
      { id: myList.length + 1, item: bucketListItem },
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
          {isLoading 
            
            ? <Loader />
            
            : <h3>
                {bucketListItem} 
              </h3> 
            }

          <div className="flex flex-row justify-evenly">
            <button
              className="bg-slate-200 min-w-min px-12 py-2 rounded-full"
              onClick={addListItem}
            >
              Save
            </button>
            <TrashButton onTrashClick={fetchNewItem}/>  
          </div>
        </div>
        <h2 className="my-5 text-2xl font-semibold text-emerald-500">
          Your Buck'it:
        </h2>
       <MyBuckit myList={myList} onDeleteClick={deleteListItem}/>
      </div>
    </>
  );
}

export default App;
