import { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateButton = () => {
      setShowButton(window.scrollY > 300);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateButton);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 w-10 h-10 bg-lightGray backdrop-blur-md border border-lightGray shadow-2xl 
        rounded-full flex items-center justify-center text-black hover:bg-white transition-all duration-500 ease-out z-50 ${showButton
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <BsArrowUp className="w-5 h-5" />
    </button>
  );
}
