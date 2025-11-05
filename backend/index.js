import express from "express";
import expressWs from "express-ws";
import userRouter from "./routers/userRouter.js";

const app = express();
expressWs(app); // This adds the .ws method to express

app.ws("/ws", (ws, req) => {
  ws.on("message", (msg) => {
    const data = JSON.parse(msg);
    let value = 0;
    if (data.operation === "+") {
      value = Number(data.firstNumber) + Number(data.secondNumber);
    } else {
      value = Number(data.firstNumber) - Number(data.secondNumber);
    }
    ws.send(value);
  });
});

app.use(
  "/api/user",
  (req, res, next) => {
    console.log(
      `A request was made to the user router. ${req.method} ${req.url}`
    );
    next();
  },
  userRouter
);

app.listen(8800, () => {
  console.log("hello world");
});
