const { connect } = require("mongoose");

const connectDatabase = async () => {
  try {
    const db = await connect(
      "mongodb+srv://fjqr-admin:zimHzpHgx3gNX8oD@cluster0.fyetwvl.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(db.connection.name);
    return db;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
