// itemsListController.js
// Import items list model
ItemsList = require('../model/itemsListModel');

exports.index = function (req, res) {
    ItemsList.find({list_id: req.params.list_id}, function (err, itemsList) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Items list retrieved successfully",
            data: itemsList
        });
    });
};

exports.new = function (req, res) {
    var itemsList = new ItemsList();
    itemsList.name = req.body.name ? req.body.name : itemsList.name;
    itemsList.list_id = req.body.list_id;
    itemsList.quantity = req.body.quantity;
    itemsList.metric_unit = req.body.metric_unit;
    itemsList.price = req.body.price;
    itemsList.checked = req.body.checked
    itemsList.save(function (err) {
        
res.json({
            message: 'New items list created!',
            data: itemsList
        });
    });
};
// Handle view itemsList info
exports.view = function (req, res) {
    ItemsList.findById(req.params.ItemsList_id, function (err, itemsList) {
        if (err)
            res.send(err);
        res.json({
            message: 'Items list details loading..',
            data: itemsList
        });
    });
};

exports.update = function (req, res) {
ItemsList.findById(req.params.itemsList_id, function (err, itemsList) {
        if (err)
            res.send(err);
            itemsList.name = req.body.name ? req.body.name : itemsList.name;
            itemsList.list_id = req.body.list_id;
            itemsList.quantity = req.body.quantity;
            itemsList.metric_unit = req.body.metric_unit;
            itemsList.price = req.body.price;
            itemsList.checked = req.body.checked
        itemsList.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'itemsList Info updated',
                data: itemsList
            });
        });
    });
};

exports.delete = function (req, res) {
    ItemsList.remove({
        _id: req.params.itemsList_id
    }, function (err, itemsList) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'items list deleted'
        });
    });
};