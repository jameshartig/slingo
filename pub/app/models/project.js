(function(){
    
    slingo.Models = slingo.Models || {};

    slingo.Models.project = Backbone.Model.extend({

        idAtrribute : 'projectID',

        defaults: {
            'name':'',
            'projectID':'',
            'languageID':'',
            'file':'',
            'displayName' : '',
            'permissions' : []

        },

        initialize: function(){
            // what ever you want to do when the model is created

        }

    });

})();