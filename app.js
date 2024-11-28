let API ="https://boykot.kg/api/v1/products/"


let baikot = document.querySelector(".baikot")


async function getbaikot () {
    try {

        const res = await fetch(API)
        const data = await res.json ()
        console.log (data);

        baikot.innerHTML = data.results.map((item) =>{
            const status = item.status === 'active'
            return`
            <div class="baikot">
            <p> ${item.brand}</p>
            <img src= "${item.logo}">
           
            <span class="${item.status ? "cs" : "s"}">${item.status}</span>

            </div>
                </div>`
        }).join ("")
    } catch (error){
        
console.log(error)
    }
} 

getbaikot()
