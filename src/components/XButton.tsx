import { GiTrashCan } from 'react-icons/gi';

const XButton = ({}) => {
  return (
    <button className="rounded-full text-3xl bg-slate-100 hover:bg-slate-200 min-w-max text-red-400 px-5 py-5">
      <GiTrashCan />
    </button>
  );
};

export default XButton;
