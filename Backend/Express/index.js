



// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    message: String
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Define a route to handle form submissions
app.post('/submit-form', async (req, res) => {
    // Create a new FormData document with the submitted data
    const newFormData = new FormData({
        full_name: req.body.full_name,
        email: req.body.email,
        message: req.body.message
    });

    try {
        // Save the new document to the database
        const savedFormData = await newFormData.save();
        console.log('Form data saved successfully:', savedFormData);
        res.send('Form data saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving form data');
    }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
