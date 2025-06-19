
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Copy, CreditCard, Smartphone, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const DigitalGift = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const accounts = [
    {
      id: 'bca',
      bank: 'Bank BCA',
      name: 'Aldho Ramadhan',
      number: '1234567890',
      icon: CreditCard,
      color: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 'mandiri',
      bank: 'Bank Mandiri',
      name: 'Jessica Amelia',
      number: '0987654321',
      icon: CreditCard,
      color: 'from-rose-500 to-orange-500',
      bgGradient: 'from-rose-500/20 to-orange-500/20'
    },
    {
      id: 'dana',
      bank: 'DANA',
      name: 'Aldho & Jeje',
      number: '081234567890',
      icon: Smartphone,
      color: 'from-orange-500 to-pink-500',
      bgGradient: 'from-orange-500/20 to-pink-500/20'
    }
  ];

  const copyToClipboard = (text: string, accountId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(accountId);
    toast({
      title: "Nomor rekening disalin!",
      description: "Nomor rekening berhasil disalin ke clipboard",
    });
    
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section id="digital-gift" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? (
              <Gift className="text-pink-300" size={18} />
            ) : (
              <Sparkles className="text-orange-300" size={16} />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 text-white" />
              </motion.div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-elegant">
            Amplop Digital
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Doa restu Anda adalah kado terindah bagi kami. Namun jika ingin memberikan kado, 
            kami menyediakan amplop digital berikut:
          </p>
        </motion.div>

        <div className="space-y-6">
          {accounts.map((account, index) => {
            const Icon = account.icon;
            
            return (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/20 backdrop-blur-xl">
                  {/* Glass morphism background with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${account.bgGradient}`} />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        animate={{
                          x: [0, 50, 0],
                          y: [0, 30, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.7,
                          ease: "easeInOut"
                        }}
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 10}%`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-r ${account.color} shadow-xl`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg mb-1 font-elegant">
                            {account.bank}
                          </h3>
                          <p className="text-gray-700 text-sm mb-2">
                            {account.name}
                          </p>
                          <motion.p 
                            className="font-mono text-lg font-bold text-gray-800"
                            whileHover={{ scale: 1.05 }}
                          >
                            {account.number}
                          </motion.p>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => copyToClipboard(account.number, account.id)}
                          className={`bg-gradient-to-r ${account.color} hover:shadow-xl transition-all duration-300 text-white rounded-xl border-0 shadow-lg`}
                          size="sm"
                        >
                          {copiedAccount === account.id ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center"
                            >
                              <Heart className="w-4 h-4 mr-1" />
                              Tersalin
                            </motion.div>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-1" />
                              Salin
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 p-6 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            </motion.div>
            
            <div className="text-lg mb-3 font-arabic text-pink-700">
              وَمَن تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَّهُ
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic mb-3">
              "Barangsiapa yang dengan sukarela mengerjakan kebaikan, maka itu lebih baik baginya"
            </p>
            <p className="text-pink-600 text-xs font-medium">
              - QS. Al-Baqarah: 184 -
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalGift;
