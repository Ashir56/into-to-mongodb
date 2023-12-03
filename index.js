require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { createUser, deleteUsers, updateUser, getUsers} = require('./userOperations')
app.use(express.json());



const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const database = process.env.MONGODB_DATABASE;

const connectionString = `mongodb+srv://${username}:${password}@cluster0.svlbbd6.mongodb.net/${database}`;


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(async () => {
    console.log("Connection to MongoDB created");

    // Creating a user
    let user = await createUser('Ashir', 'Male', 'sp22-bse-026@cuilahore.edu.pk', 'ashir56', 'hellothree', 22)
    console.log(user)

    //Get all users
    let allUsers = await getUsers();
    console.log(allUsers);

    //Delete a user
    console.log(await deleteUsers("656caed129b31f78c9083f31"));


    //Update a user
    let updatedUser = await updateUser('656caf5cdb4a1a792d53c615', 'Ali', 'Male', 'sp22-bse-026@cuilahore.edu.pk', 'ashir56', 'hellothree', 22);
    console.log(updatedUser);
})
.catch((err) => {
    console.log("Error Connecting");
    console.log(err);
});

app.listen(3000);
