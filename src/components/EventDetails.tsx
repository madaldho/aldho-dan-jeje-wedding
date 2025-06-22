import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Flower, Heart, Navigation } from 'lucide-react';
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
    <section id="event-details" className="py-24 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern-rose-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-50 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 font-elegant gradient-text animate-shimmer">
            Detail Acara
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dengan penuh sukacita, kami mengundang Anda untuk hadir dalam momen bahagia kami
          </p>
        </div>

        {/* Premium Event Cards */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto mb-20">
          {/* Akad Nikah Card */}
          <div className="group transform transition-all duration-700 hover:scale-[1.02] animate-fadeInLeft">
            <div className="relative p-8 md:p-12 h-full">
              {/* Premium glass morphism background */}
              <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 rounded-3xl border border-white/60 shadow-[0_0_60px_rgba(244,63,94,0.25)]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-pink-500/3 to-orange-500/5 rounded-3xl"></div>
              
              <div className="text-center relative z-10">
                <div className="relative inline-block mb-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="relative bg-white/80 p-6 rounded-full shadow-lg">
                    <Calendar className="w-12 h-12 text-rose-500" />
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-elegant">Akad Nikah & Resepsi</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-8"></div>
                
                <div className="space-y-4 text-lg md:text-xl text-gray-800 font-medium">
                  <p className="font-bold text-rose-700 text-2xl">Minggu, 13 Juli 2025</p>
                  <p>Pukul 11:00 WIB - Selesai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi Card */}
          <div className="group transform transition-all duration-700 hover:scale-[1.02] animate-fadeInRight">
            <div className="relative p-8 md:p-12 h-full">
              {/* Premium glass morphism background */}
              <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 rounded-3xl border border-white/60 shadow-[0_0_60px_rgba(251,113,133,0.25)]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/3 to-rose-500/5 rounded-3xl"></div>
              
              <div className="text-center relative z-10">
                <div className="relative inline-block mb-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="relative bg-white/80 p-6 rounded-full shadow-lg">
                    <MapPin className="w-12 h-12 text-orange-500" />
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-elegant">Lokasi</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full mb-8"></div>
                
                <div className="space-y-3 text-lg md:text-xl text-gray-800 font-medium">
                  <p className="font-bold text-orange-700 text-2xl">Rumah Mempelai Wanita</p>
                  <p>Dusun IV RT 03/07 Desa Dukuh</p>
                  <p>Kec. Kapetakan, Kab. Cirebon</p>
                  <p>Jawa Barat 45152</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Map & Actions Section */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 rounded-3xl border border-white/70 shadow-[0_0_80px_rgba(244,63,94,0.3)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/3 via-pink-500/2 to-orange-500/3 rounded-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 mb-10 transform hover:scale-[1.02] transition-transform duration-500">
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <ShinyButton
                onClick={handleOpenMaps}
                className="w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white 
                py-4 px-6 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl
                transition-all duration-300 ease-in-out transform hover:-translate-y-1
                flex items-center justify-center gap-3"
              >
                <Navigation className="w-6 h-6" />
                Buka di Google Maps
              </ShinyButton>
              
              <ShinyButton
                onClick={handleSaveToCalendar}
                className="w-full bg-white/90 hover:bg-white text-rose-600 border border-rose-200 shadow-sm 
                py-4 px-6 text-lg font-bold rounded-2xl hover:shadow-md
                transition-all duration-300 ease-in-out transform hover:-translate-y-1
                flex items-center justify-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Simpan di Kalender
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
