/**
 * AMD, CommonJS, Global compatible Script Wrapper
 * https://github.com/umdjs/umd
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
    /* istanbul ignore next */
  } else if (typeof exports === 'object') {

    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.MyApp = factory();
  }
}(this, function () {

  /**
   * Luminate my world...
   * @type {{apiInterface: Object}}
   */
  var apiInterface = {

    /**
     * Luminate my world...
     *
     * @param hello -  string-  is optional
     * @param world- string-  is optional
     */
    run: function (hello="Hello", world="world") {
      var result =  hello + " " + world
      return result;
    }
  };

  return apiInterface;

}));
