import mongoose from "mongoose";

const data = mongoose.connect('mongodb+srv://pratyushbhatiya106:bqbM4kDodAatqIxD@schooleapi.evr3v.mongodb.net/schoole_db')
.then(() => console.log("conected to db"))
.catch((err) => console.log("not connected to db", err))

export default data;