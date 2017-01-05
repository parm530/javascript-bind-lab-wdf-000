const app = "I don't do much.";

var digitalClock = {
  time: Math.round(new Date().getTime()/1000),
  startTicking: function () {
    setInterval( () => this.time++, 1000)
  }
};


function censor(word, string) {
  while(string.includes(word)) {
    string = string.replace(word, "BLEEP");
  }
  return string;
};


const violenceCensor = censor.bind(null, 'violence');
const drugsCensor  = censor.bind(null, 'drugs');
