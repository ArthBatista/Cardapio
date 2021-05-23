import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="la">
    <div className="tru">  <p>Siga os 3 passos e monte seu macarrão!</p></div>
     <h2>1° Recheios</h2> 
      <p>° Bacon, queijo, Orégano <br />
         ° Pimenta, azeitona, Milho <br />
         ° Ervilha,Presunto, Salsicha <br />
         ° Tomate</p>
      <h2>2° Molhos</h2>
      <p>° Molho branco <br />
         ° Molho Vermelho<br />
         ° Molho a bolonhesa</p>
         <h2>3° Macarrão</h2>
         <p>° Espaguete     ° <br />
            ° Talharim      °<br />
            ° Parafuso      °<br />
            ° Penne         °<br />
            </p>
            <div className="oe"> <p>Pronto! Seu macarrão sera entregue em breve.</p> </div>
            <div className="oa"> <h3>Bebidas</h3> </div>
      </div> 
    </Container>
  );
};

export default Footer;
