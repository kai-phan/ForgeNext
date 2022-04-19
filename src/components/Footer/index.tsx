import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ background: '#0a4275' }}
    >
      <div className="container p-4">
        <section className="">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h5 className="mb-3 text-uppercase">Author</h5>
              <img
                width={120}
                className="rounded-circle mb-2"
                src="/quy.jpeg"
                alt="author"
              />
              <p>Phan Vinh Quy - Civil Engineer - Software Engineer</p>
            </div>
            <div className="col-12 col-lg-4">
              <h5 className="mb-3 text-uppercase">Technologies</h5>
              <p>
                <a
                  href="https://forge.autodesk.com/"
                  className="text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Forge platform
                </a>
              </p>
              <p>
                <a
                  href="https://reactjs.org/"
                  className="text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>
              </p>
              <p>
                <a
                  href="https://nextjs.org/"
                  className="text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Next
                </a>
              </p>
              <p>
                <a
                  href="https://www.typescriptlang.org/"
                  className="text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Typescript
                </a>
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h5 className="mb-3 text-uppercase">Information</h5>
              <p>
                <a
                  href="https://github.com/phanvinhquy08/ForgeNext"
                  className="text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/vinhquy.phan"
                  className="text-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
