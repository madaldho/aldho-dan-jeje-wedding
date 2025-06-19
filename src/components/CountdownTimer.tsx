
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flower, Heart } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

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
    { label: 'Hari', value: timeLeft.days, color: 'from-rose-500 to-pink-500' },
    { label: 'Jam', value: timeLeft.hours, color: 'from-pink-500 to-purple-500' },
    { label: 'Menit', value: timeLeft.minutes, color: 'from-purple-500 to-indigo-500' },
    { label: 'Detik', value: timeLeft.seconds, color: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <section id="countdown" className="py-16 bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        style={{ scale, rotateX }}
      >
        <motion.div 
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Flower className="text-rose-500" size={28} />
          </motion.div>
          
          <motion.h2 
            className="text-2xl font-bold mb-2 text-slate-800 font-elegant"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Menuju Hari Bahagia
          </motion.h2>
          
          <motion.p 
            className="text-sm mb-6 text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Waktu tersisa hingga hari istimewa kami
          </motion.p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {timeUnits.map((item, index) => (
              <motion.div 
                key={item.label}
                className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-3 transform transition-all duration-300 shadow-lg relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
              >
                <motion.div 
                  className="text-2xl font-bold mb-1"
                  key={item.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs font-semibold opacity-90">
                  {item.label}
                </div>
                
                {/* Floating hearts */}
                <motion.div
                  className="absolute top-1 right-1"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Heart className="w-3 h-3 text-white/30" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-sm text-slate-600 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            13 Juli 2025 • Jam 11:00 WIB
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
