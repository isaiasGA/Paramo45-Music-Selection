const musicDisplayContainer = document.querySelector('.music-display');

export const trackComponents = (trackInfo) => {
  function trackContainer(num, genre, audioLink) {
    let trackContainer = document.createElement('div');
    trackContainer.classList.add('trackContainer', `container-${num}`, `${genre}`)

    trackContainer.innerHTML = ` 
      <div class="track">
        <div class="track-display">
          <div class="album-container">
            <img class=' album-cover album-cover-${num}' src=${trackInfo[num].album.images[0].url} alt="music-albums">
          </div>
          <div class="track-information trackInfo-${num}">
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
  const track13 = trackContainer(13, 'instrumental', trackInfo[13].preview_url);
  const track14 = trackContainer(14, 'edm', trackInfo[14].preview_url);
  const track15 = trackContainer(15, 'latin', 'https://p.scdn.co/mp3-preview/7e55f0ff5c074125b0d51499e8252cababf2632b?cid=774b29d4f13844c495f206cafdad9c86');
  const track16 = trackContainer(16, 'pop', 'https://p.scdn.co/mp3-preview/966aa758a457412a46f0481b32e3652a74c1b1ed?cid=774b29d4f13844c495f206cafdad9c86');
  const track17 = trackContainer(17, 'alternative', trackInfo[17].preview_url);
  const track18 = trackContainer(18, 'edm', trackInfo[18].preview_url);
  const track19 = trackContainer(19, 'edm', trackInfo[19].preview_url);
  const track20 = trackContainer(20, 'latin', trackInfo[20].preview_url);
  const track21 = trackContainer(21, 'pop', 'https://p.scdn.co/mp3-preview/8eab3a5695bfaed5449e0787146f857fb9635907?cid=774b29d4f13844c495f206cafdad9c86');
  const track22 = trackContainer(22, 'pop', 'https://p.scdn.co/mp3-preview/96a6916345c00becc9b5ffcd841323ce609eb3e3?cid=774b29d4f13844c495f206cafdad9c86');
  const track23 = trackContainer(23, 'pop', 'https://p.scdn.co/mp3-preview/1884cfb28cca0952fc1a9e95740e157ac4f0e2dd?cid=774b29d4f13844c495f206cafdad9c86');
  const track24 = trackContainer(24, 'instrumental', 'https://p.scdn.co/mp3-preview/30236b9b7ecdcd2e1c719fdff06baba5d9525834?cid=774b29d4f13844c495f206cafdad9c86');
  const track25 = trackContainer(25, 'latin', trackInfo[25].preview_url);
  const track26 = trackContainer(26, 'alternative', trackInfo[26].preview_url);
  const track27 = trackContainer(27, 'instrumental', trackInfo[27].preview_url);
  const track28 = trackContainer(28, 'latin', 'https://p.scdn.co/mp3-preview/71ce697cc66bae2b75c4b27c06336c8df9f498eb?cid=774b29d4f13844c495f206cafdad9c86');
  const track29 = trackContainer(29, 'instrumental', 'https://p.scdn.co/mp3-preview/88c97a1e364ae8a7e62cb513621f458604e3e916?cid=774b29d4f13844c495f206cafdad9c86');
  const track30 = trackContainer(30, 'latin', 'https://p.scdn.co/mp3-preview/c4db1c8851f5f6e9300dd36f81755fad85a1da39?cid=774b29d4f13844c495f206cafdad9c86');
  const track31 = trackContainer(31, 'edm', trackInfo[31].preview_url);
  const track32 = trackContainer(32, 'latin', 'https://p.scdn.co/mp3-preview/95469ba762e7e39531ac2eba1d865d87c108d38d?cid=774b29d4f13844c495f206cafdad9c86');
  const track33 = trackContainer(33, 'edm', trackInfo[33].preview_url);
  const track34 = trackContainer(34, 'pop', 'https://p.scdn.co/mp3-preview/a6da747d6c1b8e0955493faae2e6721b4a389d36?cid=774b29d4f13844c495f206cafdad9c86');
  const track35 = trackContainer(35, 'pop', 'https://p.scdn.co/mp3-preview/667d929febdda3096a047d179d3819a2182595de?cid=774b29d4f13844c495f206cafdad9c86');
  const track36 = trackContainer(36, 'edm', trackInfo[36].preview_url);
  const track37 = trackContainer(37, 'latin', trackInfo[37].preview_url);
  const track38 = trackContainer(38, 'alternative', trackInfo[38].preview_url);
  const track39 = trackContainer(39, 'pop', trackInfo[39].preview_url);
  const track40 = trackContainer(40, 'alternative', 'https://p.scdn.co/mp3-preview/4211412fb95cbb355f0413d3955b8e3b057cb9d7?cid=774b29d4f13844c495f206cafdad9c86');
  const track41 = trackContainer(41, 'alternative', 'https://p.scdn.co/mp3-preview/79ae58907e563abfd151d91a4b8d11e00911459b?cid=774b29d4f13844c495f206cafdad9c86');
  const track42 = trackContainer(42, 'pop', 'https://p.scdn.co/mp3-preview/a0ce705be78f57c4652562a0f2f630c3376c37e6?cid=774b29d4f13844c495f206cafdad9c86');
  const track43 = trackContainer(43, 'instrumental', 'https://p.scdn.co/mp3-preview/abcaa249cdbcc39135d6aac063418e9ebd07111d?cid=774b29d4f13844c495f206cafdad9c86');
  const track44 = trackContainer(44, 'edm', 'https://p.scdn.co/mp3-preview/a41d2c1e046637847cced3fcc4fca9ab4f86b782?cid=774b29d4f13844c495f206cafdad9c86');
  const track45 = trackContainer(45, 'latin', trackInfo[45].preview_url);
  const track46 = trackContainer(46, 'latin', trackInfo[46].preview_url);
  const track47 = trackContainer(47, 'instrumental', trackInfo[47].preview_url);
  const track48 = trackContainer(48, 'edm', trackInfo[48].preview_url);
  const track49 = trackContainer(49, 'alternative', 'https://p.scdn.co/mp3-preview/5cd1f76b4e47d854860a970b15fda36ca77713da?cid=774b29d4f13844c495f206cafdad9c86');

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
    track13,
    track14,
    track15,
    track16,
    track17,
    track18,
    track19,
    track20,
    track21,
    track22,
    track23,
    track24,
    track25,
    track26,
    track27,
    track28,
    track29,
    track30,
    track31,
    track32,
    track33,
    track34,
    track35,
    track36,
    track37,
    track38,
    track39,
    track40,
    track41,
    track42,
    track43,
    track44,
    track45,
    track46,
    track47,
    track48,
    track49
  );
}