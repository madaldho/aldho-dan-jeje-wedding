
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Copy, CreditCard, Smartphone, Heart } from 'lucide-react';
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
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'mandiri',
      bank: 'Bank Mandiri',
      name: 'Jeje Cantika',
      number: '0987654321',
      icon: CreditCard,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'dana',
      bank: 'DANA',
      name: 'Aldho & Jeje',
      number: '081234567890',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500'
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
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Gift className="text-pink-300" size={20} />
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
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Gift className="w-12 h-12 text-pink-500 mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-elegant">
            Kado Digital
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Doa restu Anda adalah kado terindah bagi kami. Namun jika ingin memberikan kado, 
            kami menyediakan amplop digital berikut:
          </p>
        </motion.div>

        <div className="space-y-4">
          {accounts.map((account, index) => {
            const Icon = account.icon;
            
            return (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="relative overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${account.color} opacity-10`} />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${account.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {account.bank}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {account.name}
                          </p>
                          <p className="font-mono text-lg font-bold text-gray-800 mt-1">
                            {account.number}
                          </p>
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => copyToClipboard(account.number, account.id)}
                        className={`bg-gradient-to-r ${account.color} hover:shadow-lg transition-all duration-300 text-white rounded-xl`}
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl border border-pink-200"
        >
          <div className="text-center">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <p className="text-gray-700 text-sm leading-relaxed">
              "Barangsiapa yang memberikan kebaikan kepada saudaranya, 
              maka Allah akan memberikan kebaikan kepadanya."
            </p>
            <p className="text-pink-600 text-xs mt-2 font-medium">
              - HR. Muslim -
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalGift;
