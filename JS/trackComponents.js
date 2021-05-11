const musicDisplayContainer = document.querySelector('.music-display');

export const trackComponents = (trackInfo) => {
  trackInfo.map((track => {
    const trackContainer = document.createElement('div');

    const audioVerification = () => {
      if (track.preview_url !== null) {
        return track.preview_url
      }
    }

    console.log(track.preview_url)
    trackContainer.innerHTML = ` 
      <div class="track">
        <div class="track-display">
          <div class="album-container">
            <img class='album-cover' src=${track.album.images[0].url} alt="music-albums">
          </div>
          <div class="track-information hide-information">
            <ul class="track-info">
              <li class="track-name">${track.name}</li>
              <li class="artist">${track.artists[0].name}</li>
              <li><span id="trackDuration"></span><i> / </i>:30</li>
            </ul>
            <div class="track-controls">
              <div id="playBtn">
                <i class="fas fa-play"></i>
              </div>
              <div class="track-seek-container">
                <input id='trackSeekBar' min='0' max='334' step="1" value="0" type="range" oninput="trackSeekBar()"
                  onchange="this.inputChange">
              </div>
              <div class="volume-control">
                <div class="volume-logo">
                  <i class="fas fa-volume-up"></i>
                </div>
                <input type="range" id='volumeControl' min="0" max='100' value='100' step="1"
                  oninput="audioElement.volume = this.value/100" onchange="this.oninput()">
              </div>
            </div>
          </div>
        </div>
    </div>

    <audio id="audio-container" ontimeupdate="seekBar()" ondurationchange="CreateTrackSeekBar()" preload="auto">
      <source src=${audioVerification()} type="audio/mpeg" />
   </audio>`;

    musicDisplayContainer.append(trackContainer);

  }));
}