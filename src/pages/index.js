import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Lenis from '@studio-freight/lenis';
import MainPc from '../components/MainPc';
import MainMobile from '../components/MainMobile';

const ProgressBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 30px;
  height: auto;
  top: 50%;
  right: 20px;
  z-index: 999;
`;

const Bar = styled.div`
  width: 100%;
  background-color: #333;
  transition: all 0.5s linear;

  ${({ $isActive }) => ($isActive ? 'height:14px;' : 'height:7px;')}
`;

export default function Home() {
  const refs = [
    {
      id: 1,
      ref: useRef(null),
      title: 'First',
    },
    {
      id: 2,
      ref: useRef(null),
      title: 'Second',
    },
    {
      id: 3,
      ref: useRef(null),
      title: 'Third',
    },
    {
      id: 4,
      ref: useRef(null),
      title: 'Fourth',
    },
  ];
  const [windowSize, setWindowSize] = useState();
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
    setWindowSize(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  // Перенести main, один компонент для блоков
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        {
          windowSize > 760
            ? (
          <MainPc
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
        <ProgressBar>
          {refs.map((el, i) => (
            <Bar $isActive={i === activeElement} key={i} />
          ))}
        </ProgressBar>
      </main>
    </>
  );
}
