/*
 * <%= name %> Test
 * ===========================================================================
 *
 * <%= description %>
 */

import <%= name %> from '../<%= path %><%= name %>.js';
import chai from 'chai';

let assert         = chai.assert;
let expect         = chai.expect;
let should         = chai.should();

describe('<%= description %>', function() {

 describe('#toString()', function() {

   let instance;

   // fresh instance for each test
   beforeEach(() => {
     instance = new <%= name %>();
   });

   // toString implementation
   it('should return the string representation', function() {
     instance.toString().should.be.a('string');
   });
 });
});
