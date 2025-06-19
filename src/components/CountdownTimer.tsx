
import { useState, useEffect } from 'react';
import { Flower } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-07-13T11:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-16 bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 relative">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 max-w-lg mx-auto">
          <div className="flex justify-center mb-4">
            <Flower className="text-rose-500 animate-spin" size={32} style={{ animationDuration: '3s' }} />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800 font-elegant">
            Menuju Hari Bahagia
          </h2>
          <p className="text-base mb-8 text-slate-600">
            Waktu tersisa hingga hari istimewa kami
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds }
            ].map((item, index) => (
              <div 
                key={item.label}
                className="bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-2xl p-4 transform transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs font-semibold opacity-90">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-sm text-slate-600 font-medium">
            13 Juli 2025 • Jam 11:00 WIB
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
