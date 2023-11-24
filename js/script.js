
const loadAllDataBillioner = async () =>{
    const url =`https://forbes400.onrender.com/api/forbes400/industries/technology`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

loadAllDataBillioner();