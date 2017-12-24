/**
 * Jurnal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	id: {
  		type: 'integer',
  		autoincrement: true,
  		primarykey: true
  	},
  	nama: {
  		type: 'string'
  	},
  	filename: {
  		type: 'string'
  	},
  	tahunjurnal: {
  		type: 'integer'
  	},
  	dosen: {
  		model: 'dosen'
  	},
  	prodi: {
  		model: 'prodi'
  	}

  }
};

