// DeviceType.tsx
import React, { useEffect, useState } from 'react';

const DeviceType: React.FC = () => {
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
    // Function to set device type based on window dimensions
    const setDevice = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setDeviceType('mobile');
      } else if (width > 768 && width <= 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Initial set
    setDevice();

    // Listen for window resize events
    window.addEventListener('resize', setDevice);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setDevice);
    };
  }, []);

  return (
    <div>
      <p>Device Type: {deviceType}</p>
    </div>
  );
};

export default DeviceType;
