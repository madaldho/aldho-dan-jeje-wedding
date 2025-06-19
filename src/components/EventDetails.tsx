
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const EventDetails = () => {
  const handleSaveToCalendar = () => {
    // Google Calendar implementation
    const startDate = '20241225T100000Z';
    const endDate = '20241225T140000Z';
    const title = 'Pernikahan Andi & Sari';
    const location = 'Gedung Serbaguna, Jakarta';
    const details = 'Acara Pernikahan Andi & Sari';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(details)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleOpenMaps = () => {
    window.open('https://maps.google.com/?q=Gedung+Serbaguna+Jakarta', '_blank');
  };

  return (
    <section id="event-details" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Detail Acara
          </h2>
          <p className="text-xl text-slate-600">
            Informasi lengkap acara pernikahan kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Akad Nikah */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-lg border border-rose-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-rose-700 mb-2">Akad Nikah</h3>
              <div className="w-16 h-1 bg-rose-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-rose-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Rabu, 25 Desember 2024</p>
                  <p className="text-slate-600">10:00 - 12:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-rose-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Masjid Agung</p>
                  <p className="text-slate-600">Jl. Sudirman No. 123, Jakarta Pusat</p>
                </div>
              </div>
              
              <Button
                onClick={handleOpenMaps}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat Lokasi
              </Button>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-amber-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-700 mb-2">Resepsi</h3>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-amber-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Rabu, 25 Desember 2024</p>
                  <p className="text-slate-600">18:00 - 22:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Gedung Serbaguna</p>
                  <p className="text-slate-600">Jl. Merdeka No. 456, Jakarta Selatan</p>
                </div>
              </div>
              
              <Button
                onClick={handleOpenMaps}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat Lokasi
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Dress Code</h4>
            <p className="text-lg text-slate-600 mb-6">
              Batik atau Formal (Hindari warna putih dan krem)
            </p>
            
            <Button
              onClick={handleSaveToCalendar}
              className="bg-blue-600 hover:bg-blue-700 text-white"
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
