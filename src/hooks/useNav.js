import { useEffect, useState } from "react";

const useNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    // Verifica si se ha hecho scroll más allá de una cierta cantidad (por ejemplo, 100px)
    if (window.scrollY > 10) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    // Agregar el event listener para el scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Remover el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isOpen,
    handleIsOpen,
    hasScrolled,
  };
};

export default useNav;
