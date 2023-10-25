
let idConsultar

async function getPostedData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();

    if (response.ok) {
        console.log(data)
        data.forEach(posted => {
            const userContainer = document.createElement('div');
            userContainer.classList.add('userContainer');
            const postedTitle = document.createElement('li');
            postedTitle.innerHTML=`${posted.title}`;
            userContainer.appendChild(postedTitle)
            listaUsuarios.appendChild(userContainer)
            userContainer.addEventListener('click', ()=>{
                console.log(`${posted.id}`)
                idConsultar=posted.id
                getDetallesPublicacion(idConsultar, userContainer )
               
            })
        });
    }

}

async function getDetallesPublicacion(idPublicacion, nodoHtml=undefined){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPublicacion}`);
    let data = await response.json()
    if (response.ok) {
        const postedDetails = document.createElement('div')
        const userId = document.createElement('p')
        userId.innerHTML=`User Id: ${data['userId']}`
        const pubId = document.createElement('p')
        pubId.innerHTML=`Publicación Id: ${data['id']}`
        const pubBody = document.createElement('p')
        pubBody.innerHTML=`Body: ${data['body']}`        
        postedDetails.classList.add('detailsConyainer')
        postedDetails.appendChild(userId)
        postedDetails.appendChild(pubId)
        postedDetails.appendChild(pubBody)
        nodoHtml.appendChild(postedDetails)
        for (let key in data){
            console.log(key, data[key])
        }
    }
}


