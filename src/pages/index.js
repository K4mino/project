import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import MainDesktop from '../components/MainDesktop';
import MainMobile from '../components/MainMobile';
import CustomHead from '../components/CustomHead';

export default function Home() {
  const refs = [
    {
      id: 1,
      ref: useRef(null),
      title: 'Desktop',
      src: '/images/1.jpg',
    },
    {
      id: 2,
      ref: useRef(null),
      title: 'Web',
      src: '/images/2.jpg',
    },
    {
      id: 3,
      ref: useRef(null),
      title: 'Mobile',
      src: '/images/3.jpg',
    },
    {
      id: 4,
      ref: useRef(null),
      title: 'About us',
      src: '/images/4.jpg',
    },
    {
      id: 5,
      ref: useRef(null),
      title: 'Portfolio',
      src: '/images/4.jpg',
    },
    {
      id: 6,
      ref: useRef(null),
      title: 'Pricing',
      src: '/images/4.jpg',
    },
  ];
  const [windowWidth, setWindowWidth] = useState(0);
  const [myLenis, setMyLenis] = useState({});
  const [startY, setStartY] = useState(null);
  const [activeElement, setActiveElement] = useState(0);
  const isScrollingTimer = null;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      wheelMultiplier: 1,
      smoothTouch: true,
      normalizeWheel: true,
    });
    setMyLenis(lenis);
  }, []);

  const runLenis = () => {
    function raf(time) {
      myLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <CustomHead/>
      <main className="main">
        {
          windowWidth > 960
            ? (
          <MainDesktop
          refs={refs}
          lenis={myLenis}
          runLenis={runLenis}
          setActiveElement={setActiveElement}
          isScrollingTimer={isScrollingTimer}
          activeElement={activeElement}
          />
            ) : (
          <MainMobile
          refs={refs}
          lenis={myLenis}
          runLenis={runLenis}
          setActiveElement={setActiveElement}
          isScrollingTimer={isScrollingTimer}
          activeElement={activeElement}
          startY={startY}
          setStartY={setStartY}
          />
            )
        }
      </main>
    </>
  );
}
