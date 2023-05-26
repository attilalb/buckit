import { GiTrashCan } from 'react-icons/gi';

interface TrashButtonProps {
  onTrashClick: () => Promise<void>
}

const TrashButton:React.FC<TrashButtonProps> = ({onTrashClick}) => {
  return (
    <button className="rounded-full text-3xl bg-slate-100 hover:bg-slate-200 min-w-max text-red-400 px-5 py-5" onClick={() => onTrashClick()}>
      <GiTrashCan />
    </button>
  );
};

export default TrashButton;
