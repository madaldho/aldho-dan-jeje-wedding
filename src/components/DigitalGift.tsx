
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DigitalGift = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const accounts = [
    {
      bank: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'Andi Pratama',
      type: 'primary'
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'Sari Indah',
      type: 'secondary'
    }
  ];

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Berhasil disalin!",
        description: "Nomor rekening telah disalin ke clipboard.",
      });
      
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Gagal menyalin",
        description: "Silakan salin nomor rekening secara manual.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="digital-gift" className="py-20 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Kado Digital
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tanpa mengurangi rasa hormat, bagi yang ingin memberikan kado dapat melalui transfer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {accounts.map((account, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg border border-white/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    account.type === 'primary' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {account.bank}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {account.accountName}
                  </h3>
                </div>

                <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-6 mb-6">
                  <p className="text-sm text-slate-600 mb-2">Nomor Rekening</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-slate-800 tracking-wider">
                      {account.accountNumber}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(account.accountNumber, `${account.bank}-${index}`)}
                      className="ml-4 bg-white hover:bg-gray-50"
                    >
                      {copiedField === `${account.bank}-${index}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 inline-block shadow-inner">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">QR Code</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    Scan QR Code untuk transfer
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/60 backdrop-blur rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-slate-700 italic leading-relaxed">
                "Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i sudah merupakan karunia yang sangat berharga bagi kami. Namun jika memberi adalah ungkapan kasih, kami dengan senang hati menerimanya."
              </p>
              <p className="text-sm text-slate-500 mt-4">- Andi & Sari -</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGift;
