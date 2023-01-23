const textArea = document.querySelector(".text-area");
const outputTextField = document.querySelector("section.output-text-field");

let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
console.table(matrizCodigo)

function encriptar(stringEncriptada) {

  let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  
  return stringEncriptada;

}

function desencriptar(stringDesencriptada) {

  let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  
  return stringDesencriptada;

}

function botaoCriptografar() {
  const textoEncriptado = encriptar(textArea.value);
  outputTextField.innerHTML = `
    <textarea class="mensagem">${textoEncriptado}</textarea>
    <button class="botao-copy" onclick="copiar()">Copiar</button>
  `;
  textArea.value = "";
}

function botaoDescriptografar() {
  const textoDesencriptado = desencriptar(textArea.value);
  outputTextField.innerHTML = `
    <textarea class="mensagem">${textoDesencriptado}</textarea>
    <button class="botao-copy" onclick="copiar()">Copiar</button>
  `;
  textArea.value = "";
}

function copiar(){
  const mensagem  = document.querySelector(".mensagem");
  const botaoCopy = document.querySelector("button.botao-copy");
  navigator.clipboard.writeText(mensagem.value)
  alert("Mensagem copiada");
  botaoCopy.innerText = "Copiado!"
  botaoCopy.disabled = true;
  
}