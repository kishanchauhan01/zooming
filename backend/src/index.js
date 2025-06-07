import "./loadEnv.js";
import connectDB from "./db/index.js";
import { server } from "./app.js";

const port = process.env.PORT

connectDB()
  .then(() => {
    server.on("error", (error) => {
      console.log("ERROR before listening: ", error);
      throw error;
    });

    server.listen(port || 3000, () => {
      console.log(`app is listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
