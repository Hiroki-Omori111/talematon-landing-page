import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface TalematonProps {
  title?: string;
  description?: string;
}

interface ChatBubbleProps {
  text: string;
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, className }) => (
  <div className={`bg-cyan-400 rounded-xl px-4 py-2 text-white text-sm ${className}`}>
    {text}
  </div>
);

const Header: React.FC<TalematonProps> = ({
  title = "TALEMATON",
  description = "場所の「心」を見つけ出す"
}) => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side with phone mockup */}
            <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative max-w-sm mx-auto">
                {/* Phone frame */}
                <StaticImage
                  src="../images/phone-mockup.png"
                  alt="Phone mockup"
                  placeholder="blurred"
                  width={200}
                  height={200}
                />
                <img src={"./phone-mockup.png"}/>
                
                {/* Chat bubbles */}
                <div className="absolute top-1/4 left-4 right-4">
                  <ChatBubble 
                    text="思い出がうまれました！"
                    className="mb-2"
                  />
                  <ChatBubble 
                    text="今、行き交いでる人々を見つけられます"
                    className="mb-2"
                  />
                  <ChatBubble 
                    text="周辺の観光のコツ教えてもらった！"
                  />
                </div>

                {/* Jizo statues image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <StaticImage
                    src="../images/jizo-statues.jpg"
                    alt="Jizo statues"
                    className="w-3/4 rounded-lg"
                    placeholder="blurred"
                  />
                  
                </div>
              </div>
            </div>

            {/* Right side with text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl mb-8">{description}</p>
              
              {/* App store buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a href="#" className="inline-block">
                  <img 
                    src="/app-store-badge.svg" 
                    alt="Download on App Store" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img 
                    src="/google-play-badge.svg" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-cyan-400 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            TALEMATONとは
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-white text-center">
              テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;