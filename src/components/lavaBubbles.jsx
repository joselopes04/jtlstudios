import React, { useEffect, useRef, useState } from 'react';
function LavaBubbles() {
    const circle1Ref = useRef();
    const circle2Ref = useRef();
    const circle3Ref = useRef();
    const circle4Ref = useRef();
    const circle5Ref = useRef();
    const circle6Ref = useRef();
    const circle7Ref = useRef();
    const circle8Ref = useRef();
    const circle9Ref = useRef();
    const circle10Ref = useRef();

    const [circles, setCircles] = useState({
        circle1: {x: Math.random()*1000 ,y: Math.random()*1000, xSpeed: 0.2, ySpeed: 0.34, radius: Math.random() * 140+60 },
        circle2: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: -0.5, ySpeed: 0.5, radius: Math.random() * 90+50 },
        circle3: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: 0.3, ySpeed: 0.6, radius: Math.random() * 120+50 },
        circle4: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: -0.1, ySpeed: 0.6, radius: Math.random() * 110+40 },
        circle5: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: -0.2, ySpeed: 0.3, radius: Math.random() * 140+50 },
        circle6: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: -0.6, ySpeed: 0.3, radius: Math.random() * 170+30 },
        circle7: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: 0.7, ySpeed: 0.31, radius: Math.random() * 170+40 },
        circle8: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: -0.1, ySpeed: 0.5, radius: Math.random() * 110+40 },
        circle9: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: -0.8, ySpeed: 0.2, radius: Math.random() * 130+50 },
        circle10: {x: Math.random()*1000,y: Math.random()*1000, xSpeed: 0.2, ySpeed: 0.1, radius: Math.random() * 120+30 },
    });

    const bounds = {
        minX: -150,
        minY: -150,
        maxX: window.innerWidth + 100,
        maxY: window.innerHeight -100,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateCircles();
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const updateCircles = () => {
        setCircles((prevCircles) => {
            const updatedCircles = { ...prevCircles };
            Object.keys(updatedCircles).forEach((circleKey) => {
                const circle = updatedCircles[circleKey];
                circle.x += circle.xSpeed;
                circle.y += circle.ySpeed;

                if (circle.x < bounds.minX) {
                    circle.x = bounds.minX + Math.random() * 10;
                    circle.xSpeed = Math.abs(circle.xSpeed);
                } else if (circle.x > bounds.maxX) {
                    circle.x = bounds.maxX - Math.random() * 10;
                    circle.xSpeed = -Math.abs(circle.xSpeed);
                }

                if (circle.y < bounds.minY) {
                    circle.y = bounds.minY + Math.random() * 10;
                    circle.ySpeed = Math.abs(circle.ySpeed);
                } else if (circle.y > bounds.maxY) {
                    circle.y = bounds.maxY - Math.random() * 10;
                    circle.ySpeed = -Math.abs(circle.ySpeed);
                }
            });

            return updatedCircles;
        });
    };

    return (
            <div className="metaballs">
                <svg className="left-0 metasvg sm:-left-5">
                    <defs>
                        <filter id="gooify" width="400%" x="-10%" height="400%" y="-150%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -10" />
                        </filter>

                        <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff8800" />
                            <stop offset="100%" stopColor="#c11212" />
                        </linearGradient>
                    </defs>

                    <g filter="url(#gooify)">
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle1Ref}
                            cx={circles.circle1.x}
                            cy={circles.circle1.y}
                            r={circles.circle1.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle2Ref}
                            cx={circles.circle2.x}
                            cy={circles.circle2.y}
                            r={circles.circle2.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle3Ref}
                            cx={circles.circle3.x}
                            cy={circles.circle3.y}
                            r={circles.circle3.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle4Ref}
                            cx={circles.circle4.x}
                            cy={circles.circle4.y}
                            r={circles.circle4.radius}
                        />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle5Ref}
                            cx={circles.circle5.x}
                            cy={circles.circle5.y}
                            r={circles.circle5.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle6Ref}
                            cx={circles.circle6.x}
                            cy={circles.circle6.y}
                            r={circles.circle6.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle7Ref}
                            cx={circles.circle7.x}
                            cy={circles.circle7.y}
                            r={circles.circle7.radius} />
                         {/* <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle8Ref}
                            cx={circles.circle8.x}
                            cy={circles.circle8.y}
                            r={circles.circle8.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle9Ref}
                            cx={circles.circle9.x}
                            cy={circles.circle9.y}
                            r={circles.circle9.radius} />
                        <circle
                            className="blobb glow"
                            fill="url(#lavaGradient)"
                            ref={circle10Ref}
                            cx={circles.circle10.x}
                            cy={circles.circle10.y}
                            r={circles.circle10.radius} /> */}
                    </g>
                </svg>
            </div>
    );
}
export default LavaBubbles;