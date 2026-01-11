
import React from 'react';

interface FeaturedMediaProps {
  onPlay: () => void;
}

const FeaturedMedia: React.FC<FeaturedMediaProps> = ({ onPlay }) => {
  const rotatingText = "Welcome to NexaLaw Legal Excellence — ";
  const characters = rotatingText.split("");
  const angleStep = 360 / characters.length;

  return (
    <section className="px-8 md:px-16 pb-32 relative z-10 max-w-screen-2xl mx-auto">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden group shadow-2xl">
        <img 
          alt="Lawyers in a professional office discussion" 
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAygaxZqzLiDFO6A8jHfEALcc5hjahE7_ebDW1JzoyE34VEKpeRc38Rfeq6INEuN_buQMCA4vE8v0LBLBRDMzue922pn_qCHL7NmkfijWo5iKFQSoZiIjYQYz7T0-TFtm_vBsluRntF_pShQaLvqqwYT1D8Pr3ZMsZB-QWnhESw5Yg7XuYwBV8-e9KwRQbSGCkQbgzOP8_9ZgOlGeX8--LnIOmhGTXVLRps90w55pEAo4GkVNTeYr7rpERhaeTcZIZi8HfMsoiyJoU"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            onClick={onPlay}
            className="rotating-text-container cursor-pointer hover:scale-110 transition-transform duration-500 group/btn"
          >
            <div className="rotating-text">
              {characters.map((char, i) => (
                <span key={i} style={{ transform: `rotate(${i * angleStep}deg)` }}>
                  {char}
                </span>
              ))}
            </div>
            <span className="material-symbols-outlined text-background-dark text-5xl ml-1 group-hover/btn:scale-110 transition-transform">play_arrow</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
