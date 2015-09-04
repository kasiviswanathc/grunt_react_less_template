/** @jsx React.DOM */

var React = require('react');
var foo = require('../test/foo');

module.exports = React.createClass({
  render: function() {
    var props = this.props.address,
        returnValue = foo.foo();
    return (
      <div>
        <div className="address">
          <h1>Address</h1>
          <p>
            <span>{props.streetNo}</span>
            <span>{props.streetName}</span>
          </p>
          <p>{props.city}</p>
          <p>{props.state}</p>
        </div>
        <h2>{returnValue}</h2>
      </div>
    )
  }
});
