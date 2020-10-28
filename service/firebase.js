// using realtime database on firebase
var firebase = require('firebase');
var config = require('../json-config/firebase-config');
firebase.initializeApp(config);

function readData(strNode){
  var nodeRef = firebase.database().ref(strNode);
  var object = {};
  nodeRef.on('value', function(snapshot){
    object = snapshot.val();
  }
  , 
  function(errorObject){
    console.log(errorObject.code, errorObject.message)
  });

  return object;
}

function writeData(strNode, objectWrite){
  var nodeRef = firebase.database().ref(strNode);
  nodeRef.set(objectWrite);

}


module.exports = firebase;
module.exports.readData = readData;
module.exports.writeData = writeData;