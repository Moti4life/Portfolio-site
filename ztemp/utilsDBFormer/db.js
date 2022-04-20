// import mongoose from "mongoose";

// const connectDB = async () => {

//     if(!mongoose.connections[0].readyState) {        
//         try {
//             await mongoose.connect(process.env.MONGODB_URL, {
//                 // Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, 
//                 // and useCreateIndex are true, and useFindAndModify is false.
//             })
//             console.log(`connection to db established`, mongoose.connections[0].readyState);
//         } catch (error) {
//             console.log(`error with db connection: ${error}`);
//         }
//     }

//     else{
//         console.log('connection active');
//     }

// }

// export default connectDB