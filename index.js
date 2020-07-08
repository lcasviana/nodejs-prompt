const schema = {
  properties: {
    firstName: {
      description: 'Nome',
      type: 'string',
      pattern: /^[A-Za-z]+$/,
      message: 'Nome obrigatório. Somente letras permitido.',
      required: true,
    },
    lastName: {
      description: 'Sobrenome',
      type: 'string',
      pattern: /^[A-Za-z]+$/,
      message: 'Sobrenome obrigatório. Somente letras permitido.',
      required: true,
    },
    address: {
      description: 'Endereço',
      type: 'string',
    },
    email: {
      description: 'Email',
      type: 'string',
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Email inválido.',
    },
    document: {
      description: 'CPF',
      type: 'string',
      pattern: /^[0-9]{11}$/,
      message: 'CPF inválido.',
    },
  }
};

const showResult = (_, result) => {
  console.log(`Name: ${result.firstName} ${result.lastName}`);
  console.log(`Adress: ${result.address}`);
  console.log(`Email: ${result.email}`);
  console.log(`Document: ${result.document}`);
};

const prompt = require('prompt');
prompt.start();
prompt.get(schema, showResult);