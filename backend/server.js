const express = require("express");
const path = require("path")
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
;

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors(
  {
    origin: ["https://blood-bank-app-dusky.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 8080;

// for deployment
// app.get("/", (req, res) => {
// app.use(express.static(path.resolve(__dirname, "client", "build")));
// res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });


//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
