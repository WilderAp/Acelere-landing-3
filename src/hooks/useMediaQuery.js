import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    mediaQuery.addListener(handler);

    return () => {
      mediaQuery.removeListener(handler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
