const Person = require('../models/person');



exports.add = (req, res) => {
    try {
        const { Username, email } = (req.body)
        const newPerson = new Person({ Username: Username, email: email });
        newPerson.save()
        res.json({
            status: 201,
            message: 'Successfuly record has been submited',
            apidata: newPerson
        })
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

exports.alldata = async (req, res) => {
    try {
        const record = await Person.find()
        res.json({
            status: 200,
            apidata: record
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

exports.datadelete = async (req, res) => {
    try {
        const id = req.params.id
        await Person.findByIdAndDelete(id)
        res.json({
            status: 200,
            message: "Successfuly Delete"
        })

    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }

}

exports.dataupdate = async (req, res) => {
    try {
        const id = req.params.id
        const { Username, email } = req.body
        await Person.findByIdAndUpdate(id, { Username: Username, email: email })
        res.json({
            status: 200,
            message: "Successfuly Update"
        })

    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await Person.findOne({ Username: username, email: email });
        if (user) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


