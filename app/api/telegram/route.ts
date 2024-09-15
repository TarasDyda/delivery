import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN!);

export async function POST(req: NextRequest) {
  try {
    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json(
        {
          message: 'TELEGRAM_BOT_TOKEN is not defined',
        },
        { status: 500 }
      );
    }

    if (!TELEGRAM_CHAT_ID) {
      return NextResponse.json(
        { message: 'TELEGRAM_CHAT_ID is not defined' },
        { status: 500 }
      );
    }

    const data = await req.json();
    const message = Object.entries(data)
      .map(([key, value]) => (value ? `${key}: ${value}` : undefined))
      .filter(Boolean)
      .join('\n');

    await bot.sendMessage(TELEGRAM_CHAT_ID, message);
    return NextResponse.json(
      { message: 'Notification was sent' },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
