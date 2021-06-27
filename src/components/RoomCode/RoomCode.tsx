import toast, { Toaster } from 'react-hot-toast';

import copyImg from '../../assets/images/copy.svg';

import './room-code.css';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {

    const notify = () => toast.error('Código Copiado', {
      style: {
        border: '1px solid #12990d',
        padding: '16px',
        color: '#12990d'
      },
      iconTheme: {
        primary: '#12990d',
        secondary: '#fffaee',
      },
    })
    navigator.clipboard.writeText(props.code);


  return (
    <>
      <button className="room-code" onClick={notify}>
        <div>
          <img src={copyImg} alt="Copy run code" />
        </div>
        <span>Sala {props.code}</span>
      </button>
      <Toaster />
    </>
  );
}
