const musicDisplayContainer = document.querySelector('.music-display');

export const trackComponents = (trackInfo) => {
  console.log(trackInfo)

  function trackContainer(num, genre, audioLink) {
    let trackContainer = document.createElement('div');

    trackContainer.innerHTML = ` 
      <div class="track ${genre}">
        <div class="track-display">
          <div class="album-container">
            <img class='album-cover' src=${trackInfo[num].album.images[0].url} alt="music-albums">
          </div>
          <div class="track-information">
            <ul class="track-info">
              <li class="track-name">${trackInfo[num].name}</li>
              <li class="artist">${trackInfo[num].artists[0].name}</li>
              <li><span class='track-duration-${num}'></span><i> / </i>:30</li>
            </ul>
            <div class="track-controls">
              <div class="play-btn btn-${num}">
                <i class="fas fa-play"></i>
              </div>
              <div class="track-seek-container">
                <input class='seekbar-${num}' min='0' max='334' step="1" value="0" type="range">
              </div>
              <div class="volume-control">
                <div class="volume-logo">
                  <i class="fas fa-volume-up"></i>
                </div>
                <input type="range" class='volume-input-${num}' min="0" max='100' value='100' step="1">
              </div>
            </div>
          </div>
        </div>
    </div>

    <audio class="audio-container audio-${num}" preload="auto">
      <source src=${audioLink} type="audio/mpeg" />
    </audio>`;

    return trackContainer
  }

  const track0 = trackContainer(0, 'instrumental', trackInfo[0].preview_url);
  const track1 = trackContainer(1, 'edm', trackInfo[1].preview_url);
  const track2 = trackContainer(2, 'alternative', trackInfo[2].preview_url);
  const track3 = trackContainer(3, 'alternative', 'https://p.scdn.co/mp3-preview/c2f1314f0a573853284ac647f79f2a2c9f33b3e0?cid=774b29d4f13844c495f206cafdad9c86');
  const track4 = trackContainer(4, 'instrumental', trackInfo[4].preview_url);
  const track5 = trackContainer(5, 'edm', trackInfo[5].preview_url);
  const track6 = trackContainer(6, 'instrumental', 'https://p.scdn.co/mp3-preview/77c3e50db4871d80c25f140047625a22872a2f1b?cid=774b29d4f13844c495f206cafdad9c86');
  const track7 = trackContainer(7, 'alternative', trackInfo[7].preview_url);
  const track8 = trackContainer(8, 'alternative', trackInfo[8].preview_url);
  const track9 = trackContainer(9, 'pop', trackInfo[9].preview_url);
  const track10 = trackContainer(10, 'latin', 'https://p.scdn.co/mp3-preview/3d8d79202be436eee3e6b5c2c416a6d049c56375?cid=774b29d4f13844c495f206cafdad9c86');
  const track11 = trackContainer(11, 'pop', 'https://p.scdn.co/mp3-preview/159fd40414b8b8ac778112e41e9401de350722a5?cid=774b29d4f13844c495f206cafdad9c86');
  const track12 = trackContainer(12, 'instrumental', 'https://p.scdn.co/mp3-preview/d54467617ec886a0d4ea70c22f270c9cc90eb74c?cid=774b29d4f13844c495f206cafdad9c86');

  musicDisplayContainer.append(
    track0,
    track1,
    track2,
    track3,
    track4,
    track5,
    track6,
    track7,
    track8,
    track9,
    track10,
    track11,
    track12,
  );
}