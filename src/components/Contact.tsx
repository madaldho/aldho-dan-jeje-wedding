
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: 'Keluarga Mempelai Pria',
      person: 'Andi Pratama',
      phone: '+62 812-3456-7890',
      instagram: '@andi.pratama'
    },
    {
      name: 'Keluarga Mempelai Wanita',
      person: 'Sari Indah',
      phone: '+62 856-7890-1234',
      instagram: '@sari.indah'
    }
  ];

  const handleWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('62') ? cleanPhone : `62${cleanPhone.substring(1)}`;
    const message = encodeURIComponent('Halo, saya ingin bertanya mengenai acara pernikahan Andi & Sari');
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  };

  const handleInstagram = (username: string) => {
    window.open(`https://instagram.com/${username.replace('@', '')}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-slate-300">
            Jika ada pertanyaan, jangan ragu untuk menghubungi kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-slate-700/50 backdrop-blur rounded-3xl p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-rose-300">
                {contact.name}
              </h3>
              <p className="text-xl font-semibold mb-6 text-white">
                {contact.person}
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <Button
                  onClick={() => handleWhatsApp(contact.phone)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-xl"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2M12.05 20.15c-1.44 0-2.83-.38-4.05-1.1l-.29-.17-3.02.79.8-2.92-.19-.3c-.79-1.25-1.21-2.72-1.21-4.25 0-4.37 3.56-7.93 7.93-7.93s7.93 3.56 7.93 7.93-3.56 7.95-7.9 7.95"/>
                  </svg>
                  WhatsApp
                </Button>

                {/* Instagram */}
                <Button
                  onClick={() => handleInstagram(contact.instagram)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg rounded-xl"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  {contact.instagram}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Wedding Hashtag */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-500/20 to-amber-500/20 backdrop-blur rounded-2xl p-8 max-w-lg mx-auto border border-white/10">
            <h4 className="text-2xl font-bold mb-4 text-rose-300">Hashtag Pernikahan</h4>
            <p className="text-3xl font-bold text-white mb-4">#AndiSariForever</p>
            <p className="text-slate-300">
              Bagikan momen bahagia Anda dengan hashtag ini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
