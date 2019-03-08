var mongoose = require('mongoose');
// Setup schema
var itemsListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    list_id: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    metric_unit: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true,
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export ItemsList model
var ItemsList = module.exports = mongoose.model('itemsList', itemsListSchema);
module.exports = ItemsList;