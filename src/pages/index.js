import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Lenis from '@studio-freight/lenis';
import MainDesktop from '../components/MainDesktop';
import MainMobile from '../components/MainMobile';
import CustomHead from '../components/CustomHead';

const ProgressBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
      src: '/images/1.jpg',
    },
    {
      id: 2,
      ref: useRef(null),
      title: 'Second',
      src: '/images/2.jpg',
    },
    {
      id: 3,
      ref: useRef(null),
      title: 'Third',
      src: '/images/3.jpg',
    },
    {
      id: 4,
      ref: useRef(null),
      title: 'Fourth',
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
        <ProgressBar>
          {refs.map((el, i) => (
            <Bar $isActive={i === activeElement} key={i} />
          ))}
        </ProgressBar>
      </main>
    </>
  );
}
