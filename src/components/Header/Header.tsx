import logoImg from '../../assets/images/logo.svg'

import './styles.css'

export function Header(){
  return(
    <header>
      <div className="menu">
        <div className="menu-logo">
          <a href="/">
            <img src={logoImg} alt="LetMeAsk" />
          </a>
        </div>
        {/* <a href="/"><span>Theme Light Dark</span></a> */}
      </div>
    </header>
  )
}