var chai = require('../../node_modules/chai/chai');
var expect = chai.expect;

var MyApp = require('../../src/app');

describe("MyApp", function () {
  it("should return a none empty string", function () {
    var instanceApp = MyApp.run("Hello", "World");
    expect(instanceApp).is.not.empty;
  });
  it("should render a message in an html element", function () {
    var div = document.createElement('div');
    div.innerHTML = MyApp.run("Hello", "World");
    expect(div.innerHTML).is.not.empty;
  });

});
