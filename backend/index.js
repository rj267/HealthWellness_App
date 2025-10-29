const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

let contacts = [];
let articles = [
  { id: 1, title: '5 Simple Daily Habits for Better Sleep', excerpt: 'Small changes that improve sleep hygiene and recovery.' },
  { id: 2, title: 'Beginner-friendly Home Workouts', excerpt: 'Short routines you can do in 20 minutes.' }
];

app.get('/api/articles', (req, res) => res.json(articles));

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  contacts.push({ name, email, message, date: new Date().toISOString() });
  return res.json({ ok: true });
});

app.post('/api/prakriti', (req, res) => {
  // Accept answers and return pitta/vata/kapha percentage
  const { energy, sleep, stress } = req.body;
  let p=0,v=0,k=0;
  if(energy==='high') p+=2; else if(energy==='low') k+=2; else v+=1;
  if(sleep==='light') v+=2; else if(sleep==='deep') k+=2; else p+=1;
  if(stress==='easily') p+=2; else if(stress==='calm') k+=2; else v+=1;
  const total = p+v+k || 1;
  const pct = { pitta: Math.round((p/total)*100), vata: Math.round((v/total)*100), kapha: Math.round((k/total)*100) };
  res.json(pct);
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
