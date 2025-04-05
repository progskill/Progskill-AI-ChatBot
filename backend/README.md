# AI Chat Backend

This is the backend server for the AI Chat application, powered by OpenAI's GPT-3.5 API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your OpenAI API key:
```
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start the server:
```bash
npm start
```

## API Endpoints

### POST /api/chat
Send a message to the AI assistant.

Request body:
```json
{
  "message": "Your message here"
}
```

Response:
```json
{
  "message": "AI response here"
}
```

## Environment Variables

- `PORT`: Server port (default: 3000)
- `OPENAI_API_KEY`: Your OpenAI API key

## Error Handling

The server includes error handling for:
- Missing messages
- Invalid API key
- OpenAI API errors
- Server errors

## Dependencies

- express
- cors
- dotenv
- openai 