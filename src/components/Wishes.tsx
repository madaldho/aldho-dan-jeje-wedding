
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

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
      <section id="wishes" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto"></div>
            <p className="mt-4 text-slate-600">Memuat ucapan...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="wishes" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Ucapan & Doa
          </h2>
          <p className="text-xl text-slate-600">
            Ucapan selamat dari keluarga dan teman-teman
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {wishes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">Belum ada ucapan yang diterima.</p>
              <p className="text-sm text-slate-500 mt-2">Jadilah yang pertama memberikan ucapan!</p>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {displayedWishes.map((wish, index) => (
                  <div 
                    key={wish.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade-in hover:shadow-xl transition-shadow duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {wish.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-slate-800">{wish.name}</h4>
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
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed italic">
                      "{wish.message}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {displayCount < wishes.length && (
                <div className="text-center mt-12">
                  <button 
                    onClick={loadMore}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
