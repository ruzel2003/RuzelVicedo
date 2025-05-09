import React, { useState, useRef } from 'react';

const ServiceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="experience position-relative overflow-hidden" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="position-relative z-1 text-center mb-8 mb-lg-9 video-player-paused">
              <video
                ref={videoRef}
                className="w-100 h-100 rounded-4"
                src="src/assets/video/Tech_video.mp4"
                poster="src/assets/img/Hero/experiences.webp"
                type="src/video/mp4"
                controls
              />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 rounded-4 bg-1100 object-cover" />
              <button
                className="btn play-button position-absolute justify-content-center align-items-center bg-white rounded-circle cursor-pointer"
                onClick={toggleVideo}
              >
                <img
                  className="play-icon w-25"
                  src="src/assets/img/illustrations/play-solid.svg"
                  alt="Play"
                />
                <img
                  className="pause-icon w-25"
                  src="src/assets/img/illustrations/pause-solid.svg"
                  alt="Pause"
                />
              </button>
              <div className="position-absolute dots d-none d-sm-block">
                <img className="img-fluid w-100" src="src/assets/img/illustrations/Dots.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-8 col-lg-7">
            <h2 className="fs-4 fs-lg-3 fw-bold text-center text-white mb-5 mb-lg-9 lh-sm">
              We made this app to solve your problems.
            </h2>
          </div>
          <div className="col-12">
            <div className="row gy-4 g-md-3 pb-8 pb-lg-11 px-1">
              {[
                {
                  img: 'src/assets/img/icons/roadmap.svg',
                  title: 'Unlimited Projects',
                  description:
                    'Manage multiple projects at once and for seamless business operation.',
                },
                {
                  img: 'src/assets/img/icons/users-wm.svg',
                  title: 'Team Management',
                  description:
                    'Manage your cross-functional teams better than ever with our easily manageable app.',
                },
                {
                  img: 'src/assets/img/icons/share-91.svg',
                  title: 'File Sharing',
                  description:
                    'Easily share files where necessary and keep them safe with enhanced security and protection.',
                },
                {
                  img: 'src/assets/img/icons/video_meeting.svg',
                  title: 'Video Meeting',
                  description:
                    'Conduct video meetings and keep records for further use with its cloud storage.',
                },
                {
                  img: 'src/assets/img/icons/opening-times.svg',
                  title: 'Time Tracking',
                  description:
                    'Track time to ensure meeting all the deadlines and never lag behind managing multiple projects.',
                },
                {
                  img: 'src/assets/img/icons/card-favorite.svg',
                  title: 'Payment System',
                  description:
                    'With its easy payment system create invoices and get paid all at the same place.',
                },
              ].map((feature, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2">
                  <img src={feature.img} alt="" />
                  <div>
                    <h5 className="fs-8 text-white lh-lg fw-bold">{feature.title}</h5>
                    <p className="text-white text-opacity-50 lh-xl mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-0 end-0">
        <div className="bg-white py-3 py-md-9 py-xl-10" />
        <img className="wave" src="src/assets/img/illustrations/Wave_2.svg" alt="" />
      </div>
    </section>
  );
};

export default ServiceSection;
