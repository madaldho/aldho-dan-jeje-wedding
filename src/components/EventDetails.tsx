
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Flower } from 'lucide-react';

const EventDetails = () => {
  const handleSaveToCalendar = () => {
    const startDate = '20250713T110000Z';
    const endDate = '20250713T150000Z';
    const title = 'Pernikahan Aldho & Jeje';
    const location = 'Masjid Agung Cirebon';
    const details = 'Acara Pernikahan Aldho & Jeje';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(details)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleOpenMaps = (location: string) => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <section id="event-details" className="py-16 bg-gradient-to-br from-white via-rose-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Flower className="text-rose-500 animate-pulse" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 font-elegant">
            Detail Acara
          </h2>
          <p className="text-lg text-slate-600">
            Informasi lengkap acara pernikahan kami
          </p>
        </div>

        <div className="space-y-8 max-w-lg mx-auto">
          {/* Akad Nikah */}
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6 shadow-lg border border-rose-200 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-rose-700 mb-2 font-elegant">Akad Nikah</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center bg-white/50 rounded-2xl p-4">
                <Calendar className="w-6 h-6 text-rose-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Minggu, 13 Juli 2025</p>
                  <p className="text-slate-600 text-sm">11:00 - 12:30 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white/50 rounded-2xl p-4">
                <MapPin className="w-6 h-6 text-rose-600 mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800">Masjid Agung Cirebon</p>
                  <p className="text-slate-600 text-sm break-words">Jl. Lemahwungkuk No.1, Cirebon</p>
                </div>
              </div>
              
              <Button
                onClick={() => handleOpenMaps('Masjid Agung Cirebon')}
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white rounded-2xl"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat Lokasi
              </Button>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 shadow-lg border border-amber-200 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-amber-700 mb-2 font-elegant">Resepsi</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center bg-white/50 rounded-2xl p-4">
                <Calendar className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Minggu, 13 Juli 2025</p>
                  <p className="text-slate-600 text-sm">18:00 - 22:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white/50 rounded-2xl p-4">
                <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800">Gedung Serbaguna Cirebon</p>
                  <p className="text-slate-600 text-sm break-words">Jl. Tuparev No.456, Cirebon</p>
                </div>
              </div>
              
              <Button
                onClick={() => handleOpenMaps('Gedung Serbaguna Cirebon')}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-2xl"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat Lokasi
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 max-w-md mx-auto shadow-lg border border-white/50">
            <h4 className="text-xl font-bold text-slate-800 mb-4 font-elegant">Dress Code</h4>
            <p className="text-base text-slate-600 mb-6">
              Batik atau Formal
            </p>
            <p className="text-sm text-slate-500 mb-6">
              (Mohon hindari warna putih dan krem)
            </p>
            
            <Button
              onClick={handleSaveToCalendar}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Simpan ke Kalender
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
