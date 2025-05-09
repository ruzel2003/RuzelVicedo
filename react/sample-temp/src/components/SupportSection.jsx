import React from 'react';

const SupportSection = () => {
  return (
    <section className="bg-1100">
      <div className="container">
        <div className="row py-8 py-md-10 py-lg-11">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="row justify-content-center justify-content-lg-start">
              <div className="col-md-8 col-lg-12 col-xl-11">
                <h2 className="text-white fs-4 fs-lg-3 lh-sm mb-2 text-center text-lg-start fw-bold">
                  We are always here for your backup.
                </h2>
                <p className="fs-8 text-white text-opacity-65 mb-4 mb-md-6 mb-lg-7 lh-lg mb-6 mb-lg-7 text-center text-lg-start">
                  We share common trends and strategies for creating & improving your rental income.
                </p>
              </div>
              <div className="col-lg-10">
                <div className="d-flex gap-2 gap-lg-x1 mb-4 mb-lg-5">
                  <div>
                    <div className="check-icon bg-success mb-1 rounded-circle d-flex align-items-center justify-content-center">
                      <span className="uil uil-check text-white"></span>
                    </div>
                  </div>
                  <div>
                    <h5 className="fs-8 fw-bold lh-lg mb-1 text-white">Noise Free Locations</h5>
                    <p className="lh-xl text-white text-opacity-70 mb-0">
                      We ensure noise-free locations for your peace of mind and sound sleep.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 gap-lg-x1 mb-4 mb-lg-5">
                  <div>
                    <div className="check-icon bg-success mb-1 rounded-circle d-flex align-items-center justify-content-center">
                      <span className="uil uil-check text-white"></span>
                    </div>
                  </div>
                  <div>
                    <h5 className="fs-8 fw-bold lh-lg mb-1 text-white">24/7 Hour Support</h5>
                    <p className="lh-xl text-white text-opacity-70 mb-0">
                      Get support from our efficient customer support team, 24/7, all year round.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Right Side */}
          <div className="col-lg-6">
            <div className="accordion mt-lg-4 ps-3 pe-x1 bg-white" id="accordion">
              {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index + 1}`}>
                    <button
                      className={`accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                      aria-expanded={index === 0}
                      aria-controls={`collapse${index + 1}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lh-xl pt-0 pb-x1">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const accordionItems = [
  {
    question: 'How to setup BrainwaveIO?',
    answer: 'Enjoy the easy setup process with little to no coding knowledge with us!',
  },
  {
    question: 'Can I use BrainwaveIO for my clients?',
    answer: 'Yes, you can. Enjoy special rates for your first client!',
  },
  {
    question: 'How often do you release update?',
    answer: 'We will keep updating the theme; stay with us to get updated!',
  },
  {
    question: 'How can I access to old version?',
    answer: 'Go to your cloud storage and provide the password. You’ll find it there..',
  },
  {
    question: 'How can I get your support?',
    answer: 'To reach our support team, simply send an email to support@brainwaveio.com. Our team will promptly address your inquiry and provide assistance as needed.',
  },
];

export default SupportSection;
