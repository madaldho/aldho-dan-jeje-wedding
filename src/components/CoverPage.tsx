
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Pause, Flower, Heart } from 'lucide-react';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/70 via-pink-900/60 to-amber-900/70"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 100],
              y: [0, Math.cos(i) * 100]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              top: `${10 + (i * 7)}%`,
              left: `${5 + (i * 8)}%`,
            }}
          >
            {i % 2 === 0 ? (
              <Flower className="text-white/20" size={20 + (i * 2)} />
            ) : (
              <Heart className="text-pink-300/30" size={16 + (i * 2)} />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-sm mx-auto">
        {/* Islamic Greeting */}
        <motion.div 
          className="mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 mb-4">
            <div className="text-2xl mb-2 font-arabic text-amber-200">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </div>
            <p className="text-xs opacity-80">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          </div>
        </motion.div>

        {/* Guest Name */}
        {guestName && (
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 interactive-3d">
              <p className="text-xs font-light tracking-[0.3em] mb-2 opacity-90">KEPADA YTH.</p>
              <h2 className="text-base font-elegant mb-2 text-rose-200">
                Bapak/Ibu/Saudara/i
              </h2>
              <motion.h1 
                className="text-xl font-bold text-amber-200 mb-2 break-words"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {guestName}
              </motion.h1>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </div>
          </motion.div>
        )}
        
        {/* Wedding Announcement */}
        <motion.div 
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 interactive-3d">
            <p className="text-sm font-light tracking-wide mb-4 opacity-90">
              Kami mengundang Anda untuk berbagi kebahagiaan dalam
            </p>
            <motion.h2 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent font-elegant"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Pernikahan Kami
            </motion.h2>
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  <Flower className={`text-${['rose', 'amber', 'pink'][i]}-300`} size={16} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Open Invitation Button */}
        <motion.div 
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={onOpenInvitation}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 border-2 border-white/30 backdrop-blur-sm interactive-3d"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Flower className="w-5 h-5 mr-2" />
              </motion.div>
              Buka Undangan
            </Button>
          </motion.div>
        </motion.div>

        {/* Music Control */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleMusicToggle}
              variant="outline"
              size="sm"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full backdrop-blur-xl"
            >
              <motion.div
                animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.6, repeat: isPlaying ? Infinity : 0 }}
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              </motion.div>
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoverPage;
