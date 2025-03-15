let getRandomTsCode = () => {
  const codeLength = Math.floor(Math.random() * 10) + 5;
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    code += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  return code;
};
