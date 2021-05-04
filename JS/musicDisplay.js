import { tracksData } from './spotifyDataReq.js'

const musicDisplayContainer = document.querySelector('.music-display');

const trackImage = (imageUrl) => {
  const imageElement = document.createElement('img');

  imageElement.src = imageUrl;
  return musicDisplayContainer.append(imageElement)
}

const trackPlayer = (trackInfo) => {
  const trackInfoContainer = document.createElement('div');
  const trackName = document.createElement('h2')
  const artist = document.createElement()


}

const fetchedData = async () => {
  const tracksDataManage = await tracksData();

  return tracksDataManage.map((track) => {
    const imagesArray = track.album.images;
    return trackImage(imagesArray[0].url)
  });
}

fetchedData()


