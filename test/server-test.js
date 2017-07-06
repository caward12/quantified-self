var pry = require('pryjs')
var assert = require('chai').assert
var app = require('../server')
var request = require('request')
var Foods = require('../lib/models/food')
var Meals = require('../lib/models/meal')
var MealFoods = require('../lib/models/mealFood')

describe('Server', function(){
  before(function(done){
    this.port = 9876
    this.server = app.listen(this.port, function(err, result){
      if (err) { return done(err)}
      done()
    })
    this.request = request.defaults({
      baseUrl: 'http://localhost:9876'
    })
  })

  after(function(){
    this.server.close()
  })

  it('should exist', function() {
    assert(app)
  })
})
