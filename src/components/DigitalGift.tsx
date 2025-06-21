import { Button } from '@/components/ui/button';
import { Gift, Copy, CreditCard, Smartphone, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DigitalGift = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const { toast } = useToast();
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const accounts = [
    {
      id: 'bsi',
      bank: 'Bank BSI',
      name: 'NUR AZIZAH',
      number: '7140285972',
      icon: CreditCard,
      color: 'from-yellow-500 to-orange-200',
      bgGradient: 'from-rose-100 to-pink-100'
    },
    {
      id: 'dana',
      bank: 'DANA',
      name: 'Jedo',
      number: '081387013123',
      icon: Smartphone,
      color: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-100 to-orange-100'
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
    <section id="digital-gift" className="py-24 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern-rose-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-50 to-transparent"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 font-elegant gradient-text animate-shimmer">
            Amplop Digital
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16" data-aos="fade-up" data-aos-delay="100">
          {accounts.map((account) => {
            const IconComponent = account.icon;
            return (
              <div 
                key={account.id} 
                className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${account.bgGradient}`}>
                    <IconComponent className={`w-6 h-6 bg-clip-text text-transparent bg-gradient-to-r ${account.color}`} />
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-slate-700 font-elegant">{account.bank}</h3>
                </div>
                <div className="text-center bg-rose-50/60 rounded-lg p-4 my-4 border border-rose-100">
                  <p className="text-slate-600 text-sm">a/n {account.name}</p>
                  <p className="text-2xl font-bold text-slate-800 tracking-wider my-1">{account.number}</p>
                </div>
                <Button
                  onClick={() => copyToClipboard(account.number, account.id)}
                  className={`w-full bg-gradient-to-r ${account.color} hover:shadow-lg transition-all duration-300 text-white py-3 h-12 text-base font-semibold rounded-lg shadow-md`}
                >
                  <Copy className="mr-2" size={16} />
                  {copiedAccount === account.id ? 'Tersalin!' : 'Salin Rekening'}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/50 max-w-2xl mx-auto transition-all duration-500 hover:shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-md border-2 border-white/80 animate-heart-beat">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800 font-elegant gradient-text">
                Dengan Penuh Syukur
              </h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full my-2"></div>
              <p className="text-slate-600 text-base leading-relaxed max-w-prose mx-auto">
                Kehadiran dan untaian doa restu dari Bapak/Ibu/Saudara/i adalah anugerah terindah yang tak ternilai bagi kami.
                <br className="hidden md:block" />
                Terima kasih dari hati yang terdalam atas segala bentuk perhatian dan kasih sayang yang telah diberikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGift;
