import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;
`;

const Socials = styled.div`
    display: flex;
    gap: 20px;
`;

const SocialIcon = styled.img`
    width: 80px;
    height: 80px;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;

const SocialLink = styled.a`
    text-decoration: none;
`;

const Contacts = () => {
  return (
    <Wrapper>
        <SectionTitle>Contacts</SectionTitle>
        <Socials>
            <SocialLink target='_blank' href='https://github.com/K4mino'>
                <SocialIcon src="/icons/github.png" alt="github" />
            </SocialLink>
            <SocialLink target='_blank' href='https://www.linkedin.com/in/yerzhann/'>
                <SocialIcon src="/icons/linkedin.png" alt="linkedin" />
            </SocialLink>
            <SocialLink target='_blank' href='https://t.me/hokage668'>
                <SocialIcon src="/icons/telegram.png" alt="telegram" />
            </SocialLink>
            <SocialLink target='_blank' href='mailto:erzhan.kz1923@gmail.com'>
                <SocialIcon src="/icons/gmail.png" alt="gmail" />
            </SocialLink>
        </Socials>
    </Wrapper>
  )
}

export default Contacts