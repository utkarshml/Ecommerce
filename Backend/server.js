import { app } from "./index.js";
// uncaughtException
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
})
// Path: Backend/server.js
const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
    }
);

// caught unhandledRejection
process.on("unhandledRejection", (err) => {
   console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    }
    );
})