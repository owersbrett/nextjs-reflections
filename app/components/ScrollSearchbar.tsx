import router, { Router, useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';

const ScrollSearchBar: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const [text, setText] = useState("/");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showSearchBar && (
        <div className="p-4  fixed bottom-0 left-0 w-full z-50 bg-whit text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (inputRef.current) {
                inputRef.current.blur();
              }
              
            }}
            >
            <input
            ref={inputRef}
              type="text"
              onChange={(e)=>{
                setText(e.target.value);
              }}
              className="w-full p-2 rounded-3xl search-box"
              placeholder="$arg1 $arg2..."
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ScrollSearchBar;
