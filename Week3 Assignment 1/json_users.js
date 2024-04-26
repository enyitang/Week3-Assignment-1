const div = document.getElementById("container")
const get_user = async()=>{

    const response =await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users)
    users.forEach((each)=> {
        div.innerHTML +=`
        
        <div class="card">
                <h1> ${each.name}</h1>
                <h2> ${each.username}</h2>
                <h3>${each.phone}</h3>
                <h3> ${each.address.city}</h3>
                <h3> ${each.address.street}</h3>
                               
        </div>
                `
        
    }) 

    }

    get_user()
