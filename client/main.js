const moodsContainer = document.querySelector('#moods-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/moods`

const moodsCallback = ({ data: moods }) => displayMoods(moods)
const errCallback = err => console.log(err)

const getAllMoods = () => axios.get(baseURL).then(moodsCallback).catch(errCallback)
const createMood = body => axios.post(baseURL, body).then(moodsCallback).catch(errCallback)
const deleteMood = id => axios.delete(`${baseURL}/${id}`).then(moodsCallback).catch(errCallback)
const updateMood = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(moodsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
   
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
       
        imageURL: imageURL.value
    }

    createMood(bodyObj)

    address.value = ''
  
    imageURL.value = ''
}

function createMoodCard(mood) {
    const moodCard = document.createElement('div')
    moodCard.classList.add('mood-card')

    moodCard.innerHTML = `<img alt='mood cover image' src=${mood.imageURL} class="mood-cover-image"/>
    <p class="address">${mood.address}</p>
    <div class="btns-container">
        <button onclick="updateMood(${mood.id}, 'minus')">I can do better</button>
       
        <button onclick="updateMood(${mood.id}, 'plus')"> I am in alignment</button>
    </div>
    <button onclick="deleteMood(${mood.id})">delete</button>
    `


    moodsContainer.appendChild(moodCard)
}

function displayMoods(arr) {
    moodsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMoodCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMoods()