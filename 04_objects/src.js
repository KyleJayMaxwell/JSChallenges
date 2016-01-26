module.exports = {
  person: function() {

    var person = {
    firstName: "John",
    lastName: "Mayer",
    };
    return person;
  },

  sweetnessProperty: function(obj){
    return obj.sweetness;
  },

  savorynessProperty: function(obj){
    return obj["savory-ness"];
  },

  keys: function(obj){
    return Object.keys(obj);
  },

  sortedKeys: function(obj){
    var keys = Object.keys(obj);
    return keys.sort();
  },

  reverseSortedKeys: function(obj){
    var keys = Object.keys(obj);
    keys.sort();
    return keys.reverse();
  }

};
