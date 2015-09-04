/** @jsx React.DOM */

var React  = require('react');
var Child    = require('./child.jsx');

module.exports = React.createClass({
  render: function() {
    var address = {
      'streetNo': "100",
      'streetName': "N 1st Street",
      'city': "San Jose",
      'state': "California"
    }
    return (
      <div>
        <h2>Hello {this.props.username}, How do you do? </h2>
        <Child address = {address}/>
      </div>
    )
  }
});
