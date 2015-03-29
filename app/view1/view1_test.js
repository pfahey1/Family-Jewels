'use strict';

describe('myApp.fj module', function() {

  beforeEach(module('myApp.fj'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var fj = $controller('fjCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});