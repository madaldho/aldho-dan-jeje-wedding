import { Card, CardContent } from '@/components/ui/card';
import { Heart, Flower, MapPin } from 'lucide-react';

const BrideGroom = () => {
  const bride = {
    name: "Nur Azizah, S.Pd.",
    fullName: "Nur Azizah, S.Pd.",
    nickname: "Jeje",
    parents: "Putri dari Bpk. Tahudin, S.Pd.SD. & Ibu Nur Fathiya",
    image: "/jeje.webp",
    
    
  };

  const groom = {
    name: "Muhamad Ali Ridho, S.Pd.",
    fullName: "Muhamad Ali Ridho, S.Pd.",
    nickname: "Aldho",
    parents: "Putra dari Bpk. Ahmad Muhtar, S.Pd.I. & Ibu Nuraeni, S.Pd.I.",
    image: "/aldho (2).webp",
   
  };
  return (
    <section id="bride-groom" className="py-24 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern-rose-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-50 to-transparent"></div>
      <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 font-elegant gradient-text animate-shimmer">
            Mempelai
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dengan ridho dan rahmat Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan kami.
          </p>
        </div>        {/* Premium Bride & Groom Cards */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto mb-20">
          {/* Groom Card - Luxury Design */}
          <div className="group transform transition-all duration-700 hover:scale-[1.02] animate-fadeInLeft">            <div className="relative p-8 md:p-12 h-full">
              {/* Premium glass morphism background with better contrast */}
              <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 rounded-3xl border border-white/60 shadow-[0_0_60px_rgba(244,63,94,0.25)]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-pink-500/3 to-orange-500/5 rounded-3xl"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
              
              <div className="text-center relative z-10">
                {/* Premium photo frame */}
                <div className="relative inline-block mb-10 group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-white/80 shadow-[0_0_40px_rgba(244,63,94,0.3)]">
                    <img 
                      src={groom.image} 
                      alt={groom.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent"></div>
                  </div>
                  
                  {/* Luxury badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Heart className="w-6 h-6 text-white" fill="#ef4444" />
                  </div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-3 -left-3 w-3 h-3 bg-rose-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-6 right-6 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-300"></div>
                </div>
                  {/* Premium typography with better readability */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                      {groom.name}
                    </h3>
                    <p className="text-2xl md:text-3xl text-rose-700 font-bold mb-6">
                      "{groom.nickname}"
                    </p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      {groom.parents}
                    </p>
                  </div>
                  
                  {/* Decorative separator */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
                    <Flower className="text-rose-400 animate-spin-slow" size={20} />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Elegant Center Divider - Only visible on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-rose-400 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-[0_0_40px_rgba(244,63,94,0.6)] border-2 border-rose-300/50 animate-pulse-slow">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 via-pink-400/20 to-orange-400/30 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full"></div>
                  
                  {/* Beautiful gradient heart icon */}
                  <Heart className="w-8 h-8 relative z-10 text-rose-600 drop-shadow-lg animate-bounce-slow" fill="url(#heartGradient)" />
                  
                  {/* SVG gradient definition */}
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#fb7185" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Decorative sparkles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-rose-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-500"></div>
                </div>
              </div>
            </div>
          </div>          {/* Mobile Divider */}
          <div className="lg:hidden flex items-center justify-center py-12">
            <div className="flex items-center gap-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-[0_0_30px_rgba(244,63,94,0.6)] border-2 border-rose-300/50 animate-pulse">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 via-pink-400/20 to-orange-400/30 rounded-full blur-md animate-pulse-slow"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-rose-500/15 to-pink-500/15 rounded-full"></div>
                
                {/* Beautiful gradient heart icon */}
                <Heart className="w-6 h-6 relative z-10 text-rose-600 drop-shadow-md animate-bounce-slow" fill="currentColor" />
                
                {/* Small decorative sparkles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-300"></div>
              </div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
          </div>

          {/* Bride Card - Luxury Design */}
          <div className="group transform transition-all duration-700 hover:scale-[1.02] animate-fadeInRight">            <div className="relative p-8 md:p-12 h-full">
              {/* Premium glass morphism background with better contrast */}
              <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 rounded-3xl border border-white/60 shadow-[0_0_60px_rgba(251,113,133,0.25)]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/3 to-rose-500/5 rounded-3xl"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
              
              <div className="text-center relative z-10">
                {/* Premium photo frame */}
                <div className="relative inline-block mb-10 group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-white/80 shadow-[0_0_40px_rgba(251,113,133,0.3)]">
                    <img 
                      src={bride.image} 
                      alt={bride.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
                  </div>
                  
                  {/* Luxury badge */}
                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Heart className="w-6 h-6 text-white" fill="#ef4444" />
                  </div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-3 -right-3 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-6 left-6 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-300"></div>
                </div>
                  {/* Premium typography with better readability */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                      {bride.name}
                    </h3>
                    <p className="text-2xl md:text-3xl text-pink-700 font-bold mb-6">
                      "{bride.nickname}"
                    </p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 shadow-lg">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      {bride.parents}
                    </p>
                  </div>
                  
                  {/* Decorative separator */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-400"></div>
                    <Flower className="text-pink-400 animate-spin-slow" size={20} />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Luxury Quran Quote Section */}
        <div className="relative">
          {/* Ornamental top border */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-rose-400/20 blur-xl rounded-full animate-pulse-slow"></div>
                <Flower className="w-8 h-8 text-rose-500 relative z-10 animate-spin-slow" />
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
          </div>          {/* Premium quote card with enhanced readability */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 rounded-3xl border border-white/70 shadow-[0_0_80px_rgba(244,63,94,0.3)]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/3 via-pink-500/2 to-orange-500/3 rounded-3xl"></div>
            
            {/* Floating luxury elements */}
            <div className="absolute -top-6 left-1/4 w-32 h-32 bg-gradient-to-r from-rose-400/15 to-pink-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              {/* Premium quotation marks */}
              {/* <div className="flex justify-center mb-8">
                <div className="text-8xl md:text-9xl text-rose-400/60 font-serif leading-none">"</div>
              </div> */}
              
              {/* Holy verse with better contrast */}
              <div className="space-y-6">
                <p dir="rtl" className="text-2xl md:text-3xl text-gray-800 leading-loose font-serif mb-4">
                وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓ__ا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed italic max-w-4xl mx-auto">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                </p>
                <p className="text-md md:text-lg text-gray-800 font-semibold">
                  (QS. Ar-Rum: 21)
                </p>
              </div>
            </div>
          </div>
          
          {/* Ornamental bottom border */}
          <div className="flex items-center justify-center mt-12">
            <div className="flex items-center gap-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-rose-400/20 blur-xl rounded-full animate-pulse-slow delay-500"></div>
                <Flower className="w-8 h-8 text-rose-500 relative z-10 animate-spin-slow" />
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;
