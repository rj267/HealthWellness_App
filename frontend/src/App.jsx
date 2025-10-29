
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function App() {
  const [route, setRoute] = useState('home');
  const pages = ['home', 'tools', 'tracker', 'prakriti', 'meditation'];

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(180deg,#fff,#ecfdf5)', color:'#0f172a'}}>
      <header style={{background:'#fff',boxShadow:'0 1px 3px rgba(0,0,0,0.06)',position:'sticky',top:0,zIndex:10}}>
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px'}}>
          <h1 style={{color:'#16a34a',fontWeight:700,fontSize:20}}>HealthWellness</h1>
          <nav style={{display:'flex',gap:16}}>
            {pages.map(p => (
              <button key={p} onClick={()=>setRoute(p)} style={{textTransform:'capitalize', color: route===p ? '#047857' : '#475569', fontWeight: route===p ? 700: 400, background:'none',border:'none',cursor:'pointer'}}>{p}</button>
            ))}
          </nav>
        </div>
      </header>

      <main style={{maxWidth:1100, margin:'24px auto', padding:'0 16px'}}>
        {route==='home' && <Home onNavigate={setRoute} />}
        {route==='tools' && <Tools />}
        {route==='tracker' && <Tracker />}
        {route==='prakriti' && <PrakritiAnalysis />}
        {route==='meditation' && <Meditation />}
      </main>

      <footer style={{textAlign:'center', padding:'20px 0', color:'#6b7280'}}>© {new Date().getFullYear()} HealthWellness</footer>
    </div>
  );
}

function Home({onNavigate}){
  const [tip, setTip] = useState('');
  const tips = [
    'Stay hydrated and stretch every hour!',
    'Meditate 5 minutes to reset your focus.',
    'Include colorful veggies in your meal for better energy.',
    'Sleep early today — your body restores itself at night.',
  ];
  useEffect(()=>{ setTip(tips[Math.floor(Math.random()*tips.length)]); },[]);

  return (
    <div style={{display:'grid',gap:18}}>
      <div style={{background:'#d1fae5',padding:12,borderRadius:8,color:'#065f46'}}>💡 {tip}</div>
      <h2 style={{fontSize:28,fontWeight:700}}>Welcome to HealthWellness</h2>
      <p>Track your wellness, discover your Ayurvedic balance, and improve daily habits.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:16}}>
        <Card title="BMI Tools" onClick={()=>onNavigate('tools')} desc="Check BMI, sleep, and hydration" />
        <Card title="Prakriti Test" onClick={()=>onNavigate('prakriti')} desc="Know your Pitta, Vata, Kapha type" />
        <Card title="Tracker" onClick={()=>onNavigate('tracker')} desc="Log water, sleep & more" />
      </div>
    </div>
  );
}

function Card({title,desc,onClick}){ return (
  <div onClick={onClick} style={{padding:12,background:'#fff',borderRadius:10,boxShadow:'0 1px 3px rgba(0,0,0,0.06)',cursor:'pointer'}}>
    <h3 style={{color:'#059669',fontWeight:600}}>{title}</h3>
    <p style={{color:'#6b7280'}}>{desc}</p>
  </div>
); }

function Tools(){
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  function calc(){
    const h = parseFloat(height); const w = parseFloat(weight);
    if(!h||!w) return;
    const b = (w / ((h/100)**2)).toFixed(1);
    setBmi(b);
  }
  return(
    <div>
      <h2 style={{fontSize:20,fontWeight:700,marginBottom:12}}>Wellness Tools</h2>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <input value={height} onChange={e=>setHeight(e.target.value)} placeholder="Height (cm)" style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
        <input value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Weight (kg)" style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
        <button onClick={calc} style={{padding:'8px 12px',background:'#16a34a',color:'#fff',borderRadius:6,border:'none'}}>Check BMI</button>
      </div>
      {bmi && <p style={{marginTop:12}}>Your BMI: <strong>{bmi}</strong></p>}
    </div>
  );
}

function Tracker(){
  const [logs,setLogs] = useState([]);
  const [entry,setEntry] = useState({date:'',water:'',sleep:''});

  function add(){
    if(!entry.date) return;
    // convert water/sleep to numbers for chart
    setLogs(prev=>[...prev,{
      date: entry.date,
      water: Number(entry.water),
      sleep: Number(entry.sleep)
    }]);
    setEntry({date:'',water:'',sleep:''});
  }

  return(
    <div>
      <h2 style={{fontSize:20,fontWeight:700,marginBottom:12}}>Daily Tracker</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:8}}>
        <input type="date" value={entry.date} onChange={e=>setEntry({...entry,date:e.target.value})} style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
        <input placeholder="Water (cups)" value={entry.water} onChange={e=>setEntry({...entry,water:e.target.value})} style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
        <input placeholder="Sleep (hrs)" value={entry.sleep} onChange={e=>setEntry({...entry,sleep:e.target.value})} style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
        <button onClick={add} style={{background:'#16a34a',color:'#fff',padding:8,borderRadius:6,border:'none'}}>Add</button>
      </div>

      {/* ✅ Graph Section */}
      <div style={{marginTop:18,height:260}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={logs}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="water" fill="#34d399" name="Water (cups)" />
            <Bar dataKey="sleep" fill="#60a5fa" name="Sleep (hrs)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ Log List */}
      <div style={{marginTop:12,display:'grid',gap:8}}>
        {logs.map((l,i)=>(
          <div key={i} style={{padding:8,borderRadius:8,border:'1px solid #e6e6e6',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div><strong>{l.date}</strong> — {l.water} cups, {l.sleep} hrs</div>
            <button onClick={()=>setLogs(logs.filter((_,j)=>j!==i))} style={{color:'#dc2626',background:'none',border:'none'}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}


function PrakritiAnalysis(){
  const [answers, setAnswers] = useState({energy:'',sleep:'',stress:''});
  const [result, setResult] = useState(null);

  function analyze(){
    let p=0,v=0,k=0;
    if(answers.energy==='high') p+=2; else if(answers.energy==='low') k+=2; else v+=1;
    if(answers.sleep==='light') v+=2; else if(answers.sleep==='deep') k+=2; else p+=1;
    if(answers.stress==='easily') p+=2; else if(answers.stress==='calm') k+=2; else v+=1;
    const total=p+v+k;
    const pct={pitta: Math.round((p/total)*100), vata: Math.round((v/total)*100), kapha: Math.round((k/total)*100)};
    setResult(pct);
  }

  const COLORS=['#f87171','#60a5fa','#34d399'];

  return(
    <div>
      <h2 style={{fontSize:20,fontWeight:700,marginBottom:12}}>Ayurvedic Prakriti Analysis</h2>
      <p style={{color:'#6b7280'}}>Discover your body-mind constitution — Pitta, Vata, or Kapha.</p>

      <div style={{display:'grid',gap:12,marginTop:12}}>
        <Select label="Energy level" options={{high:'High', moderate:'Moderate', low:'Low'}} val={answers.energy} setVal={v=>setAnswers({...answers,energy:v})} />
        <Select label="Sleep pattern" options={{light:'Light', moderate:'Moderate', deep:'Deep'}} val={answers.sleep} setVal={v=>setAnswers({...answers,sleep:v})} />
        <Select label="Stress response" options={{easily:'Gets stressed easily', balanced:'Balanced', calm:'Remains calm'}} val={answers.stress} setVal={v=>setAnswers({...answers,stress:v})} />
        <button onClick={analyze} style={{background:'#16a34a',color:'#fff',padding:'8px 12px',border:'none',borderRadius:6}}>Analyze</button>
      </div>

      {result && (
        <div style={{marginTop:16, background:'#ecfdf5', padding:12, borderRadius:8}}>
          <h3 style={{fontWeight:600, marginBottom:8}}>Your Prakriti Balance:</h3>
          <div style={{height:280}}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie dataKey="value" data={Object.entries(result).map(([k,v])=>({name:k,value:v}))} label>
                  {Object.keys(result).map((_,i)=>(<Cell key={i} fill={COLORS[i]} />))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p style={{textAlign:'center',marginTop:8,color:'#374151'}}>Dominant Dosha: <strong>{Object.keys(result).reduce((a,b)=>result[a]>result[b]?a:b)}</strong></p>
        </div>
      )}
    </div>
  );
}

function Select({label,options,val,setVal}){
  return(
    <div>
      <label style={{display:'block',fontWeight:600,marginBottom:6}}>{label}</label>
      <select value={val} onChange={e=>setVal(e.target.value)} style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb',width:'100%'}}>
        <option value="">Select</option>
        {Object.entries(options).map(([v,l])=>(<option key={v} value={v}>{l}</option>))}
      </select>
    </div>
  );
}

function Meditation(){
  const [running,setRunning]=useState(false);
  const [phase,setPhase]=useState('Inhale');
  useEffect(()=>{ if(!running) return; let phases=['Inhale','Hold','Exhale']; let i=0; const timer=setInterval(()=>{setPhase(phases[i%3]); i++;},4000); return()=>clearInterval(timer); },[running]);
  return(
    <div style={{textAlign:'center'}}>
      <h2 style={{fontSize:20,fontWeight:700,marginBottom:12}}>Meditation Breathing</h2>
      <p style={{color:'#6b7280',marginBottom:12}}>4-4-4 guided breathing for calm focus</p>
      <button onClick={()=>setRunning(r=>!r)} style={{padding:'8px 12px',borderRadius:6,color:'#fff',background: running? '#ef4444' : '#16a34a',border:'none'}}>{running?'Stop':'Start'}</button>
      {running && <div style={{marginTop:16,fontSize:18,fontWeight:600}}>{phase}</div>}
    </div>
  );
}
