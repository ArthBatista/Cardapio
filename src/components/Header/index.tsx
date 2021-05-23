import React  from 'react';

import { Container } from './styles';


const Header: React.FC = () => {
  return (
    <Container>
      <div className="Head">
      <p>Baraca do macarrão</p> 
      <h1>Cardapio</h1>
      </div>

      <div className="mg">
        <img src="massa.jpg" alt="" />
      </div>
    </Container>
  );
};

export default Header;
