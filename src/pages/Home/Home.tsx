import { Header } from '../../components/Header/Header';

import homeImg from '../../assets/images/home.svg';

import './styles.css';
import { Button } from '../../components/Button/Button';

export function Home() {
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
            <Button>
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
