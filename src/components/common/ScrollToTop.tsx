import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      const targetId = hash.replace('#', '');
      const scrollToSection = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      // Immediate scroll attempt
      scrollToSection();

      // Fallback timeouts in case of DOM mounting/rendering delays
      const t1 = setTimeout(scrollToSection, 100);
      const t2 = setTimeout(scrollToSection, 300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [pathname, hash]);

  return null;
}
