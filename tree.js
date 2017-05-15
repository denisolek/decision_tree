var express = require('express')
var app = express()

var DecisionTree = require('decision-tree');

var training_data = [
  {"color":"blue", "shape":"square", "liked":false},
  {"color":"red", "shape":"square", "liked":false},
  {"color":"blue", "shape":"circle", "liked":true},
  {"color":"red", "shape":"circle", "liked":true},
  {"color":"blue", "shape":"hexagon", "liked":false},
  {"color":"red", "shape":"hexagon", "liked":false},
  {"color":"yellow", "shape":"hexagon", "liked":true},
  {"color":"yellow", "shape":"circle", "liked":false}
];

var test_data = [
   {"color":"blue", "shape":"hexagon", "liked":false},
   {"color":"red", "shape":"hexagon", "liked":false},
   {"color":"yellow", "shape":"hexagon", "liked":true},
   {"color":"yellow", "shape":"circle", "liked":true}
 ];

 var class_name = "liked";
 var features = ["color", "shape"];

 var dt = new DecisionTree(training_data, class_name, features);

 var predicted_class = dt.predict({
  	color: "yellow",
  	shape: "circle"
  });

var accuracy = dt.evaluate(test_data);

var treeModel = dt.toJSON();

console.log('Training data: ', training_data);
console.log('=========================');
console.log('Test data: ', test_data);
console.log('=========================');
console.log('Decision tree: ', dt);
console.log('=========================');
console.log('Predicated class: ', predicted_class);
console.log('=========================');
console.log('Accuracy: ', accuracy);
console.log('=========================');
console.log('Tree model: ', treeModel);

app.get('/', function (req, res) {
  res.send(treeModel)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
