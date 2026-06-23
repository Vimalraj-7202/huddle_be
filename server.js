import "./src/config/config.js";
import app from "./app.js";
import connectDB from "./src/config/db.config.js";

const PORT=process.env.PORT || 5000;
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on Port no:${PORT}`)
})