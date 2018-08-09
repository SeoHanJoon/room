import React, { Fragment } from 'react';

const Movie = () => (
  <Fragment>
    <video width="100%" height="100%" autoPlay loop muted src="/movie.mp4">
      <track default kind="subtitles" srcLang="en" src="/movie.mp4" />
      <source type="video/mp4" data-reactid=".0.1.0.0.0" src="/movie.mp4" />
      {"Sorry, your browser doesn't support embedded videos."}
    </video>
  </Fragment>
);

export default Movie;
