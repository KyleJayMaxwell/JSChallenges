module.exports = {

  helloWorld: function(string){
    return "Hello World";
  },

  hello: function(string){
    return "Hello "+ string;
  },

  shout: function(string) {
    var upper = string.toUpperCase();
    return "Hello "+ upper;
  },

  whisper: function(string){
    var lower = string.toLowerCase();
    return "Hello "+lower;
  },

  separate: function (string){
    var split = string.split("");
    return split;
  },

  reverseJoin: function (string){
    var reverse = string.reverse();
    var join = reverse.join();
    return join;
  },

  reverseJoinCompact: function (string){
    var reverse = string.reverse();
    var join = reverse.join("");
    return join;
  },

  backwardsDay: function (string){
    var split = string.split("");
    var reverse = split.reverse();
    var join = reverse.join("");
    return "Hello "+ join;
  }

}
