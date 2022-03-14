import React, {useState} from 'react';

export default props => {
  return (
    <>
      <Text>Membros da Familia:</Text>
      {props.children}
      <Text>Fim dos Membros</Text>
    </>
  );
};
