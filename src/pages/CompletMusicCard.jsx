import { Component } from 'react';
import PropTypes from 'prop-types';

export default class CompletMusicCard extends Component {
  render() {
    const { songs: { trackName,
      previewUrl, trackId }, songs, clickCheckbox, checked, songsFavorites } = this.props;
    let saved = false;
    const verific = songsFavorites[1] ? songsFavorites[1] : songsFavorites[0];
    console.log(songsFavorites[0], songsFavorites[1]);
    if (verific.length > 0) {
      const filtro = verific.some((e) => e[0].trackId === trackId);
      if (filtro) {
        saved = true;
      }
    }
    console.log(saved);
    return (
      <>
        <p>{trackName}</p>
        <label htmlFor="favorita">
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            id="favorita"
            checked={ saved || checked }
            onChange={ (event) => clickCheckbox(songs, event, saved || checked) }
          />
        </label>
        <br />
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
      </>
    );
  }
}

CompletMusicCard.propTypes = {
  songs: PropTypes.objectOf(PropTypes.objectOf),
  clickCheckbox: PropTypes.func,
  checked: PropTypes.bool,
  songsFavorites: PropTypes.arrayOf(PropTypes.arrayOf),
};

CompletMusicCard.defaultProps = {
  songs: [],
  clickCheckbox: () => {},
  checked: false,
  songsFavorites: [],
};
