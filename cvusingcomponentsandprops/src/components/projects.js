import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h4>Projects</h4>
        <hr />
        <div className='project'>
          <div className='projectDetails'>
            <p id='projectname'>Generated Image Detection | GEC Thrissur</p>
            <ul>
              <li>Created a generator and discriminator with a 92% real score and 2% fake score using CNN and DCGAN concepts.</li>
              <li>Used random images from an anime dataset to train the generator. Combined real and generated images for training generated image detectors.</li>
              <li>Used the binary cross entropy loss function to quantify the differentiation between real and generated images.</li>
            </ul>
          </div>
          <div className='projectyear'>
            <p>May 2024</p>
          </div>
        </div>
        <div className='project'>
          <div className='projectDetails'>
            <p id='projectname'>Real-Time Helmet Detection | GEC Palakkad</p>
            <ul>
              <li>Preprocessed live video from camera module frame by frame using OpenCV tools.</li>
              <li>Used predefined data models to process and generate the real-time status of the helmet in the form of a buzzer.</li>
              <li>Trained the module to produce a buzzer in case a helmet isn’t detected.</li>
            </ul>
          </div>
          <div className='projectyear'>
            <p>June 2023</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
