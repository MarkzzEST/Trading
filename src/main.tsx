import React from 'react';
import ReactDOM from 'react-dom/client';
import { Activity, Bell, Search, Star, TrendingUp, Newspaper, BarChart3 } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css';

const watchlist = [
  { symbol:'NVDA', name:'NVIDIA', price:'186.42', move:'+2.84%', up:true },
  { symbol:'GOOGL', name:'Alphabet', price:'251.18', move:'+1.12%', up:true },
  { symbol:'ANET', name:'Arista Networks', price:'143.65', move:'-1.94%', up:false },
  { symbol:'NBIS', name:'Nebius', price:'92.31', move:'+4.07%', up:true },
  { symbol:'MU', name:'Micron', price:'201.76', move:'-0.62%', up:false },
];
const chart = [178,181,179,184,183,187,185,190,188,193,191,196,194,199,202,200,205,204,209,212].map((v,i)=>({i,v}));

function App(){
 return <div className="app">
  <aside>
   <div className="brand"><Activity size={22}/><b>TERMINAL</b><span>BETA</span></div>
   <nav><a className="active"><BarChart3/>Markets</a><a><Star/>Watchlist</a><a><TrendingUp/>Research</a><a><Newspaper/>News</a><a><Bell/>Alerts</a></nav>
   <div className="status"><i/> MARKET DATA<br/><small>Provider not connected</small></div>
  </aside>
  <main>
   <header><div className="search"><Search size={18}/><input placeholder="Search ticker, company or market…"/><kbd>/</kbd></div><div className="clock">NASDAQ · USD</div></header>
   <section className="hero">
    <div><div className="eyebrow">MARKET OVERVIEW</div><h1>Good afternoon.</h1><p>Your market, without the noise.</p></div>
    <button>+ Add symbol</button>
   </section>
   <section className="indices">
    {[['S&P 500','6,684.22','+0.41%'],['NASDAQ','22,781.09','+0.68%'],['VIX','20.14','-3.72%'],['10Y TREASURY','4.03%','+0.02']].map(x=><div className="index" key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong><em>{x[2]}</em></div>)}
   </section>
   <div className="grid">
    <section className="panel chartPanel"><div className="panelHead"><div><span>S&P 500</span><h2>6,684.22 <b>+27.31 (+0.41%)</b></h2></div><div className="ranges"><b>1D</b><span>1W</span><span>1M</span><span>1Y</span></div></div><div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chart}><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#31d89b" stopOpacity={.28}/><stop offset="100%" stopColor="#31d89b" stopOpacity={0}/></linearGradient></defs><XAxis dataKey="i" hide/><YAxis domain={['dataMin - 3','dataMax + 3']} hide/><Tooltip contentStyle={{background:'#111821',border:'1px solid #28313d'}}/><Area dataKey="v" stroke="#31d89b" fill="url(#g)" strokeWidth={2} dot={false}/></AreaChart></ResponsiveContainer></div></section>
    <section className="panel"><div className="panelHead"><h3>WATCHLIST</h3><span>5 symbols</span></div><div className="watch">{watchlist.map(s=><div className="stock" key={s.symbol}><div className="ticker">{s.symbol}</div><div className="name">{s.name}</div><div className="price">${s.price}</div><div className={s.up?'green':'red'}>{s.move}</div></div>)}</div></section>
   </div>
   <div className="lower">
    <section className="panel"><div className="panelHead"><h3>RESEARCH QUEUE</h3><span>Decision workspace</span></div><div className="research"><div><b>ANET</b><span>Arista Networks</span></div><label>WATCH</label><p>Review valuation after recent pullback and update growth assumptions.</p></div><div className="research"><div><b>GOOGL</b><span>Alphabet</span></div><label className="buy">BUY ZONE</label><p>Compare AI capex growth with Cloud operating leverage.</p></div></section>
    <section className="panel"><div className="panelHead"><h3>TERMINAL BRIEF</h3><span>AI layer · coming next</span></div><div className="brief"><strong>What matters today</strong><p>Connect a market-data provider to turn this shell into a live research terminal. Quotes, fundamentals, filings, news and insider activity will feed one company workspace.</p><button>Configure data →</button></div></section>
   </div>
  </main>
 </div>
}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
