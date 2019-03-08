let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to shopping list crafted with love!',
    });
});
// Import shoppingList/itemsList controller
var shoppingList = require('../controller/shoppingListController');
var itemsList = require('../controller/itemsListController');
// shoppingList routes
router.route('/lists')
    .get(shoppingList.index)
    .post(shoppingList.new);
    
router.route('/lists/:id')
    .get(shoppingList.view)
    .patch(shoppingList.update)
    .put(shoppingList.update)
    .delete(shoppingList.delete);
// itemsList routes
router.route('/items')
    .get(itemsList.index)
    .post(itemsList.new);
//get items by list id 
router.route('/items/:list_id')
    .get(itemsList.index)
// get list item for sprcific id 
router.route('/items/:list_id')
    .get(itemsList.view)
    .patch(itemsList.update)
    .put(itemsList.update)
    .delete(itemsList.delete);

// Export API routes
module.exports = router;