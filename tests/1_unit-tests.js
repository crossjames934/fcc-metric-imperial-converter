/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),"32");
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = "3.2L";
      assert.equal(convertHandler.getNum(input),"3.2");
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = "1/5kg";
      assert.equal(convertHandler.getNum(input),"1/5");
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = "2.3/10km";
      assert.equal(convertHandler.getNum(input),"2.3/10");
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = "2/2/3L";
      assert.equal(convertHandler.getNum(input),null);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = "kg";
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit("2"+ele),ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = "ug";
      assert.equal(convertHandler.getUnit(input),null);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','L','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      assert.equal(convertHandler.convert(input[0],input[1]),expected); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'L'];
      var expected = 1.32086;
      assert.equal(convertHandler.convert(input[0],input[1]),expected); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'Mi'];
      var expected = 8.04670;
      assert.equal(convertHandler.convert(input[0],input[1]),expected); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [5, 'Km'];
      var expected = 3.10686;
      assert.equal(convertHandler.convert(input[0],input[1]),expected); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [5, 'Lbs'];
      var expected = 2.26796;
      assert.equal(convertHandler.convert(input[0],input[1]),expected); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'Kg'];
      var expected = 11.02312;
      assert.equal(convertHandler.convert(input[0],input[1]),expected); //0.1 tolerance
      done();
    });
  });
});