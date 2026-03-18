import './loader.css';
const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1e1e1e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  };

export function AppLoader() {
  return (
    <div style={overlayStyle}>
      <svg 
        className="spinner-svg" 
        viewBox="0 0 50 50" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeDasharray="35 100" 
        />
      </svg>       
    </div>
  )
    
}