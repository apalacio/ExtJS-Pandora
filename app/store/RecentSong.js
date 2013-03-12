Ext.define('Panda.store.RecentSongs',{
	extend: 'Ext.data.Store',
	model:	'Panda.model.Song',
	
	//Mamke sure to require your model if you are
	//not using Ext JS 4.05
	requires:	'Panda.model.Song'
});
