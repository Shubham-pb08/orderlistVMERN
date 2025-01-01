const Contact = require('../models/contact-model');

const contactForm = async (req, res) => {
    try {
        console.log("control is here in contact-controller.js");
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message: "Message sent"});
    }
    catch(error) {
        console.log(error);  
        return res.status(500).json({message: "Message NOT sent"});
    }
}

module.exports = contactForm;