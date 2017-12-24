/**
 * MataKuliah.js
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
  	nama: {
  		type: 'string'
  	},
  	dosen: {
  		model: 'dosen'
  	},
  	matkuldosen: {
  		model: 'matkuldosen'
  	},
  	prodi: {
  		model: 'prodi'
  	},
  	semester: {
  		model: 'semester'
  	},
  	filematkul: {
  		model: 'filematkul'
  	}

  }
};

