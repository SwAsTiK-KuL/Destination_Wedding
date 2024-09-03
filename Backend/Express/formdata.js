



// // Import necessary modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// // Initialize Express app
// const app = express();

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Connect to MongoDB database
// mongoose.connect('mongodb://localhost:27017/form2', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// // Define a schema for the form data
// const formDataSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     email: String,
//     phone: String,
//     textarea: String
// });

// // Create a model based on the schema
// const FormData = mongoose.model('FormData2', formDataSchema);

// // Define a route to handle form submissions
// app.post('/form', (req, res) => {
//     // Create a new FormData document with the submitted data
//     const newFormData = new FormData({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         phone: req.body.phone,
//         textarea: req.body.textarea
//     });

//     // Save the new document to the database
//     newFormData.save((err, savedFormData) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error saving form data');
//         } else {
//             console.log('Form data saved successfully:', savedFormData);
//             res.send('Form data saved successfully');
//         }
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 6000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });





// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/form2', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
    firstname: String,
        lastname: String,
        email: String,
        phone: String,
        textarea: String
    
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Define a route to handle form submissions
app.post('/about-form', async (req, res) => {
    // Create a new FormData document with the submitted data
    const newFormData = new FormData({
        firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                textarea: req.body.textarea     
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

