import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from '@/components/Hero';
import Second from '@/components/Second';
import Third from '@/components/Third';
import Fourth from '@/components/Fourth';

export default function Home() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [myLenis, setMyLenis] = useState({});
  const [startY,setStartY] = useState(null);
  let isScrollingTimer = null;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
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

  function handleWheel(event) {
    event.stopPropagation();
    runLenis();
    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);
    isScrollingTimer = setTimeout(() => {
      const direction = event.deltaY > 0 ? 'down' : 'up';

      const currentIndex = refs.findIndex((ref) => ref.current.classList.contains('active'));
      if (currentIndex === -1) return;

      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0 || nextIndex >= refs.length) return;

      refs[currentIndex].current.classList.remove('active');
      refs[nextIndex].current.classList.add('active');
      myLenis.scrollTo(refs[nextIndex].current, { duration: 0 });
    }, 150);
  }

  const handleTouchStart = (event) => {
    setStartY(event.changedTouches[0].clientY);
  }

  const handleTouchEnd = (event) => {
    event.stopPropagation();
    runLenis();
    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);
    isScrollingTimer = setTimeout(() => {
      const endY = event.changedTouches[0].clientY
      const direction = endY < startY ? 'down' : 'up';

      const currentIndex = refs.findIndex((ref) => ref.current.classList.contains('active'));
      if (currentIndex === -1) return;

      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0 || nextIndex >= refs.length) return;

      refs[currentIndex].current.classList.remove('active');
      refs[nextIndex].current.classList.add('active');
      myLenis.scrollTo(refs[nextIndex].current, { duration: 0 });
    }, 150);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" onWheel={(e) => handleWheel(e)}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}>
        <Hero ref={refs[0]}/>
        <Second ref={refs[1]}/>
        <Third ref={refs[2]}/>
        <Fourth ref={refs[3]}/>
      </main>
    </>
  );
}
