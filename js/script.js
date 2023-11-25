
// 1. all data here 
const loadAllDataBillioner = async () => {
    
    //fetch data from API
    const url = `https://forbes400.onrender.com/api/forbes400/industries/technology`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    allBillioner(data);
}
// all data macanisum
const allBillioner = (data) => {
    //spnnier stop
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');
    //main container
    const container = document.getElementById('users');
    data.forEach(item => {
        // console.log(item);
        //create div for card and add none class
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                             <div class="card h-100">
                                <img src="${item.person.squareImage}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${item.person.name}</h5>
                                  <p class="card-text">${item.abouts}</p>
                                  </div>
                                  
                                  <p class="card-footer">Position: ${item.position}</p>
                              </div>
        
        
        `;
        container.appendChild(div);

    })
}
//add eventhandler all data
document.getElementById('all-billionaire').addEventListener('click', function () {
    // spinner start
    const snipper = document.getElementById('spinner');
    snipper.classList.remove('d-none');

    //clear old data from main container
    const container = document.getElementById('users');
    container.innerHTML = '';
    
    //show all btn 
    const btnContainer = document.getElementById('btn-container');
    btnContainer.classList.add('d-none');

    //richer all data
    loadAllDataBillioner();
})



// 2. show states richer
const richestByStatesData = async () => {
    const url = `https://forbes400.onrender.com/api/forbes400/states/Texas`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    richestByStates(data);
}
const richestByStates = (data) => {
    //spnnier stop
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');
    //div container
    const container = document.getElementById('users');
    //each item
    data.forEach(item => {
        //create a div for card!
        const div = document.createElement('div');
        div.classList.add('col');
        //Set card items
        div.innerHTML = `
        <div class="card h-100">
            <img src="${item.person.squareImage}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${item.person.name}</h5>
                <p class="card-text">${item.abouts}</p>
             </div>
          <p class="card-footer">Position: ${item.position}</p>
        </div>
        `;
        container.appendChild(div);

    })
}
document.getElementById('states-btn').addEventListener('click', function () {
    // spinner start
    const snipper = document.getElementById('spinner');
    snipper.classList.remove('d-none');

    //clear old data from main container
    const container = document.getElementById('users');
    container.innerHTML = '';

    //richer data call
    richestByStatesData();
})



// 3. show richer which are technoloy use
const technologyData = async () => {
    const url = `https://forbes400.onrender.com/api/forbes400/industries/technology`;
    const res = await fetch(url);
    const data = await res.json();
    technologyRicher(data);
}
//show technology richer
const technologyRicher = (data) => {
    //spnnier stop
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');
    //div container
    const container = document.getElementById('users');
    //each item
    data.forEach(item => {
        //create a div for card!
        const div = document.createElement('div');
        div.classList.add('col');
        //Set card items
        div.innerHTML = `
         <div class="card h-100">
             <img src="${item.person.squareImage}" class="card-img-top" alt="...">
              <div class="card-body">
                 <h5 class="card-title">${item.person.name}</h5>
                 <p class="card-text">${item.abouts}</p>
              </div>
           <p class="card-footer">Position: ${item.position}</p>
         </div>
         `;
        container.appendChild(div);

    })
}
//technoloy btn Eventhandler
document.getElementById('technology').addEventListener('click', function () {
    // spinner start
    const snipper = document.getElementById('spinner');
    snipper.classList.remove('d-none');
    //clear old data from main container
    const container = document.getElementById('users');
    container.innerHTML = '';

    //Technology richer data call
    technologyData();
})


//3. limited data 
const limitedData = async () => {
    const url = `https://forbes400.onrender.com/api/forbes400?limit=6`;
    const res = await fetch(url);
    const data = await res.json();
    showLimitedData(data);
}
//show 10 limited data
const showLimitedData = (data) => {
    //spnnier stop
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');
    //div container
    const container = document.getElementById('users');
    container.innerHTML = '';
    //each item
    data.forEach(item => {
        //create a div for card!
        const div = document.createElement('div');
        div.classList.add('col');
        //Set card items
        div.innerHTML = `
            <div class="card h-100">
                <img src="${item.person.squareImage}" class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${item.person.name}</h5>
                    <p class="card-text">${item.abouts}</p>
                 </div>
              <p class="card-footer">Position: ${item.position}</p>
            </div>
            `;
        container.appendChild(div);

    })

    
    //show all btn 
    const btnContainer = document.getElementById('btn-container');
    btnContainer.classList.remove('d-none');
}
limitedData();

//show all btn handler
document.getElementById('show-all').addEventListener('click', function () {

    // // spinner start
    const snipper = document.getElementById('spinner');
    snipper.classList.remove('d-none');

    //clear old data from main container
    const container = document.getElementById('users');
    container.innerHTML = '';

    //show all btn 
    const btnContainer = document.getElementById('btn-container');
    btnContainer.classList.add('d-none');

    //richer all data
    loadAllDataBillioner();
    
})