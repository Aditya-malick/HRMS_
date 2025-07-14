const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log("❌ DB failed to connect:", err.message);
        process.exit(1); // recommended to exit app on DB failure
    }
};

module.exports = connectToDb;
