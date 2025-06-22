import { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlareCard } from '@/components/ui/glare-card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const videos = [
    {
      id: 1,
      title: "Video Pernikahan 1",
      url: "https://youtu.be/Eei7EZ8qktg",
      thumbnail: "https://img.youtube.com/vi/Eei7EZ8qktg/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Video Pernikahan 2",
      url: "https://youtu.be/xkhpcN6yD4s",
      thumbnail: "https://img.youtube.com/vi/xkhpcN6yD4s/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "Video Pernikahan 3",
      url: "https://youtu.be/b0o_1rjeGCM",
      thumbnail: "https://img.youtube.com/vi/b0o_1rjeGCM/maxresdefault.jpg"
    }
  ];

  return (
    <section id="video-gallery" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-indigo-500/6 to-blue-500/8 animate-gradient-shift"></div>
        
        {/* Enhanced Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/30 to-indigo-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-800 font-elegant gradient-text animate-shimmer">
            Video
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Koleksi video ucapan
          </p>
        </div>

        {/* Video Gallery */}
        <div className="glass-card p-8 md:p-12 text-center rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onClick={() => setSelectedVideo(video.url)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <div className="aspect-video relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 rounded-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/30 backdrop-blur-md rounded-full p-4 group-hover:bg-white/40 transition-all duration-300 animate-pulse">
                        <Play className="w-8 h-8 ml-1 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl cursor-default animate-in fade-in-0 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-14 right-0 text-white hover:bg-white/20 z-10 bg-black/50 backdrop-blur-sm rounded-full"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src={selectedVideo.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}  
                title="Video Pernikahan"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;