const axios = require('axios');
const APIKEY = require('dotenv').config();

async function generateText(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: prompt,
      max_tokens: 100, // Adjust the number of tokens as per your requirement
      temperature: 0.6, // Adjust the temperature to control the randomness of the generated text
    }, {
      headers: {
        'Authorization': 'Bearer proccess.env.APIKEY',
        'Content-Type': 'application/json',
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


async function main() {
  const prompt = 'Count to 5';
  const generatedText = await generateText(prompt);
  console.log(generatedText);
}

main().catch(console.error);
