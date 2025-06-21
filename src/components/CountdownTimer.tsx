
import { useState, useEffect } from 'react';
import { Flower, Heart, Stars, Sparkles } from 'lucide-react';

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

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days, color: 'from-purple-500 to-indigo-500' },
    { label: 'Jam', value: timeLeft.hours, color: 'from-indigo-500 to-violet-500' },
    { label: 'Menit', value: timeLeft.minutes, color: 'from-violet-500 to-purple-500' },
    { label: 'Detik', value: timeLeft.seconds, color: 'from-purple-400 to-indigo-400' }
  ];

  return (
    <section id="countdown" className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-white via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("/luxury-pattern.png")'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Animated Purple Particles */}
        <div className="absolute inset-0 animate-twinkle">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="backdrop-blur-sm bg-white/90 rounded-3xl border border-purple-200 p-8 md:p-12 shadow-[0_0_50px_rgba(147,51,234,0.2)]">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Stars className="text-purple-500 animate-pulse" size={32} />
            <Heart className="text-indigo-500 animate-bounce" size={36} />
            <Stars className="text-purple-500 animate-pulse" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-serif">
            Menuju Hari Bahagia
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-purple-600/80 font-light max-w-2xl mx-auto">
            Waktu tersisa hingga momen yang tak terlupakan
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {timeUnits.map((item, index) => (
              <div 
                key={item.label}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 md:p-8 transform transition-all duration-700 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] relative group hover:scale-105`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-3 text-white">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-base md:text-lg font-medium text-white/90">
                  {item.label}
                </div>
                
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-white animate-bounce" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-slow rounded-2xl"></div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 md:p-8">
            <div className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-pulse-slow">
              13 Juli 2025 • 11:00 WIB
            </div>
            <p className="text-purple-600/70 mt-3 text-sm md:text-base">
              Masjid Al-Hidayah, Jakarta Selatan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
