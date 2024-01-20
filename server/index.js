import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import App from "../src/App";

const PORT = 8989;
const app = express();

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const data = `
    <html>
        <head></head>
        <body><div id='root'>${app}</div></body>
    </html>
    `;

  res.send(data);
});

app.listen(PORT, () => {
  console.log("Server is up and running at ", PORT);
});
