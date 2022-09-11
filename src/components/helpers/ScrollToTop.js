// ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    console.log('scrollToTop executed')
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;