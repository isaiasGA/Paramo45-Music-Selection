var firebaseConfig = {
  apiKey: "AIzaSyD6-sa79ipY_msXcaJgaJG-SKr2N3JmVtU",
  authDomain: "paramo45-music-selection.firebaseapp.com",
  projectId: "paramo45-music-selection",
  storageBucket: "paramo45-music-selection.appspot.com",
  messagingSenderId: "760885710814",
  appId: "1:760885710814:web:9db4015ed79dab8ffa574f",
  measurementId: "G-M7X5FDB90E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();

export const getTracksData = async () => {
  try {
    let idsArr = [];
    const fetchTracks = await database.collection('tracks').get();
    fetchTracks.forEach((tracks) => idsArr.push(tracks.data().id));
    return idsArr
  } catch (error) {
    console.log(error)
  }
}




