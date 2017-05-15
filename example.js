var express = require('express')
var app = express()

var DecisionTree = require('decision-tree');

var training_data = [
  {"outlook": "rainy", "temp": "hot", "humidity": "high", "windy": false, "play": false},
  {"outlook": "rainy", "temp": "hot", "humidity": "high", "windy": true, "play": false},
  {"outlook": "overcast", "temp": "hot", "humidity": "high", "windy": false, "play": true},
  {"outlook": "sunny", "temp": "mild", "humidity": "high", "windy": false, "play": true},
  {"outlook": "sunny", "temp": "cool", "humidity": "normal", "windy": false, "play": true},
  {"outlook": "sunny", "temp": "cool", "humidity": "normal", "windy": true, "play": false},
  {"outlook": "overcast", "temp": "cool", "humidity": "normal", "windy": true, "play": true},
  {"outlook": "rainy", "temp": "mild", "humidity": "high", "windy": false, "play": false},
  {"outlook": "rainy", "temp": "cool", "humidity": "normal", "windy": false, "play": true},
  {"outlook": "sunny", "temp": "mild", "humidity": "normal", "windy": false, "play": true},
  {"outlook": "rainy", "temp": "mild", "humidity": "normal", "windy": true, "play": true},
  {"outlook": "overcast", "temp": "mild", "humidity": "high", "windy": true, "play": true},
  {"outlook": "overcast", "temp": "hot", "humidity": "normal", "windy": false, "play": true},
  {"outlook": "sunny", "temp": "mild", "humidity": "high", "windy": true, "play": false},
];

var target = "play";
var predictors = ["outlook", "temp", "humidity", "windy"];

var dt = new DecisionTree(training_data, target, predictors);

var predicted_class = dt.predict({
   outlook: "rainy",
   humidity: "normal"
 });

var treeModel = dt.toJSON();

console.log('Predicated class: ', predicted_class);

app.get('/', function (req, res) {
  res.send(treeModel)
})

app.listen(3000, function () {
  console.log('Decision tree JSON object available at http://localhost:3000')
})
