import {ChatOpenAI} from "@langchain/openai"
import dotenv from "dotenv"
dotenv.config();

const chatModel= new ChatOpenAI({
    openAIApiKey:process.env.OPEN_AI_API_KEY
})
await chatModel.invoke("Who was Amschel anyways?");