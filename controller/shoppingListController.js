// shoppingListController.js
// Import shopping list model
ShoppingList = require('../model/shoppingListModel');
// Handle index actions
exports.index = function (req, res) {
    ShoppingList.get(function (err, shoppingList) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Shopping list retrieved successfully",
            data: shoppingList
        });
    });
};

exports.new = function (req, res) {
    var shoppingList = new ShoppingList();
    shoppingList.name = req.body.name ? req.body.name : shoppingList.name;


    shoppingList.save(function (err) {
        
res.json({
            message: 'New shopping list created!',
            data: shoppingList
        });
    });
};
// Handle view shoppingList info
exports.view = function (req, res) {
    ShoppingList.findById(req.params.shoppingList_id, function (err, shoppingList) {
        if (err)
            res.send(err);
        res.json({
            message: 'Shopping list details loading..',
            data: shoppingList
        });
    });
};

exports.update = function (req, res) {
ShoppingList.findById(req.params.shoppingList_id, function (err, shoppingList) {
        if (err)
            res.send(err);
shoppingList.name = req.body.name ? req.body.name : shoppingList.name;
        shoppingList.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'shoppingList Info updated',
                data: shoppingList
            });
        });
    });
};

exports.delete = function (req, res) {
    ShoppingList.remove({
        _id: req.params.shoppingList_id
    }, function (err, shoppingList) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'shopping list deleted'
        });
    });
};