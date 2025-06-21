
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp_responses')
        .select('id, name, message, created_at')
        .not('message', 'is', null)
        .not('message', 'eq', '')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setWishes(data || []);
    } catch (error) {
      console.error('Error fetching wishes:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const displayedWishes = wishes.slice(0, displayCount);

  if (loading) {
    return (
      <section id="wishes" className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-6 text-slate-600 text-lg">Memuat ucapan...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="wishes" className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="text-purple-300" size={16} />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-full shadow-lg">
              <MessageCircle className="text-white" size={36} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 font-elegant">
            Ucapan & Doa
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Ucapan selamat dari keluarga dan teman-teman
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {wishes.length === 0 ? (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-200">
              <MessageCircle className="mx-auto mb-6 text-purple-400" size={64} />
              <p className="text-xl text-slate-600 mb-3">Belum ada ucapan yang diterima.</p>
              <p className="text-base text-slate-500">Jadilah yang pertama memberikan ucapan!</p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:gap-6">
                {displayedWishes.map((wish, index) => (
                  <div 
                    key={wish.id}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-purple-100 animate-fade-in hover:shadow-xl transition-all duration-300 hover:scale-102"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {wish.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-6">
                          <h4 className="font-semibold text-slate-800 text-lg">{wish.name}</h4>
                          <p className="text-sm text-slate-500">
                            {new Date(wish.created_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <Heart className="text-purple-400 flex-shrink-0" size={24} />
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
                      <p className="text-slate-700 leading-relaxed italic text-lg">
                        "{wish.message}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {displayCount < wishes.length && (
                <div className="text-center mt-16">
                  <button 
                    onClick={loadMore}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  >
                    Muat Lebih Banyak ({wishes.length - displayCount} lagi)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishes;
