import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import MainDesktop from '../components/MainDesktop';
import MainMobile from '../components/MainMobile';
import CustomHead from '../components/CustomHead';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
export default function Home() {
  const refs = [
    {
      id: 1,
      ref: useRef(null),
      title: 'Intro',
      block:<Intro/>
    },
    {
      id: 2,
      ref: useRef(null),
      title: 'About',
      block: <About/>
    },
    {
      id: 3,
      ref: useRef(null),
      title: 'Projects',
      block: <Projects/>
    },
    {
      id: 4,
      ref: useRef(null),
      title: 'Contacts',
      block: <Contacts/>
    }
  ];
  const [windowWidth, setWindowWidth] = useState(0);
  const [myLenis, setMyLenis] = useState({});
  const [startY, setStartY] = useState(null);
  const [activeElement, setActiveElement] = useState(0);
  const isScrollingTimer = useRef(null);
  const [isLoadingGeneric, setIsLoadingGeneric] = useState(false);

  useEffect(() => {
    setIsLoadingGeneric(true);
    setTimeout(() => {
      setIsLoadingGeneric(false);
    }, 2000);
  }, []);

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
      <main className={"main"}>
        {
          windowWidth > 960
            ? (
          <MainDesktop
          isLoadingGeneric={isLoadingGeneric}
          setIsLoadingGeneric={setIsLoadingGeneric}
          refs={refs}
          lenis={myLenis}
          runLenis={runLenis}
          setActiveElement={setActiveElement}
          isScrollingTimer={isScrollingTimer.current}
          activeElement={activeElement}
          />
            ) : (
          <MainMobile
          isLoadingGeneric={isLoadingGeneric}
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
