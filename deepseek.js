const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

export async function sendMessageToDeepSeek(message, conversationHistory = []) {
  const systemPrompt = `You are ReliableBot, the AI assistant for Reliable, a trusted retail and delivery company.
  
  You help with:
  - IT support (technical issues, platform problems)
  - HR services (employee inquiries, policies)
  - Finance (billing, refunds, payment issues)
  - Operations (inventory, supply chain)
  - Deliveries (tracking, delays, scheduling)
  - Account access (login issues, password reset)
  - Payment failures (card issues, transaction errors)
  - Cart issues (items not adding, checkout problems)
  - Order tracking (status updates, ETA)
  
  Be professional, helpful, and concise. If you don't know something, direct users to contact support@relaible.com.`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory,
    { role: 'user', content: message }
  ];

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('DeepSeek API error:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base. Please try again later or contact our support team at support@relaible.com.";
  }
}