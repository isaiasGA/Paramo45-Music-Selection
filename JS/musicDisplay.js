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
    const audioElement = document.querySelector(`.audio-${num} `);
    const seekBarInput = document.querySelector(`.seekbar-${num}`);
    const volumeInput = document.querySelector(`.volume-input-${num}`);
    const playBtn = document.querySelector(`.btn-${num}`);
    const audio = document.querySelector(`.audio-${num}`);
    const trackDuration = document.querySelector(`.track-duration-${num}`);


    const btnLogic = () => {
      playBtn.addEventListener('click', () => {
        playBtn.children[0].classList.toggle('fa-play');
        playBtn.children[0].classList.toggle('fa-pause');
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        };
      });
    };

    const audioElementLogic = () => {
      audioElement.addEventListener('timeupdate', () => {
        let seconds = parseInt(audioElement.currentTime % 60);
        let minutes = parseInt((audioElement.currentTime / 60) % 60);
        trackDuration.innerHTML = minutes + ':' + seconds;
      }, false)

      if (audioElement.ended) {
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
      };

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
    }

    btnLogic();
    audioElementLogic();
    seekBarLogic();
    volumeControlLogic();
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



