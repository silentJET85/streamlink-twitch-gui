define([
	"ember",
	"text!templates/index.html.hbs"
], function( Ember, IndexTemplate ) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile( IndexTemplate ),
		tagName: "section",
		classNames: [ "content-index" ]
	});

});
