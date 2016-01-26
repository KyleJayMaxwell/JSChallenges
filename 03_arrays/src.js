module.exports = {

  first: function(array) {
    // fill in code here
    return array[0];
  },

  last: function(array){
    return array.pop();
  },

  empty: function(array){
    if(array.length === 0 ){
      return true;
    } else {
      return false;
    }
  },

  first_n: function (array, n){
   return array.slice(0,n);
  },

  last_n: function (array, n){
    var len = array.length;
    var start = (len - n < 0 ) ? 0 : len -n;
    return array.slice(start, len);
  },

  drop: function (array, n){
    var len = array.length;
    if(len < n){
      return [];
    } else {
      return array.slice(n, len);
    }
  },

  union: function (array1, array2){
    if (array1 === [] && array2 === []) {
      return [];
    } else{
      var uni = array1.concat(array2);
      return uni;
    }
  },

  intersection: function (array1, array2){
    var newArray = [];
    for(i=0;i<array1.length;i++){
      for(j=0;j<array2.length;j++){
        if(array2[j] === array1[i]){
          newArray.push(array2[j]);
        }
      }
    }
    return newArray;
  }

};
