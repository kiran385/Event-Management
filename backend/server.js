// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://22it060:9NJz04uye9u8EtRf@cluster0.eh5ks.mongodb.net/Event_Management?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
	console.log('Connected to MongoDB')
});

// Routes
app.use('/api/events', eventRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
