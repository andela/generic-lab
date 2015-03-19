(function(){
  'use strict';
  describe("Generic", function() {
    it("The Generic function should be defined", function() {
      expect(Generic).toBeDefined();
    });

    it("It should be a typeof function", function() {
      expect(typeof Generic).toBe(typeof (function(){}));
    });

    it("A new instance should be an object", function() {
      expect(typeof new Generic()).toBe(typeof []);
    });

    it("A new instance should be an instance of the Generic class", function() {
      expect(new Generic() instanceof Generic).toBeTruthy();
    });

    it("The toString fucntion in the Generic instance should be splittable to an Array", function() {
      expect((new Generic()).toString().split(/\s+/) instanceof Array).toBeTruthy();
    });


  });
})();