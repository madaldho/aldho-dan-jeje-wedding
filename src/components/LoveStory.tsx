
const LoveStory = () => {
  const stories = [
    {
      year: '2020',
      title: 'Pertemuan Pertama',
      description: 'Kami bertemu pertama kali di kampus saat acara orientasi mahasiswa. Siapa sangka pertemuan singkat itu akan menjadi awal dari kisah cinta yang indah.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2021',
      title: 'Teman Dekat',
      description: 'Dari teman sekelas, kami mulai sering menghabiskan waktu bersama. Berbagi cerita, impian, dan mulai merasakan ada yang istimewa di antara kami.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2022',
      title: 'Jadian',
      description: 'Akhirnya Andi memberanikan diri untuk menyatakan perasaannya. Sari menerima dengan senang hati, dan sejak saat itu kami resmi menjadi sepasang kekasih.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2024',
      title: 'Lamaran',
      description: 'Setelah menjalin hubungan yang serius, Andi melamar Sari di tempat pertama kali mereka bertemu. Moment yang sangat berkesan dan penuh haru.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="love-story" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Kisah Cinta Kami
          </h2>
          <p className="text-xl text-slate-600">
            Perjalanan indah menuju jenjang pernikahan
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  {story.year}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  {story.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
