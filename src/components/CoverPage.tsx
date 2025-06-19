
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Flower, Heart, Sparkles } from 'lucide-react';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-rose-800/70 to-orange-700/80"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 150],
              y: [0, Math.cos(i) * 150],
              rotate: [0, 360]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              top: `${5 + (i * 6)}%`,
              left: `${2 + (i * 6)}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Flower className="text-white/30" size={16 + (i * 2)} />
            ) : i % 3 === 1 ? (
              <Heart className="text-pink-300/40" size={14 + (i * 2)} />
            ) : (
              <Sparkles className="text-orange-300/40" size={12 + (i * 2)} />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-sm mx-auto">
        {/* Islamic Greeting */}
        <motion.div 
          className="mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
            <div className="text-xl mb-3 font-arabic text-orange-200">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <p className="text-xs opacity-90 tracking-wide">Bismillahirrahmanirrahim</p>
          </div>
        </motion.div>

        {/* Guest Name */}
        {guestName && (
          <motion.div 
            className="mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
              <p className="text-xs font-light tracking-[0.3em] mb-2 opacity-90">KEPADA YTH.</p>
              <h2 className="text-sm font-elegant mb-2 text-pink-200">
                Bapak/Ibu/Saudara/i
              </h2>
              <motion.h1 
                className="text-lg font-bold text-orange-200 mb-3 break-words"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {guestName}
              </motion.h1>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-pink-300 to-orange-300 mx-auto"
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
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
            <p className="text-sm font-light tracking-wide mb-4 opacity-90">
              Kami mengundang Anda untuk berbagi kebahagiaan dalam
            </p>
            <motion.h2 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent font-elegant"
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
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.7
                  }}
                >
                  <Flower className="text-orange-300" size={18} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Open Invitation Button */}
        <motion.div 
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
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:via-rose-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
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
      </div>
    </motion.div>
  );
};

export default CoverPage;
