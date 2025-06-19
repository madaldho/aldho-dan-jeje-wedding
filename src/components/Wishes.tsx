
import { useState, useEffect } from 'react';

interface Wish {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: 1,
      name: 'Sarah & Ahmad',
      message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma.',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Keluarga Besar Wijaya',
      message: 'Congratulations untuk Andi & Sari! Semoga pernikahan kalian dipenuhi kebahagiaan dan keberkahan selalu.',
      date: '2024-01-14'
    },
    {
      id: 3,
      name: 'Teman Kuliah',
      message: 'Finally! Akhirnya kalian menikah juga. Selamat ya, semoga langgeng sampai kakek nenek nanti!',
      date: '2024-01-13'
    }
  ]);

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
          <div className="space-y-6">
            {wishes.map((wish, index) => (
              <div 
                key={wish.id}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade-in hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {wish.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-800">{wish.name}</h4>
                      <p className="text-sm text-slate-500">
                        {new Date(wish.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
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
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
