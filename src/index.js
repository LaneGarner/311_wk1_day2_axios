// import axios here
const axios = require('axios')

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  return axios(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
  .then(function(response){
    console.log(response)
    return response
  })
}

// discoverMovie()


const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios(url)
  .then(function(response){
    // console.log(response.data)
    return response.data
  })
}

// getMovieById(500)

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url)
  .then(function(response){
    console.log(response.status)
    return response.status
  })
  .catch(function(error){
    console.log(error.response.status)
    return error.response.status
  })
  
}

getMovieByIdFailure(5783)



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}