import {ChatOpenAI} from "@langchain/openai"
const chatModel= new ChatOpenAI({
    openAIApiKey:`my_open_ai_key`
})
await chatModel.invoke("Who was Amschel anyways?");