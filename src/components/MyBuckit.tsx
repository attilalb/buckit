import { GiTrashCan } from 'react-icons/gi';
import { IMyList } from '../App';

interface MyBuckitProps {
  myList: IMyList[];
  onDeleteClick: (id: number) => void;
}

const MyBuckit: React.FC<MyBuckitProps> = ({ myList, onDeleteClick }) => {
  return (
    <div className="container max-w-sm mx-auto">
      <ul className="flex flex-col gap-2">
        {myList.map((myListItem: IMyList) => (
          <div className="flex bg-slate-100 font-semibold text-emerald-500 justify-between rounded-lg px-4 py-3 hover:scale-101 drop-shadow-xs hover:drop-shadow-xl duration-300">
            <li key={myListItem.id} className="text-xl font bold">
              {myListItem.item}
            </li>
            <button
              onClick={() => onDeleteClick(myListItem.id)}
              className="text-2xl cursor-pointer text-slate-100 opacity-60 hover:text-emerald-400 duration-300 ease-in-out"
            >
              <GiTrashCan />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MyBuckit;
