import {ChatOpenAI} from "@langchain/openai"
import {ChatPromptTemplate} from "@langchain/core/prompts"


const chatModel= new ChatOpenAI({
    openAIApiKey:`my_open_ai_key`
})
const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class historian"],
    ["user", "{input}"],

])
const chain= prompt.pipe(chatModel);

await chain.invoke({
    input:`Who is Amschel?`
})
