/**
 * Mahasiswa.js
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
  	nim: {
  		type: 'string',
  		unique: true
  	},
  	password: {
  		type: 'string'
  	},
  	name: {
  		type: 'string'
  	},
  	angkatan: {
  		type: 'integer'
  	},
  	avatar: {
  		type: 'string'
  	},
  	jk: {
  		model: 'jkdetail'
  	},
  	prodi: {
  		model: 'prodi'
  	},
  	semester: {
  		model: 'semester'
  	}

  }
};

