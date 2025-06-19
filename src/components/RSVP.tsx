
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface RSVPProps {
  guestName: string;
}

const RSVP = ({ guestName }: RSVPProps) => {
  const [formData, setFormData] = useState({
    name: guestName || '',
    attendance: '',
    guestCount: '1',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "RSVP Berhasil!",
        description: "Terima kasih telah mengkonfirmasi kehadiran Anda.",
      });
      
      // Reset form if needed
      setFormData(prev => ({ ...prev, message: '' }));
    }, 1000);
  };

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-xl text-slate-600">
            Mohon konfirmasi kehadiran Anda pada acara kami
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 shadow-lg border border-rose-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Masukkan nama lengkap"
                  required
                  className="bg-white/80 border-rose-200 focus:border-rose-400"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attendance: 'hadir' }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.attendance === 'hadir'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white hover:border-green-300'
                    }`}
                  >
                    ✓ Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attendance: 'tidak-hadir' }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.attendance === 'tidak-hadir'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 bg-white hover:border-red-300'
                    }`}
                  >
                    ✗ Tidak Hadir
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {formData.attendance === 'hadir' && (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Jumlah Tamu
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                    className="w-full p-3 rounded-xl border border-rose-200 bg-white/80 focus:border-rose-400 focus:outline-none"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5">5 Orang</option>
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ucapan & Doa (Opsional)
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tuliskan ucapan selamat dan doa untuk kami..."
                  rows={4}
                  className="bg-white/80 border-rose-200 focus:border-rose-400"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!formData.name || !formData.attendance || isSubmitting}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
