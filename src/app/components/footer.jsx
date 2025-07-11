import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              <a href="https://github.com/EduardoVizicato" target="_blank" rel="noopener noreferrer">
                <img aria-hidden src="/github.svg" alt="github icon" width={16} height={16} /> 
              </a>
      
              <a href="" target="_blank" rel="noopener noreferrer">
                <img aria-hidden src="/linkedin.svg" alt="linkedin icon" width={16} height={16} />
              </a>
      </footer>
    </>
  );
};

export default Footer;