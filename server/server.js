import app from "./app/index.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(
    `Server Connected: Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
