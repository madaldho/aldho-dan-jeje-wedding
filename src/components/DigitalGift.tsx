
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
      color: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      id: 'mandiri',
      bank: 'Bank Mandiri',
      name: 'Jessica Amelia',
      number: '0987654321',
      icon: CreditCard,
      color: 'from-indigo-500 to-violet-500',
      bgGradient: 'from-indigo-500/20 to-violet-500/20'
    },
    {
      id: 'dana',
      bank: 'DANA',
      name: 'Aldho & Jeje',
      number: '081234567890',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/20 to-purple-500/20'
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
    <section id="digital-gift" className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? (
              <Gift className="text-purple-300" size={18} />
            ) : (
              <Sparkles className="text-indigo-300" size={16} />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-full shadow-lg">
              <Gift className="text-white" size={36} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 font-elegant">
            Amplop Digital
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Doa restu Anda adalah hadiah yang paling berharga bagi kami. Namun jika ingin memberikan hadiah, 
            Anda dapat mengirimkannya melalui:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accounts.map((account, index) => {
            const IconComponent = account.icon;
            return (
              <Card 
                key={account.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm overflow-hidden hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${account.bgGradient} rounded-3xl p-6 mb-6 relative overflow-hidden`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`bg-gradient-to-br ${account.color} p-3 rounded-xl shadow-lg`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-600 font-medium">{account.bank}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-base font-semibold text-slate-800">{account.name}</div>
                      <div className="text-xl font-bold text-slate-900 tracking-wider">{account.number}</div>
                    </div>
                    
                    <div className="absolute top-3 right-3 opacity-10">
                      <Heart size={48} className="text-slate-600" />
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => copyToClipboard(account.number, account.id)}
                    className={`w-full bg-gradient-to-r ${account.color} hover:shadow-xl transition-all duration-300 text-white border-0 group-hover:scale-105 py-3`}
                    size="lg"
                  >
                    <Copy className="mr-3" size={18} />
                    {copiedAccount === account.id ? 'Tersalin!' : 'Salin Nomor'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 md:p-12 shadow-2xl border border-purple-200/50 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-full">
                <Heart className="text-white" size={28} />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 font-elegant">
              Terima Kasih
            </h3>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Kehadiran dan doa restu Anda sudah merupakan hadiah yang sangat berarti bagi kami. 
              Semoga Allah SWT membalas kebaikan Anda dengan berlipat ganda.
            </p>
            
            <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <div className="text-lg md:text-xl text-slate-600 italic mb-3">
                "Dan Allah akan membalas orang-orang yang bersyukur"
              </div>
              <div className="text-sm md:text-base text-slate-500">
                (QS. Ali Imran: 144)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGift;
