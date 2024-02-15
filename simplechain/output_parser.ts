import {StringOutputParser} from "@langchain/core/output_parsers"
const outputParser= new StringOutputParser();
import {ChatOpenAI} from "@langchain/openai"
import {ChatPromptTemplate} from "@langchain/core/prompts"

const chatModel= new ChatOpenAI({
    openAIApiKey:`my_open_ai_key`
})
const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class historian"],
    ["user", "{input}"],

])
const llmchain= prompt.pipe(chatModel).pipe(outputParser);

await llmchain.invoke({
    input:`Who was Amschel anyways?`
})