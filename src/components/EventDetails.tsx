
import { Calendar, MapPin, Flower, Navigation } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

const EventDetails = () => {
  const handleSaveToCalendar = () => {
    const startDate = '20250713T110000Z';
    const endDate = '20250713T150000Z';
    const title = 'Pernikahan Aldho & Jeje';
    const location = 'Rumah Mempelai Wanita';
    const details = 'Acara Pernikahan Aldho & Jeje';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(details)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleOpenMaps = () => {
    window.open('https://maps.app.goo.gl/rJJZujdgyCajtAZH8', '_blank');
  };

  return (
    <section id="event-details" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Floating floral elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-purple-500/6 to-indigo-500/8 animate-gradient-shift"></div>
        <Flower className="absolute top-10 left-10 text-violet-300/50 animate-float" size={28} />
        <Flower className="absolute top-32 right-16 text-purple-300/50 animate-pulse" size={24} />
        <Flower className="absolute bottom-20 left-20 text-indigo-300/50 animate-bounce" size={32} />
        <Flower className="absolute bottom-40 right-10 text-violet-300/50 animate-float" size={26} />
        <Flower className="absolute top-1/2 left-1/4 text-purple-300/30 animate-pulse" size={20} />
        <Flower className="absolute top-1/3 right-1/3 text-indigo-300/30 animate-float" size={18} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="glass-card rounded-full p-6 shadow-2xl animate-pulse">
              <Flower className="text-violet-500 animate-bounce" size={48} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-800 font-elegant gradient-text animate-shimmer">
            Detail Acara
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Dengan penuh sukacita, kami mengundang Anda untuk hadir dalam momen bahagia kami
          </p>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {/* Combined Event Card */}
          <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 transform transition-all duration-500 hover:scale-[1.02] animate-fadeInUp border border-white/40 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-elegant gradient-text animate-shimmer">Akad Nikah & Resepsi</h3>
              <div className="w-32 h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full animate-shimmer"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <div className="flex-1 backdrop-blur-xl bg-white/30 rounded-3xl p-8 hover:scale-102 transition-all duration-500 border border-white/50 shadow-xl group">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="bg-gradient-to-br from-violet-400 to-violet-600 rounded-full p-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      Minggu, 13 Juli 2025
                    </h4>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full"></div>
                    <p className="text-slate-600 text-xl font-medium tracking-wide">
                      11:00 WIB - Selesai
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 backdrop-blur-xl bg-white/30 rounded-3xl p-8 hover:scale-102 transition-all duration-500 border border-white/50 shadow-xl group">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full p-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      Rumah Mempelai Wanita
                    </h4>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full"></div>
                    <div className="space-y-2">
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Dusun IV RT 03/07 Desa Dukuh
                      </p>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Kec. Kapetakan, Kab. Cirebon
                      </p>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Jawa Barat 45152
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 animate-fadeInUp border border-white/40 shadow-lg" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-elegant gradient-text animate-shimmer">Lokasi Acara</h3>
              <div className="w-32 h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full animate-shimmer"></div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4840370790566!2d108.5067742!3d-6.586595399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee7bdfd085e47%3A0xdded00f038e34712!2sALGHIFARI%20TAILOR!5e0!3m2!1sid!2sid!4v1750318482502!5m2!1sid!2sid" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            
            {/* Navigation Button with Proper Alignment */}
            <div className="flex justify-center">
              <ShinyButton
                onClick={handleOpenMaps}
                className="bg-white/90 hover:bg-white text-violet-600 border border-violet-200 shadow-sm 
                py-4 px-8 text-lg font-medium rounded-2xl hover:shadow-md
                transition-all duration-300 ease-in-out
                flex items-center justify-center gap-3 min-w-[200px]"
              >
                <Navigation className="w-5 h-5 text-violet-500" strokeWidth={2} />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Buka di Google Maps
                </span>
              </ShinyButton>
            </div>
          </div>

          {/* Additional Info */}
          <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 animate-fadeInUp border border-white/40 shadow-lg" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-elegant gradient-text animate-shimmer">Informasi Tambahan</h3>
              <div className="w-32 h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full animate-shimmer"></div>
            </div>
            
            {/* Calendar Button with Proper Alignment */}
            <div className="flex justify-center">
              <ShinyButton
                onClick={handleSaveToCalendar}
                className="bg-white/90 hover:bg-white text-violet-600 border border-violet-200 shadow-sm 
                py-4 px-8 text-lg font-medium rounded-2xl hover:shadow-md
                transition-all duration-300 ease-in-out
                flex items-center justify-center gap-3 min-w-[200px]"
              >
                <Calendar className="w-5 h-5 text-violet-500" strokeWidth={2} />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Simpan ke Kalender
                </span>
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
