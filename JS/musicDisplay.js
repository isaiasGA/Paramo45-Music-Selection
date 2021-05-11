import { tracksData } from './spotifyDataReq.js'
import { trackComponents } from './trackComponents.js'

const spotifyTracksData = async () => {
  const fetchedData = await tracksData();
  const tracksArray = fetchedData.map((tracks => {
    return tracks
  }));
  trackComponents(tracksArray)
}

spotifyTracksData()




