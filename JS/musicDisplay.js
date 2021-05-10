import { tracksData } from './spotifyDataReq.js'

const musicDisplayContainer = document.querySelector('.music-display');


const trackPlayer = (trackInfo) => {
  trackInfo.map((track => {
    const playerContainer = document.createElement('div');
    const trackDisplayContainer = document.createElement('div');
    const trackDisplay = document.createElement('div');
    const albumCoverContainer = document.createElement('div');
    const trackInfoContainer = document.createElement('div');

    const ulControls = document.createElement('ul');
    const liSongName = document.createElement('li');
    const liArtist = document.createElement('li');

    const imageElement = document.createElement('img');
    const trackName = document.createElement('h2');
    const artist = document.createElement('h3');
    const album = document.createElement('h4');

    playerContainer.innerHTML = `
      <audio id='audio-player' ontimeupdate='seekBar() ondurationchange='CreateTrackSeekBar()' preload='auto'>
        <source src=''https://p.scdn.co/mp3-preview/25afd2d1ae43f4e90083b921d02ea793b4966518?cid=26cef5c931754e4b85f90b16b2f9b3e3' type='audio/mpeg'/>
      </audio>`;





    imageElement.src = track.album.images[0].url;




    albumCoverContainer.appendChild(imageElement);
    trackDisplay.appendChild(albumCoverContainer);
    trackDisplay.appendChild(trackInfoContainer);
    trackDisplayContainer.appendChild(trackDisplay);
    playerContainer.prepend(trackDisplayContainer)
    musicDisplayContainer.appendChild(playerContainer)
  }));
}

const spotifyTracksData = async () => {
  const fetchedData = await tracksData();
  const tracksArray = fetchedData.map((tracks => {
    return tracks
  }));
  trackPlayer(tracksArray)
}

spotifyTracksData()


