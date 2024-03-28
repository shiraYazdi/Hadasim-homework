import mongoose from "mongoose";
export const connectTodb = () => {
    const mongoURI = process.env.DB_CONNECTION 
    mongoose.connect(`${mongoURI}`).then(suc => {
        console.log("mongodb connected on host " + suc.connection.host)
    }).catch(err => {
        console.log(err);
        console.log("cannot connect mongodb");
        process.exit(1)
    })
}
