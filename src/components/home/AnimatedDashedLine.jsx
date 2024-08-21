// AnimatedDashedLine.js
import { useEffect, useState, useRef } from 'react';

const AnimatedDashedLine = () => {
    const [offset, setOffset] = useState(0);
    const lineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (lineRef.current) {
                const rect = lineRef.current.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                const lineHeight = rect.height;
                const offset = Math.max(0, Math.min(1, (viewHeight - rect.top) / lineHeight));
                setOffset(offset * 100); // 100 is a scale factor for visibility
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial offset
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            <svg ref={lineRef} className="dashed-line" width="4" height="100vh" viewBox="0 0 4 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 0L2 1000"
                    stroke="url(#paint0_linear)"
                    strokeWidth="3"
                    strokeDasharray="12 12"
                    strokeDashoffset={-offset}
                />
                <defs>
                    <linearGradient id="paint0_linear" x1="2.5" y1="0" x2="2.5" y2="1000" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3E85F3" />
                        <stop offset="0.525" stopColor="#D81E95" />
                        <stop offset="1" stopColor="#00AA61" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default AnimatedDashedLine;
