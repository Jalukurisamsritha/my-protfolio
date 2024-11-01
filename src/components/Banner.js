import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import './Banner.css'; // Ensure your CSS is styled correctly

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Software Engineer", " AI/ML DEV", " Research Intern(AI/ML)"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) }; // Clean up on unmount
  }, [text]); // Dependencies array to trigger on text change

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Samsritha Jalukuri`} 
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a computer science professional with a passion for AI, ML, and web development, seeking challenging opportunities to drive technological advancements.
                  </p>
                  <button onClick={() => window.location.href = 'mailto:jalukurisamsritha1718@gmail.com'}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Illustration"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner;
