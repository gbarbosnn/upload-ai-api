import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/prompts/get-all-prompts";
import { uploadVideosRoute } from "./routes/videos/upload-videos";

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideosRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("http server running🚀");
  });
