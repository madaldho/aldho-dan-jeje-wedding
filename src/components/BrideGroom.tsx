
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Flower, Instagram, MapPin } from 'lucide-react';

const BrideGroom = () => {
  const bride = {
    name: "Jessica Amelia",
    fullName: "Jessica Amelia Putri",
    nickname: "Jeje",
    parents: "Putri dari Bapak Budi Santoso & Ibu Dewi Sari",
    image: "https://images.unsplash.com/photo-1494790108755-2616c27de5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    instagram: "@jeje_cantika",
    location: "Jakarta"
  };

  const groom = {
    name: "Aldho Ramadhan",
    fullName: "Aldho Ramadhan Putra",
    nickname: "Aldho",
    parents: "Putra dari Bapak Ahmad Wijaya & Ibu Siti Nurhaliza",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    instagram: "@aldho_rama",
    location: "Cirebon"
  };

  return (
    <section id="bride-groom" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="text-pink-300" size={16} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Heart className="w-12 h-12 text-pink-500 mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-elegant">
            Mempelai
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Dengan rahmat Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/20 backdrop-blur-xl">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-orange-500/10" />
              
              <CardContent className="p-6 relative">
                <div className="text-center">
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                      <img 
                        src={groom.image} 
                        alt={groom.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-2">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 font-elegant">
                      {groom.name}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      ({groom.nickname})
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {groom.parents}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <div className="flex items-center space-x-1 text-pink-600">
                        <Instagram className="w-4 h-4" />
                        <span className="text-sm">{groom.instagram}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-orange-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{groom.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Heart Divider */}
          <motion.div
            className="flex items-center justify-center py-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-3"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-300"></div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/20 backdrop-blur-xl">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10" />
              
              <CardContent className="p-6 relative">
                <div className="text-center">
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                      <img 
                        src={bride.image} 
                        alt={bride.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-2">
                      <Flower className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 font-elegant">
                      {bride.name}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      ({bride.nickname})
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {bride.parents}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <div className="flex items-center space-x-1 text-pink-600">
                        <Instagram className="w-4 h-4" />
                        <span className="text-sm">{bride.instagram}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-orange-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{bride.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30"
        >
          <div className="text-center">
            <div className="text-lg mb-3 font-arabic text-pink-700">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجاً لِّتَسْكُنُوا إِلَيْهَا
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
            </p>
            <p className="text-pink-600 text-xs mt-2 font-medium">
              - QS. Ar-Rum: 21 -
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrideGroom;
