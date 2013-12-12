define([
	"ember",
	"text!templates/channels/index.html.hbs"
], function( Ember, Template ) {

	return Ember.View.extend({
		template: Ember.Handlebars.compile( Template ),
		tagName: "section",
		classNames: [ "content-channels" ]
	});

});
