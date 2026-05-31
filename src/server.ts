import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint (required for Render)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Crypto Intel Bot is running!'
  });
});

// Basic test endpoint
app.get('/', (req, res) => {
  res.send('Crypto Intel Bot is alive! 🤖');
});

// Telegram webhook endpoint (will add real handlers later)
app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`✅ Bot server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
