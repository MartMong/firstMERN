const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @ACCESS  Public
router.get('/',(req,res)=>{
    Item.find()
        .sort({data:-1})
        .then(items => res.json(items)
    )
});

// @route   POST api/items
// @desc    Create an Item
// @ACCESS  Public
router.post('/',(req,res)=>{
    const newItem = new Item({
        name: req.body.name,
    });
    newItem.save().then(item=>res.json(item));
});


// @route   DELETE api/items
// @desc    Delete a post
// @ACCESS  Public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id).then(item=>{
        item.remove().then(()=>res.json({success:true}))
    })
    .catch(err=>res.status(404).json({success:false}))
});


module.exports = router;