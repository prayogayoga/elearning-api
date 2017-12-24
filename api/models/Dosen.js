/**
 * Dosen.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
  	id: {
  		type: 'integer',
  		autoIncrement: true,
  		primaryKey: true
  	},
  	nidn: {
  		type: 'string',
  		unique: true
  	},
  	name: {
  		type: 'string'
  	},
  	avatar: {
  		type: 'string'
  	},
  	jk: {
  		model: 'jkdetail'
  	}
  }
};

