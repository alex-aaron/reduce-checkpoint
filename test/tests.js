const assert = require('assert');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const app = require('../index.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;
const sinon = require('sinon');

var testData = 'test';

describe("#test", function(){
  it('should run test', function(){
    assert.equal(testData, "test");
  })
});

describe("#over40", function(){
  console.log(app.over40.toString());
  it('should return a number', function(){
    console.log(app.over40.toString());
    assert.equal(typeof app.over40(app.patients), 'number');
  });
  it('should return the correct number of patients over 40', function(){
    assert.deepEqual(app.over40(app.patients), 3);
  });
  it('should use the reduce method', function(){
    assert.equal(app.over40.toString().includes('reduce'), true);
  })
});

describe("#over40", function(){
  console.log(app.over40.toString());
  it('should return a number', function(){
    console.log(app.over40.toString());
    assert.equal(typeof app.over40(app.patients), 'number');
  });
  it('should return the correct number of patients over 40', function(){
    assert.deepEqual(app.over40(app.patients), 3);
  });
  it('should use the reduce method', function(){
    assert.equal(app.over40.toString().includes('reduce'), true);
  })
});
