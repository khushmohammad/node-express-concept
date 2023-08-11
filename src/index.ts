import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  // res.render('hello world')
  res.send("hello world");
  res.end()
});

app.listen(port, () => console.log("listening on port:http://localhost:3000"));
