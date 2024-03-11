import React, { useEffect } from 'react';

const MouseEffect = () => {

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');

    const colors = [
      '#FF8800',
      '#FB8101',
      '#F77A02',
      '#F37303',
      '#EF6C04',
      '#EB6505',
      '#E75E06',
      '#E35707',
      '#DF5008',
      '#DB4909',
      '#D7420A',
      '#D33B0B',
      '#CF340C',
      '#CB2D0D',
      '#C7260E',
      '#C31F0F',
      '#BF1810',
      '#c11212'
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener('mousemove', function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });
    };
  }, []);

  return (
    <>
      {[...Array(22)].map((_, index) => (
        <div key={index} className='hidden circle sm:flex'></div>
      ))}
    </>
  );
};

export default MouseEffect;