'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  cart(){
    return this.hasMany("App/Models/Cart")
  }
    order(){
    return this.hasMany('App/Models/Order')
  }

}

module.exports = Customer
