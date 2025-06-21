
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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

    try {
      const { error } = await supabase
        .from('rsvp_responses')
        .insert({
          name: formData.name,
          attendance: formData.attendance,
          guest_count: parseInt(formData.guestCount),
          message: formData.message || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "RSVP Berhasil!",
        description: "Terima kasih telah mengkonfirmasi kehadiran Anda.",
      });
      
      // Reset form
      setFormData(prev => ({ 
        ...prev, 
        attendance: '',
        guestCount: '1',
        message: '' 
      }));
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Gagal mengirim RSVP",
        description: "Terjadi kesalahan, silakan coba lagi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 via-pink-500/6 to-orange-500/8 animate-gradient-shift"></div>
        
        {/* Enhanced Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-rose-300/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-xl animate-bounce"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-800 font-elegant gradient-text animate-shimmer">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Mohon konfirmasi kehadiran Anda pada acara kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-3">
                <label className="block text-lg font-bold text-slate-700 gradient-text">
                  Nama Lengkap
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Masukkan nama lengkap"
                  required
                  className="bg-white/90 backdrop-blur-sm border-rose-200 focus:border-rose-400 h-14 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                />
              </div>

              {/* Attendance */}
              <div className="space-y-4">
                <label className="block text-lg font-bold text-slate-700 gradient-text">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attendance: 'hadir' }))}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 font-semibold text-lg transform hover:scale-105 ${
                      formData.attendance === 'hadir'
                        ? 'border-green-500 bg-green-50/80 backdrop-blur-sm text-green-700 shadow-lg'
                        : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-green-300 hover:bg-green-50/50 shadow-md'
                    }`}
                  >
                    ✓ Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attendance: 'tidak-hadir' }))}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 font-semibold text-lg transform hover:scale-105 ${
                      formData.attendance === 'tidak-hadir'
                        ? 'border-red-500 bg-red-50/80 backdrop-blur-sm text-red-700 shadow-lg'
                        : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-red-300 hover:bg-red-50/50 shadow-md'
                    }`}
                  >
                    ✗ Tidak Hadir
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {formData.attendance === 'hadir' && (
                <div className="space-y-3 animate-fadeInUp">
                  <label className="block text-lg font-bold text-slate-700 gradient-text">
                    Jumlah Tamu
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                    className="w-full p-4 rounded-xl border border-rose-200 bg-white/90 backdrop-blur-sm focus:border-rose-400 focus:outline-none text-lg shadow-md hover:shadow-lg transition-all duration-300"
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
              <div className="space-y-3">
                <label className="block text-lg font-bold text-slate-700 gradient-text">
                  Ucapan & Doa (Opsional)
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tuliskan ucapan selamat dan doa untuk kami..."
                  rows={5}
                  className="bg-white/90 backdrop-blur-sm border-rose-200 focus:border-rose-400 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={!formData.name || !formData.attendance || isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 hover:from-rose-700 hover:via-pink-700 hover:to-orange-700 text-white py-6 text-xl font-bold rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-rose-500/30 hover:border-rose-400 hover:shadow-2xl hover:shadow-rose-500/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Mengirim...
                    </span>
                  ) : (
                    'Kirim Konfirmasi'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
