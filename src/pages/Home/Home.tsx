import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';

import homeImg from '../../assets/images/home.svg';

import './styles.css';

export function Home() {
  const history = useHistory();

  async function GoToLetMeAsk(){
    history.push('/letmeask')
  }
  return (
    <>
      <Header />
      <section>
        <div className="page-home">
          <div className="row">
            {/* <h1>Crie salas para retirar duvidas</h1> */}
            <h3>
              Crie / entre em <br/> salas dos mais variados temas e chame a galera
            </h3>
            <Button onClick={GoToLetMeAsk}>
              Crie &amp; Entre em salas
            </Button>
          </div>
          <div className="row">
            <img
              src={homeImg}
              alt="Imagem vetorial de uma pessoa conversando no celular"
            />
          </div>
        </div>
      </section>
    </>
  );
}
