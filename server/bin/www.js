import http from "http";
import app from "../app";
import { Server } from "socket.io";
// import { PORT } from "configs";
const PORT = 5000;
// ------------------------------------------------------------->>
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["POST", "GET"],
  },
});
//------------------------------------------------------------->>
server.listen(PORT);

server.on("listening", () => {
  console.log(`Server running on PORT ${server.address().port}.`);
});

server.on("error", (error) => {
  console.log("Error during server creation ==>", error);
});

export default io;
