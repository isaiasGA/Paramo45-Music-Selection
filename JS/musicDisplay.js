import { tracksData } from './spotifyDataReq.js'
import { trackComponents } from './trackComponents.js'

(async function spotifyTracksData() {
  const fetchedData = await tracksData();
  const tracksArray = fetchedData.map((tracks => {
    return tracks
  }));
  trackComponents(tracksArray);

  /*====================================================================================*/


  function trackDataLogic(num) {
    const trackContainer = document.querySelectorAll('.trackContainer')
    const trackContainerNum = document.querySelector(`.container-${num}`)
    const audioElement = document.querySelector(`.audio-${num} `);
    const seekBarInput = document.querySelector(`.seekbar-${num}`);
    const volumeInput = document.querySelector(`.volume-input-${num}`);
    const playBtn = document.querySelector(`.btn-${num}`);
    const audio = document.querySelector(`.audio-${num}`);
    const trackDuration = document.querySelector(`.track-duration-${num}`);
    const albumCover = document.querySelector(`.album-cover-${num}`);
    const trackInformation = document.querySelector(`.trackInfo-${num}`);

    const edmBtn = document.querySelector('.edm');
    const latinBtn = document.querySelector('.latin');
    const altBtn = document.querySelector('.alternative');
    const instBtn = document.querySelector('.instrumental');
    const popBtn = document.querySelector('.pop');
    const allBtn = document.querySelector('.all');

    const btnLogic = () => {
      playBtn.addEventListener('click', () => {
        playBtn.children[0].classList.toggle('fa-play');
        playBtn.children[0].classList.toggle('fa-pause');
        if (audio.paused) {
          audio.play();
          trackContainerNum.classList.add('playingMediaHeight')
          albumCover.classList.add('spinning-cover');
          albumCover.classList.remove('paused-album-cover');
        } else {
          audio.pause();
          trackContainerNum.classList.remove('playingMediaHeight')
          albumCover.classList.remove('spinning-cover');
          albumCover.classList.add('paused-album-cover');
        };
      });
    };

    const audioElementLogic = () => {
      audioElement.addEventListener('timeupdate', () => {
        let seconds = parseInt(audioElement.currentTime % 60);
        let minutes = parseInt((audioElement.currentTime / 60) % 60);
        trackDuration.innerHTML = minutes + ':' + seconds;
      }, false)

      audioElement.addEventListener('ended', () => {
        playBtn.children[0].classList.add('fa-play');
        playBtn.children[0].classList.remove('fa-pause');
        albumCover.classList.remove('spinning-cover');
        albumCover.classList.add('paused-album-cover');
        trackContainerNum.classList.remove('playingMediaHeight')
        audioElement.currentTime = 0;
      })

      audioElement.addEventListener('timeupdate', () => {
        seekBarInput.value = audioElement.currentTime
      });

      audioElement.addEventListener('durationchange', () => {
        seekBarInput.min = 0;
        seekBarInput.max = audioElement.duration;
        seekBarInput.value = 0;
      });
    };

    const seekBarLogic = () => {
      seekBarInput.addEventListener('input', () => {
        audioElement.currentTime = seekBarInput.value;
      });
    };

    const volumeControlLogic = () => {
      volumeInput.addEventListener('change', () => {
        audioElement.volume = volumeInput.value / 100;
      });
    };

    const albumCoverHide = () => {
      trackContainerNum.classList.remove('playingMediaHeight')
      trackInformation.classList.remove('animation-start');
      trackContainerNum.classList.remove('pausedMediaHeight');
      albumCover.classList.remove('spinning-cover');
      albumCover.classList.remove('paused-album-cover');
      playBtn.children[0].classList.remove('fa-pause');
      playBtn.children[0].classList.add('fa-play');
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    function trackGenresLogic(btn, gen) {
      btn.addEventListener('click', () => {
        trackContainer.forEach(genre => {
          if (genre.classList[2] !== gen) {
            genre.classList.add('hideGenres');
            albumCoverHide()
          } else {
            genre.classList.remove('hideGenres')
          }
        });
      });
    };

    document.body.addEventListener('click', (ev) => {
      if (ev.target.classList[1] !== `album-cover-${num}`) {
        if (ev.target.classList.value !== `track-controls`
          && ev.target.classList.value !== `track-info`
          && ev.target.classList[0] !== `track-information`
          && ev.target.classList[1] !== `fa-play`
          && ev.target.classList[1] !== `fa-pause`
          && ev.target.classList[0] !== `play-btn`) {

          albumCoverHide()
        }
      } else if (ev.target.classList[1] == `album-cover-${num}`) {
        trackContainerNum.classList.remove('playingMediaHeight')
        trackInformation.classList.toggle('animation-start');
        trackContainerNum.classList.toggle('pausedMediaHeight');
        albumCover.classList.remove('spinning-cover');
        albumCover.classList.remove('paused-album-cover');
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    });


    allBtn.addEventListener('click', () => {
      trackContainer.forEach(genre => {
        if (genre.classList[3] === 'hideGenres') {
          genre.classList.remove('hideGenres');
        }
      });
    });



    btnLogic();
    audioElementLogic();
    seekBarLogic();
    volumeControlLogic();

    trackGenresLogic(latinBtn, 'latin');
    trackGenresLogic(altBtn, 'alternative');
    trackGenresLogic(instBtn, 'instrumental');
    trackGenresLogic(popBtn, 'pop');
    trackGenresLogic(edmBtn, 'edm');

  }

  trackDataLogic(0)
  trackDataLogic(1)
  trackDataLogic(2)
  trackDataLogic(3)
  trackDataLogic(4)
  trackDataLogic(5)
  trackDataLogic(6)
  trackDataLogic(7)
  trackDataLogic(8)
  trackDataLogic(9)
  trackDataLogic(10)
  trackDataLogic(11)
  trackDataLogic(12)

})()



