import express from "express";
import "dotenv/config";
import { engine, inertia } from "jcc-inertia-express";
const app = express();

app.engine("jcc.html", engine.render.bind(engine) as any);
app.set("views", "views");
app.set("view engine", "jcc.html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  inertia({
    rootView: "index",
    props: (req, res) => ({
      user: (req as any)?.user || {},
    }),
    ssr: true,
  }),
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.inertia("Home", {
    users: [{ name: "Hello, World! - Abdou Jammeh hi's", age: 30 }],
  });
});

app.get("/about", (req, res) => {
  res.inertia("About");
});

app.get("/contact", (req, res) => {
  res.inertia("Contact");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
