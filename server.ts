import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and urlencoded body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Recipient email for contact form submissions.
 * Defaults to the owner email provided or configured via environment variable OWNER_EMAIL.
 * Sostituisci questo valore con l'email del titolare (es. email di tuo zio).
 */
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'Michelecagnazzo1985.mc@gmail.com';

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    ownerEmail: OWNER_EMAIL
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Strict validation: all four fields are required
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Il campo Nome è obbligatorio.' });
    }
    if (!email || typeof email !== 'string' || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ error: 'Inserisci un indirizzo Email valido.' });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return res.status(400).json({ error: 'Il campo Telefono è obbligatorio.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Il campo Messaggio è obbligatorio.' });
    }

    const timestamp = new Date().toISOString();
    const referenceId = `LVL-${Date.now().toString(36).toUpperCase()}`;

    const formattedPayload = {
      referenceId,
      timestamp,
      recipient: OWNER_EMAIL,
      sender: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
      },
      message: message.trim(),
    };

    // Log the lead to the server console
    console.log('==============================================');
    console.log(`📩 NUOVO MESSAGGIO DAL SITO - LA VIDA LOCA CREW`);
    console.log(`Rif: ${referenceId}`);
    console.log(`Destinatario (Titolare): ${OWNER_EMAIL}`);
    console.log(`Da: ${name.trim()} <${email.trim()}>`);
    console.log(`Telefono: ${phone.trim()}`);
    console.log(`Messaggio: ${message.trim()}`);
    console.log(`Data e Ora: ${new Date().toLocaleString('it-IT')}`);
    console.log('==============================================');

    return res.status(200).json({
      success: true,
      message: `Grazie ${name.trim()}, il tuo messaggio è stato inoltrato con successo a ${OWNER_EMAIL}. Ti ricontatteremo a breve al numero ${phone.trim()} o via email!`,
      details: formattedPayload,
    });
  } catch (error) {
    console.error('Errore durante l\'elaborazione del messaggio di contatto:', error);
    return res.status(500).json({
      error: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.',
    });
  }
});

// Vite middleware for development vs Production static file server
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 La Vida Loca Crew server in esecuzione sulla porta ${PORT}`);
    console.log(`📬 Email notifiche titolare configurata su: ${OWNER_EMAIL}`);
  });
}

start();
