Ext.application({
	name: 'Panda',	
	autoCreateViewPort: true,
	launch: function (){
		// This is fired as soon as the page is ready
	},
	models: ['Station','Song'],
	stores:	['Stations','RecentSongs','SearchResults'],
	controllers: ['Station','Song']
});
