import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
