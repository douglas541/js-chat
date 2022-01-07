const nameElement = document.querySelector('#name-input');
const messageElement = document.querySelector('#message-input');
const messageBoxElement = document.querySelector('#messages');
const buttonElement = document.querySelector('#send-button');

buttonElement.addEventListener('click', sendMessage);

function sendMessage() {
  const envio = {
    name: nameElement.value,
    message: messageElement.value
  }

  axios.post('http://localhost:3001/api/sendMessage', envio)
  .then((res) => {
    const messages = res.data;
    render(messages);
  })
  .catch(() => {
    console.log('Deu merda cria');
  })
}

function render(messageObj) {
  let saida = '';
  messageObj.messages.forEach((value) => {
    saida += '<p>' + value + '</p>';
  });
  messageBoxElement.innerHTML = saida;
}

// const test = {
//   messages: [
//     "douglas: opa",
//     "douglas: opa",
//     "douglas: opa",
//     "douglas: opa",
//     "douglas: opa",
//     "douglas: opa",
//     "douglas: opa"
//   ]
// }


// render(test);