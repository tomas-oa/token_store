const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const routes = require("./routes/index")

app.use("/api", routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app runnig on port ${PORT}`);
})
