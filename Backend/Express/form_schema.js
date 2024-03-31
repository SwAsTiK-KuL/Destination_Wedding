const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("form_schema", userSchema);

// const User = mongoose.model("User", userSchema); // Use mongoose.model to create a model

// module.exports = User; // Export the model

