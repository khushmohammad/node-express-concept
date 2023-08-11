import express, {
  Express,
  json,
  raw,
  Request,
  Response,
  Router,
} from "express";

const app: Express = express();
const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
  // res.render('hello world')
  res.send("hello world");
  res.end();
});

// express body parsing
app.use(json());
app.use(express.raw());

app.post("/", function (req, res) {
  console.log(req.body.name);
  res.end();
});

// express raw parsing

app.post("/raw", function (req, res) {
  console.log(req.body.name);
  res.end();
});

// routers

const router: Router = express.Router();

router.get("/product", function (req: Request, res: Response, next) {
  console.log("Router Working");
  res.end();
});



app.use(router);

// multiple routing routes

const router1: Router = express.Router();

router1.get("/user", function (req: Request, res: Response, next) {
  console.log("Router Working user");
  res.end();
});

app.use(router1);

// Static Middleware
app.use(express.static('public'))


// The express.text() function is a built-in middleware function in Express. It parses the incoming request payloads into a string and is based on body-parser.



// The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on a body parser.

app.listen(port, () => console.log("listening on port:http://localhost:8080"));
