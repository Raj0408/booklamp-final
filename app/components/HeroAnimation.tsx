'use-client';

// We are switching to useLayoutEffect for synchronous DOM operations
import { useRef, useLayoutEffect } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '../context/CartContext';

gsap.registerPlugin(ScrollTrigger);

// --- CONFIGURATION ---
// IMPORTANT: Change this to the exact number of images you have.
const FRAME_COUNT = 52; 
const IMAGE_PATH_PREFIX = '/frames/ezgif-frame-'; // The folder and name prefix
const IMAGE_FILE_TYPE = '.jpg'; // The file type
// --- END CONFIGURATION ---
const HeroAnimation = () => {
  const { view } = useCart();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const images: HTMLImageElement[] = [];
    const currentFrame = (index: number) => 
      `${IMAGE_PATH_PREFIX}${(index + 1).toString().padStart(3, '0')}${IMAGE_FILE_TYPE}`;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    
    images[0].onload = () => {
      context.drawImage(images[0], 0, 0, canvas.width, canvas.height);

      stRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: `+=${FRAME_COUNT * 50}`,
        scrub: 1.5,
        onUpdate: self => {
          const frameIndex = Math.floor(self.progress * (FRAME_COUNT - 1));
          const img = images[frameIndex];
          if (img && img.complete) {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        },
      });
    };

    return () => {
      stRef.current?.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (stRef.current) {
      if (view !== 'home') {
        stRef.current.disable(true);
      } else {
        stRef.current.enable();
      }
    }
  }, [view]);

  const isVisible = view === 'home';

  return (
    <section
      ref={containerRef}
      className={`
        transition-opacity duration-500 fixed top-0 left-0 w-screen h-screen
        ${isVisible ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'}
      `}
    >
      <canvas ref={canvasRef} className="h-full w-full object-cover" />
    </section>
  );
};

export default HeroAnimation;