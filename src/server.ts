import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/prompts/get-all-prompts";
import { uploadVideosRoute } from "./routes/videos/upload-videos";
import { createTranscriptionRoute } from "./routes/videos/create-transcriptions";
import { generateAICompletionRoute } from "./routes/videos/generate-ai-completions";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideosRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("http server running🚀");
  });
