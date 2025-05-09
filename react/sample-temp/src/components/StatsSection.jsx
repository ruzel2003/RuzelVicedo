import React, { useEffect } from 'react';

const StatsSection = () => {
  useEffect(() => {
    const countupElements = document.querySelectorAll('[data-countup]');
    
    countupElements.forEach(element => {
      const data = JSON.parse(element.getAttribute('data-countup'));
      let count = data.endValue;  
      const endValue = data.endValue;
      const prefix = data.prefix || '';
      const autoIncreasing = data.autoIncreasing || false;

      const countUp = () => {
        if (count <= endValue + 100) {  
          count++;
          element.textContent = prefix + count;
          setTimeout(countUp, 4000);  
        } else {
          count = endValue;  
          setTimeout(countUp, 2000);  
        }
      };

      if (autoIncreasing) {
        countUp();
      } else {
        element.textContent = prefix + endValue;
      }
    });
  }, []);

  return (
    <section className="container border-bottom mb-8 mb-lg-10">
      <div className="row pb-6 pb-lg-8 g-3 g-lg-8 px-3">
        <div className="col-12 col-md-4">
          <h2 className="fs-3 fw-bold lh-sm mb-2 text-center" data-countup='{"endValue":6,"prefix":"0"}'>0</h2>
          <h6 className="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">Offices are available in different countries</h6>
        </div>
        <div className="col-12 col-md-4">
          <h2 className="fs-3 fw-bold lh-sm mb-2 text-center" data-countup='{"endValue":238}'>0</h2>
          <h6 className="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">Seats are available right now with support</h6>
        </div>
        <div className="col-12 col-md-4">
          <h2 className="fs-3 fw-bold lh-sm mb-2 text-center" data-countup='{"endValue":1395,"autoIncreasing":true}'>0</h2>
          <h5 className="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">People are using our co-work spaces right now</h5>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
