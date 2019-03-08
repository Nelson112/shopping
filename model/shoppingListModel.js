var mongoose = require('mongoose');
// Setup schema
var shoppingListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export ShoppingList model
var ShoppingList = module.exports = mongoose.model('shoppingList', shoppingListSchema);
module.exports.get = function (callback, limit) {
    ShoppingList.find(callback).limit(limit);
}