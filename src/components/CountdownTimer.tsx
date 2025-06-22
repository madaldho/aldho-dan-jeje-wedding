
import { useState, useEffect } from 'react';
import { Heart, Stars, Sparkles } from 'lucide-react';

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

  const getTimeUnitStyle = (index: number) => {
    const gradients = [
      'bg-gradient-to-br from-pink-500 to-rose-500',
      'bg-gradient-to-br from-pink-400 to-rose-400', 
      'bg-gradient-to-br from-rose-400 to-pink-400',
      'bg-gradient-to-br from-rose-300 to-pink-300'
    ];
    return gradients[index] || gradients[0];
  };

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" className="relative overflow-hidden w-full min-h-[60vh] bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("/luxury-pattern.png")'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(244,114,182,0.08)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        {/* Animated Pink Particles */}
        <div className="absolute inset-0 animate-twinkle">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      {/* Remove max-w-5xl and container for full width */}
      <div className="w-full text-center relative z-10 py-20 md:py-32 px-2 md:px-8 flex flex-col items-center justify-center">
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-pink-200 p-8 shadow-[0_0_60px_rgba(244,114,182,0.25)] w-full max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Stars className="text-pink-500 animate-pulse" size={28} />
            <Heart className="text-rose-500 animate-bounce" size={32} />
            <Stars className="text-pink-500 animate-pulse" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-rose-600 font-serif">
            Save the Date!
          </h2>
          <p className="text-lg md:text-xl mb-12 text-rose-700 font-medium">
            Waktu tersisa hingga momen yang tak terlupakan kami
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {timeUnits.map((item, index) => (
              <div 
                key={item.label}
                className={`${getTimeUnitStyle(index)} rounded-2xl p-6 md:p-8 transform transition-all duration-700 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] relative group shadow-lg border border-white/40`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-base md:text-lg font-semibold text-white">
                  {item.label}
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-white animate-bounce" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-slow rounded-2xl"></div>
              </div>
            ))}
          </div>
          <div className="text-xl md:text-2xl font-serif text-rose-600 font-bold animate-pulse-slow">
            13 Juli 2025 • 11:00 WIB
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
