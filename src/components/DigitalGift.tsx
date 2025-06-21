
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShinyButton } from '@/components/ui/shiny-button';
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
          <div
            key={i}
            className="absolute opacity-20"
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
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-4 rounded-full shadow-lg">
              <Gift className="text-white" size={32} />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-slate-800 font-elegant">
            Amplop Digital
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Doa restu Anda adalah hadiah yang paling berharga bagi kami. Namun jika ingin memberikan hadiah, 
            Anda dapat mengirimkannya melalui:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accounts.map((account, index) => {
            const IconComponent = account.icon;
            return (
              <Card 
                key={account.id} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-br ${account.bgGradient} rounded-2xl p-4 mb-4 relative overflow-hidden`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`bg-gradient-to-br ${account.color} p-2 rounded-lg shadow-lg`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-600 font-medium">{account.bank}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-slate-800">{account.name}</div>
                      <div className="text-lg font-bold text-slate-900 tracking-wider">{account.number}</div>
                    </div>
                    
                    <div className="absolute top-2 right-2 opacity-10">
                      <Heart size={40} className="text-slate-600" />
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => copyToClipboard(account.number, account.id)}
                    className={`w-full bg-gradient-to-r ${account.color} hover:shadow-lg transition-all duration-300 text-white border-0 group-hover:scale-105`}
                    size="sm"
                  >
                    <Copy className="mr-2" size={16} />
                    {copiedAccount === account.id ? 'Tersalin!' : 'Salin Nomor'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-rose-200/50 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-3 rounded-full">
                <Heart className="text-white" size={24} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-slate-800 font-elegant">
              Terima Kasih
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Kehadiran dan doa restu Anda sudah merupakan hadiah yang sangat berarti bagi kami. 
              Semoga Allah SWT membalas kebaikan Anda dengan berlipat ganda.
            </p>
            
            <div className="text-center">
              <div className="text-sm text-slate-500 italic">
                "Dan Allah akan membalas orang-orang yang bersyukur"
              </div>
              <div className="text-xs text-slate-400 mt-1">
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
