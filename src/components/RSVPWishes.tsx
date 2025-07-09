import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { optimizedSupabase, fetchWishesWithCaching } from '@/integrations/supabase/seo-config';
import { Heart, Send, Users, Calendar, MessageSquare, Loader2, CheckCircle, XCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface RSVPWishesProps {
  guestName: string;
}

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const RSVPWishes = ({ guestName }: RSVPWishesProps) => {
  const [formData, setFormData] = useState({
    name: guestName || '',
    attendance: '',
    guestCount: '1',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);
  const { toast } = useToast();

  const colorGradients = [
    'from-rose-400 to-pink-400',
    'from-amber-400 to-orange-500',
    'from-sky-400 to-blue-500',
    'from-violet-500 to-purple-600',
    'from-green-400 to-teal-500',
    'from-red-500 to-rose-500',
  ];

  useEffect(() => {
    // Inisialisasi AOS hanya untuk elemen selain papan ucapan
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100
    });
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    setLoadingWishes(true);
    try {
      // Menggunakan fungsi yang dioptimalkan untuk SEO dengan caching
      const { data, error } = await fetchWishesWithCaching(10);

      if (error) throw error;
      setWishes(data || []);
    } catch (error) {
      console.error('Error fetching wishes:', error);
    } finally {
      setLoadingWishes(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.attendance) {
        toast({
            title: "Pilihan Kehadiran",
            description: "Mohon pilih status kehadiran Anda.",
            variant: "destructive"
        });
        return;
    }
    setIsSubmitting(true);

    try {
      const { error } = await optimizedSupabase
        .from('rsvp_responses')
        .insert({
          name: formData.name,
          attendance: formData.attendance,
          guest_count: parseInt(formData.guestCount),
          message: formData.message || null
        });

      if (error) throw error;

      toast({
        title: "Konfirmasi Terkirim!",
        description: "Terima kasih atas partisipasi Anda.",
      });
      
      setFormData(prev => ({ ...prev, message: '', attendance: '', guestCount: '1' }));
      fetchWishes(); // Refresh wishes list
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp-wishes" className="py-24 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern-rose-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-50 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 font-elegant gradient-text animate-shimmer">
            Kehadiran & Doa
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* RSVP Form Section */}
          <div className="mb-20">
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 font-elegant mb-8 flex items-center gap-3 justify-center">
                <Calendar className="w-8 h-8 text-rose-500" />
                Konfirmasi Kehadiran
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Nama Anda</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Tuliskan nama Anda"
                    required
                    className="bg-white/80 border-rose-200 focus:border-rose-400 focus:ring-rose-400 h-12 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-3">Apakah Anda akan hadir?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button type="button" variant="outline" onClick={() => setFormData(prev => ({ ...prev, attendance: 'hadir' }))} className={`h-12 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2 ${formData.attendance === 'hadir' ? 'bg-green-100 border-green-400 text-green-700 ring-2 ring-green-300' : 'border-gray-300 hover:bg-green-50'}`}>
                      <CheckCircle className="w-5 h-5" /> Hadir
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setFormData(prev => ({ ...prev, attendance: 'tidak-hadir' }))} className={`h-12 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2 ${formData.attendance === 'tidak-hadir' ? 'bg-red-100 border-red-400 text-red-700 ring-2 ring-red-300' : 'border-gray-300 hover:bg-red-50'}`}>
                      <XCircle className="w-5 h-5" /> Tidak Hadir
                    </Button>
                  </div>
                </div>

                {formData.attendance === 'hadir' && (
                  <div className="animate-fade-in-up">
                    <label htmlFor="guestCount" className="block text-sm font-medium text-slate-600 mb-2">Jumlah Tamu (termasuk Anda)</label>
                    <div className="flex items-center bg-white/80 rounded-lg border border-rose-200 focus-within:border-rose-400 focus-within:ring-1 focus-within:ring-rose-400">
                      <Users className="w-5 h-5 text-slate-400 mx-3" />
                      <select
                        id="guestCount"
                        value={formData.guestCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                        className="w-full h-12 bg-transparent focus:outline-none rounded-lg pl-0 pr-4"
                      >
                        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Orang</option>)}
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Ucapan & Doa</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tuliskan doa dan harapan terbaik Anda untuk kami..."
                    rows={4}
                    className="bg-white/80 border-rose-200 focus:border-rose-400 focus:ring-rose-400 rounded-lg resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-3 h-14 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Kirim Konfirmasi & Doa
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Wishes List Section */}
          <div>
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 font-elegant mb-8 flex items-center gap-3 justify-center">
                <MessageSquare className="w-8 h-8 text-rose-500" />
                Papan Ucapan
              </h3>
              {loadingWishes ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
                </div>
              ) : wishes.length > 0 ? (
                <div className="space-y-6 max-h-[500px] overflow-y-auto px-2 md:px-4 custom-scrollbar">
                  {wishes.map((wish, index) => {
                    const gradient = colorGradients[index % colorGradients.length];
                    return (
                    <div
                      key={wish.id}
                      className="bg-white/70 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-rose-100 shadow-md transition-all duration-300 hover:shadow-lg hover:border-rose-200 hover:-translate-y-1"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-0">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 border-2 border-white/80 transform transition-transform duration-300 hover:scale-110 mx-auto md:mx-0`}>
                          {wish.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="md:ml-4 flex-grow">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline text-center md:text-left">
                            <p className="font-semibold text-slate-800 text-lg">{wish.name}</p>
                            <p className="text-xs text-slate-500 mt-1 md:mt-0">
                              {new Date(wish.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                          </div>
                          <blockquote className="relative mt-3">
                            <p className="text-slate-700 text-base italic bg-rose-50/60 px-4 py-3 rounded-lg border-l-4 border-rose-200 break-words">
                              "{wish.message}"
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Heart className="w-12 h-12 text-rose-300 mx-auto mb-4" />
                  <p className="text-slate-500">Belum ada ucapan. Jadilah yang pertama!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPWishes;
