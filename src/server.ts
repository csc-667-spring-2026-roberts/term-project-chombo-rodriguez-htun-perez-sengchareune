import express from "express";
import path from "path";
import homeRoutes from "./routes/home.js";

const app = express();
const PORT = process.env.PORT ?? "3000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "../public")));

app.use((request, _response, next) => {
  console.log(`${new Date().toISOString()} ${request.method} ${request.path}`);
  next();
});

app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
