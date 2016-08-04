'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

describe('app testing', function() {

	//get project collection url > should be string, should start with tfs://ExcelRequirements (protocol handler)
	//get project parameters > should be plain text with no spaces 
	var token, token1, token2, token3, server;

	before(function(done) {
		require('../server')(true, function(srv) {
			server = srv;
			done();
		});
	});

	it('should fail auth without token', function(done) {
		chai.request(server)
		.get('/api/user/username')
		.end(function(err, res) {
			expect(err).to.eql(null);
			expect(res).to.have.status(403);
			expect(res.body).to.eql({msg: 'could not authenticate - no token'});
			done();
		});
	});

	it('should fail auth with a bad token', function(done) {
		chai.request(server)
		.get('/api/user/username')
		.set('eat', 'bad token')
		.end(function(err, res) {
			expect(err).to.eql(null);
			expect(res).to.have.status(403);
			expect(res.body).to.eql({msg: 'could not authenticate - decoding error'});
			done();
		});
	});

});

