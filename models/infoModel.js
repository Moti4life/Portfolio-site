import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
    title: String,
    details: String
});

export default mongoose.models.Info || mongoose.model('Info', infoSchema);