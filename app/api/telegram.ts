import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN!);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(
      `Info: Received the following data - ${JSON.stringify(req.body)}`
    );

    if (!TELEGRAM_BOT_TOKEN) {
      return res
        .status(500)
        .send({ message: 'TELEGRAM_BOT_TOKEN is not defined' });
    }

    if (!TELEGRAM_CHAT_ID) {
      return res
        .status(500)
        .send({ message: 'TELEGRAM_CHAT_ID is not defined' });
    }

    if (req.method !== 'POST') {
      return res.status(400).send({ message: 'Method Not Allowed' });
    }

    await bot.sendMessage(TELEGRAM_CHAT_ID, JSON.stringify(req.body));
  } catch (err: any) {
    return res.status(500).send({ message: err.message });
  }
}
