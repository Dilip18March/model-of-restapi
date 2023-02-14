const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema(
    {
		            symbol: { type: String, required: true },
		            shares: { type: String, required: true },
					price:{type: Number, required:true }
    
    },
    
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Trade', tradeSchema, 'trades');