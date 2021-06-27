import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.css'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps){

  function copyRoomCodeToClipBoard(){
    navigator.clipboard.writeText(props.code)
    alert('Código copiado')
  }

  return(
    <button className="room-code" onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy run code" />
      </div>
      <span>Sala {props.code}</span>
    </button>
  )
}