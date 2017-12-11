fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, callback) {
      for(let i = 0; i < array.length; i++){
        callback(array[i]);
      }
      return array;
    },

    map: function(array, callback) {
      let modifiedArray = []
      for(let i = 0; i < array.length; i++){
        modifiedArray.push(callback(array[i]));
      }
      return modifiedArray;
    },

    reduce: function(collection, itereatee, acc) {
      for(let i = 0; i < collection.length; i++){
        acc = itereatee(acc, collection[i]);
      }
      return acc;
    },

    find: function(collection, predicate) {
      let i = 0;
      while (i < collection.length){
        if (predicate(collection[i])){
          return collection[i]
        }
        i++;
      }
    },

    filter: function(collection, predicate) {
      let i = 0;
      let modifiedArray = []
      while (i < collection.length){
        if (predicate(collection[i])){
          modifiedArray.push(collection[i])
        }
        i++;
      }
      return modifiedArray
    },

    size: function(collection) {
      let i = 0;
      for (const key in collection) {
         i++;
      }
      return i;
    },

    first: function(array, n=1) {
     modifiedArray = [];
     for (let i = 0; i < n; i++) {
        modifiedArray.push(array[i]);
     }
     return modifiedArray;
   },

   last: function(array, n=1) {
   modifiedArray = [];
   for (let i = array.length - n ; i < array.length; i++) {
      modifiedArray.push(array[i]);
   }
   return modifiedArray;
 },


 compact: function(collection) {
       let i = 0;
       let modifiedArray = []
       while (i < collection.length){
         if (collection[i]){
           modifiedArray.push(collection[i])
         }
         i++;
       }
       return modifiedArray
     },

     sortBy: function(array, iteratee) {
     let newObj = {};
     for (const element of array) {
       newObj[iteratee(element)]=element
     }

      let keys = [];
      for (const key in newObj) {
         keys.push(key)
      }
      let sortedkeys = keys.sort();

      let sortedvalues = [];
      for (const element of sortedkeys) {
        sortedvalues.push(newObj[element])
     }
     return sortedvalues;
    },







  }
})()

 console.log(fi.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });)
