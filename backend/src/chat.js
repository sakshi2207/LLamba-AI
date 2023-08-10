import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const endpointImgGeneration = 'https://api.openai.com/v1/images/generations';

console.log('apiKey',OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY ,
});
const openai = new OpenAIApi(configuration);

const chatGeneration= async (input)=>{

const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello world"}],
  });
  console.log(chatCompletion.data.choices[0].message);
  
  try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
      });
      console.log(completion.data.choices[0].text);
      return completion.data.choices[0].text;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
}
const imageGeneration= async (input)=>{
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    const requestBody = {
      prompt: input,
      n: 1,
      size: '1024x1024'
    };

    const response = await axios.post(endpointImgGeneration, requestBody, { headers });

    console.log('Generated Image:', response.data);
  } catch (error) {
    console.error('Error generating image:', error.message);
  }

}

export {chatGeneration, imageGeneration}