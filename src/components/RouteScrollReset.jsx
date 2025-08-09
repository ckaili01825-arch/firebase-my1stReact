import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 或 'auto'
    });
  }, [pathname]);

  return null;
}

export default RouteScrollReset;