// const mongoose = require("mongoose");
// const env = require('./environment');
// mongoose.set("strictQuery", true);
// mongoose.connect('mongodb://127.0.0.1:27017/codeial123');

// const db = mongoose.connection;

// db.on(
//     "error",
//     console.error.bind(console, "Error connection to database MangoDB")
// );

// db.once("open", function () {
//     console.log("Connected to Database :: MongoDB");
// });

// module.exports = db;
// // export default db;
// // export {db};

const mongoose = require('mongoose');
async function ConnectingToDB() {
    try {
        await mongoose.connect('mongodb+srv://rk152531:8591@codeial.fhi4bjp.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('Connected to DB');
      } catch (error) {
        console.log("Error connecting to DB:" ,error);
      }
}
ConnectingToDB();
