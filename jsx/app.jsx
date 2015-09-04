/** @jsx React.DOM */

var React   = require('react');
var Parent = require('./parent.jsx');

React.render(
  <Parent username="kasi"/>,
  document.getElementById("app")
);
