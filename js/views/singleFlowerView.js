// Namespace our flowerApp
var app = app || {};

app.singleFlowerView = Backbone.View.extend({

  tagName: "article",
  className: "flowerListItem",

  getTemplate: function() {
  	return $.get('../../flowerdivtemplate.tmpl').then(function(html) {
  		return html;
  	})
  },

  template: _.template(this.getTemplate),

  render: function() {
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate);
    return this;
  }

});