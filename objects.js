<<<<<<< HEAD
var playlist = {'Slowdive':'Alison'}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
=======
var playslist = {'Peter Bjorn & John': 'Young Folks'}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
>>>>>>> 24ad3bb5388f5e1bcf3dd58b1635586b0b9d95d6

  return playlist

}

function removeFromPlaylist (playlist, artistName) {

<<<<<<< HEAD
  delete playlist[artistName]
=======
  delete playlist.artistName
>>>>>>> 24ad3bb5388f5e1bcf3dd58b1635586b0b9d95d6

  return playlist

}
