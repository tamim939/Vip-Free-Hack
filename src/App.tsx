import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Smartphone, Terminal, AlertCircle, ChevronRight, Cpu, Activity, Globe } from 'lucide-react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  // Target phone number: 01909338635 (11 digits)
  const TARGET_PHONE = "01909338635";

  useEffect(() => {
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

    setTimeout(() => {
      const cleanPhone = phoneNumber.trim();
      
      // Validation Logic:
      // 1. Phone number must be exactly 11 digits
      // 2. Must match 01909338635
      // 3. Password must be 8 characters or more
      
      if (cleanPhone.length !== 11) {
        setError('ফোন নম্বর অবশ্যই ১১ ডিজিটের হতে হবে!');
        setIsLoading(false);
        return;
      }

      if (cleanPhone !== TARGET_PHONE) {
        setError('ভুল ফোন নম্বর! সঠিক ১১ ডিজিটের নম্বর দিন।');
        setIsLoading(false);
        return;
      }

      if (password.length < 8) {
        setError('পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!');
        setIsLoading(false);
        return;
      }

      // Redirect immediately to the target URL
      window.location.href = 'https://www.profitablecpmratenetwork.com/q22i5byud?key=dcf3fce3472d6ba711a0feee502b7013';
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-brutal-black overflow-hidden font-mono selection:bg-neon-green selection:text-brutal-black">
      {/* Background Matrix-like Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(90deg, #00FF00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/10 to-transparent h-[200%] w-full"
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

        {/* Header with Glitch Effect */}
        <div className="mb-8 text-center relative">
          <motion.div
            animate={{ 
              x: [0, -2, 2, -1, 1, 0],
              filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(0deg)"]
            }}
            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
            className="inline-block"
          >
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter italic relative">
              VIP <span className="text-neon-green">FREE</span> HACK
              <span className="absolute -top-1 -left-1 text-red-500 opacity-30 select-none">VIP FREE HACK</span>
              <span className="absolute top-1 left-1 text-blue-500 opacity-30 select-none">VIP FREE HACK</span>
            </h1>
          </motion.div>
          <div className="h-1.5 w-32 bg-neon-green mx-auto mt-2 skew-x-[-20deg]" />
        </div>

        {/* Terminal Output */}
        <div className="mb-6 p-4 bg-zinc-900/90 border-l-4 border-neon-green brutal-border font-mono text-[10px] text-neon-green h-28 overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.1)]">
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

          <form onSubmit={handleLogin} className="bg-zinc-900/95 p-8 brutal-border brutal-shadow space-y-6 relative overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green" />

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <Smartphone className="w-3 h-3 text-neon-green" /> Phone Number (11 Digits)
              </label>
              <div className="relative">
                <input 
                  type="text"
                  maxLength={11}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="01909338635"
                  className="w-full bg-brutal-black border-2 border-zinc-800 p-4 font-mono text-neon-green outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all placeholder:text-zinc-800"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <Lock className="w-3 h-3 text-neon-green" /> Access Key (Min 8 Chars)
              </label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-brutal-black border-2 border-zinc-800 p-4 font-mono text-neon-green outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all placeholder:text-zinc-800"
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
              className="w-full group relative py-5 bg-neon-green text-brutal-black font-black uppercase tracking-[0.3em] brutal-shadow-hover disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Cpu className="w-5 h-5" />
                    </motion.div>
                    Processing...
                  </>
                ) : (
                  <>
                    Bypass Security
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
              {/* Button Shine Effect */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 -skew-x-12"
              />
            </button>
          </form>
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
