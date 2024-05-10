const info = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.error(...params);
};

const exinfo = (...params) => {
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("Info is here: ");
  console.log(...params);
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
  console.log("--------------------");
};

module.exports = {
  info,
  error,
  exinfo,
};
