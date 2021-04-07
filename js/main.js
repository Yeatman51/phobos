// git modal elements
let modal = document.getElementById('simpleModal');

// get open modal button 
let modalBtn = document.getElementById('modalBtn');

// get close button 
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for click outside of the model
window.addEventListener('click', clickOutside);

// function to open modal
function openModal(){
    modal.style.display = 'block';
}

// function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// function to close modal if user clicks outside of modal
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
    
}

const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "XNujlaqZTxrTScokTMsEaL5Hc3Zelz9ROZiuRGHQ";

const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}${api_key}`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }

const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation
  }

  fetchNASAData()