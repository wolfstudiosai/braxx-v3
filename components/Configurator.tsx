
import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronRight, ArrowLeft, Plus } from 'lucide-react';

interface SpecTab {
  name: string;
  data: Record<string, string>;
}

const TABS: Record<string, SpecTab[]> = {
  upper: [
    { name: 'BATTERY', data: { 'Battery': '72V 38ah', 'Charge Time': '3 hrs' } },
    { name: 'SUSPENSION', data: { 'Front': 'Adjustable Inverted', 'Rear': 'Mono-shock' } },
    { name: 'MOTOR', data: { 'Peak Power': '12kW', 'Top Speed': '60 mph' } }
  ],
  lower: [
    { name: 'WHEELS', data: { 'Tire Tread': '50/50', 'Wheel Size': '19" Front / 18" Rear', 'Tire Type': 'Dual-Sport', 'Rim Material': 'Aluminum Alloy', 'Tire Brand': 'CST' } },
    { name: 'BRAKES', data: { 'Front': '4-Piston Hydraulic', 'Rear': '2-Piston Hydraulic' } },
    { name: 'PERFORMANCE', data: { '0-30 mph': '2.5s', 'Range': '50 miles' } }
  ]
};

interface ConfiguratorProps {
  allowedModels?: string[];
  onAddToCart?: () => void;
}

export const Configurator: React.FC<ConfiguratorProps> = ({ allowedModels = ['GT', 'GT PRO'], onAddToCart }) => {
  const [model, setModel] = useState(allowedModels[0] || 'GT');
  const [color, setColor] = useState('BLACK');
  const [activeUpperTab, setActiveUpperTab] = useState(0);
  const [activeLowerTab, setActiveLowerTab] = useState(0);
  const [isBookingMode, setIsBookingMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
    };
  });

  return (
    <div className="flex flex-col gap-5 bg-white/30 backdrop-blur-md p-7 rounded-[2.5rem] border border-white/40 shadow-2xl transition-all duration-500 overflow-hidden min-h-[680px] text-black">
      {/* Model Selector Section - Hidden if only one model is allowed */}
      {allowedModels.length > 1 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic tracking-tighter uppercase">MODEL</h2>
            <div className="flex p-1 bg-black/5 rounded-full min-w-[140px]">
              {allowedModels.map(m => (
                <button 
                  key={m}
                  onClick={() => setModel(m)}
                  className={`flex-1 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-all ${model === m ? 'bg-black text-white shadow-md' : 'text-gray-400'}`}
                >{m}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {allowedModels.length === 1 && (
         <div className="flex items-center justify-between border-b border-black/5 pb-2">
            <h2 className="text-xl font-black italic tracking-tighter uppercase">{allowedModels[0]}</h2>
            <span className="text-[8px] font-black text-black/30 tracking-widest uppercase">Base Configuration</span>
         </div>
      )}

      <div className="flex-1">
        {!isBookingMode ? (
          /* Configuration Mode View */
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center justify-between p-4 bg-white/40 rounded-2xl border border-white/50">
              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">GLOSS BASE</span>
              <div className="flex items-center gap-3">
                <button onClick={() => setColor('WHITE')} className={`w-5 h-5 rounded-full border-2 transition-all ${color === 'WHITE' ? 'border-black bg-white scale-110' : 'border-transparent bg-white/50'}`} />
                <button onClick={() => setColor('BLACK')} className={`w-5 h-5 rounded-full border-2 transition-all ${color === 'BLACK' ? 'border-black bg-black scale-110' : 'border-transparent bg-black/30'}`} />
              </div>
            </div>

            {/* Upper Specs Tabs */}
            <div className="space-y-4">
              <div className="flex gap-2 p-1 bg-black/5 rounded-full">
                {TABS.upper.map((tab, idx) => (
                  <button 
                    key={tab.name}
                    onClick={() => setActiveUpperTab(idx)}
                    className={`flex-1 py-2 text-[8px] font-black tracking-widest rounded-full transition-all ${activeUpperTab === idx ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="space-y-2.5 px-1">
                {Object.entries(TABS.upper[activeUpperTab].data).map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
                    <span className="text-[10px] font-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lower Specs Tabs */}
            <div className="space-y-4">
              <div className="flex gap-2 p-1 bg-black/5 rounded-full">
                {TABS.lower.map((tab, idx) => (
                  <button 
                    key={tab.name}
                    onClick={() => setActiveLowerTab(idx)}
                    className={`flex-1 py-2 text-[8px] font-black tracking-widest rounded-full transition-all ${activeLowerTab === idx ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(TABS.lower[activeLowerTab].data).map(([label, value]) => (
                  <div key={label} className="bg-white/40 p-3 rounded-xl border border-white/50">
                    <span className="block text-[7px] font-black text-gray-400 uppercase mb-1">{label}</span>
                    <span className="block text-[9px] font-black leading-none">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Booking Mode View */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <button 
              onClick={() => setIsBookingMode(false)}
              className="w-full py-3 bg-black/5 text-black rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black/10 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={14} /> BACK TO SPECS
            </button>

            <div className="bg-white/40 p-6 rounded-[2rem] border border-white/50 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-black tracking-widest uppercase">SELECT DATE</span>
                <CalendarIcon size={14} className="text-black/40" />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {days.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(i)}
                    className={`py-3 rounded-xl flex flex-col items-center transition-all ${
                      selectedDate === i 
                      ? 'bg-black text-white shadow-lg' 
                      : 'bg-white/60 text-gray-400 hover:bg-white/80'
                    }`}
                  >
                    <span className="text-[8px] font-bold uppercase mb-0.5">{d.day}</span>
                    <span className="text-xs font-black">{d.date}</span>
                  </button>
                ))}
                <div className="py-3 rounded-xl border border-dashed border-black/10 flex items-center justify-center text-[8px] text-gray-400 font-bold uppercase leading-tight text-center">
                  MORE<br/>DATES
                </div>
              </div>
            </div>

            <div className="bg-white/40 p-5 rounded-[2rem] border border-white/50">
              <h4 className="text-[9px] font-black text-black tracking-widest uppercase mb-1">LOCATION</h4>
              <p className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed">
                BRAXX STRATEGIC OUTPOST<br/>LOS ANGELES, CA
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons Section */}
      <div className="pt-2 space-y-3">
        {!isBookingMode && (
          <button 
            onClick={onAddToCart}
            className="w-full py-4 bg-white/80 text-black border border-black/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            ADD TO CART <Plus size={14} />
          </button>
        )}
        
        {!isBookingMode ? (
          <button 
            onClick={() => setIsBookingMode(true)}
            className="relative w-full py-5 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden group transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              BOOK TEST RIDE <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Stripe pattern overlay */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-[25deg] translate-x-4 pointer-events-none border-l border-white/10" />
            <div className="absolute top-0 right-2 w-1/4 h-full bg-white/5 skew-x-[25deg] translate-x-8 pointer-events-none" />
          </button>
        ) : (
          <button 
            disabled={selectedDate === null}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2 shadow-xl ${
              selectedDate !== null 
              ? 'bg-[#e2ff4a] text-black hover:bg-black hover:text-white' 
              : 'bg-black/5 text-gray-400 cursor-not-allowed'
            }`}
          >
            CONFIRM RESERVATION <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
