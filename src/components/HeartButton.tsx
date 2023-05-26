import { GiHearts } from 'react-icons/gi';

interface HeartButtonProps {
  onHeartClick: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({ onHeartClick }) => {
  return (
    <button
      className="rounded-full text-3xl bg-slate-100 hover:bg-slate-200 min-w-max text-red-400 px-5 py-5"
      onClick={() => onHeartClick()}
    >
      <GiHearts />
    </button>
  );
};

export default HeartButton;
