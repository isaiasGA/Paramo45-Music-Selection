import { getTracksData } from './firestoreRequest.js';

const getSpotToken = async () => {
  const clientId = '26cef5c931754e4b85f90b16b2f9b3e3';
  const clientSecret = '71edca1727bf476b8da381b82c75e906';

  try {
    const spotifyAuth = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      }
    });
    return spotifyAuth.data.access_token

  } catch (error) {
    console.log(error)
  }
};

function displayIds(idsArr) {
  const singleIdString = idsArr.join(',');
  const paraDisplay = document.querySelector('.tracks');
  paraDisplay.textContent = singleIdString
}

getTracksData().then((ids) => {
  displayIds(ids)
})







