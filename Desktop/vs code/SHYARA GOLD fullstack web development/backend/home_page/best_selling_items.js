const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 4002;

// MongoDB connection details for Atlas
const uri = "mongodb+srv://Dhruveshshyara16:Dhruvesh1611@cluster1.mi6ov.mongodb.net/home_page?retryWrites=true&w=majority";
const dbName = "home_page";

let db, best_selling_items, editorials;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        best_selling_items = db.collection("best_selling_items");
        editorials = db.collection("editorials"); // Initialize the editorials collection

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

initializeDatabase();

// GET: Fetch all best-selling items
app.get('/best_selling_items', async (req, res) => {
    try {
        const items = await best_selling_items.find().toArray();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send("Error fetching items: " + err.message);
    }
});

// GET: Fetch editorial data
app.get('/editorials', async (req, res) => {
    try {
        const editorialData = await editorials.find().toArray();
        res.status(200).json(editorialData);
    } catch (err) {
        res.status(500).send("Error fetching editorials: " + err.message);
    }
});
