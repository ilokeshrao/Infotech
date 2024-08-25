const Number = require('../models/number')

exports.addDigit = async (req, res) => {
    try {
        const { digit } = req.body;
        const newDigit = new Number({ digit });
        await newDigit.save();
        res.status(201).json({
            status: 201,
            message: 'Digit added successfully',
            data: newDigit
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

exports.getDigits = async (req, res) => {
    try {
        const digits = await Number.find();
        res.status(200).json({
            status: 200,
            data: digits
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

exports.updateDigit = async (req, res) => {
    try {
        const { id } = req.params;
        const { digit } = req.body;
        const updatedDigit = await Number.findByIdAndUpdate(id, { digit }, { new: true });
        if (!updatedDigit) {
            return res.status(404).json({
                status: 404,
                message: 'Digit not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Digit updated successfully',
            data: updatedDigit
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

exports.deleteDigit = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDigit = await Number.findByIdAndDelete(id);
        if (!deletedDigit) {
            return res.status(404).json({
                status: 404,
                message: 'Digit not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Digit deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

exports.deleteAllDigits = async (req, res) => {
    try {
        await Number.deleteMany();
        res.status(200).json({
            status: 200,
            message: 'All digits deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};
