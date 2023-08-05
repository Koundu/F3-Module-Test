let url = 'https://api.ipify.org?format=json'
let ipAddress,lat,long,cus_lat,cus_long,code;
const token = '?token=439f8a6fbf7199'
const card = `
        <div id="card">
        <p id="name">Name:</p>
        <p id="bt">Branch Type:</p>
        <p id="ds">Delivery Status:</p>
        <p id="dst">District:</p>
        <p id="div">Division:</p>
        </div>
`;




fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-address").append(`${data.ip}`)
            ipAddress = data.ip;
    })
    .then(data => fetch('https://ipinfo.io/'+ipAddress+'?token=439f8a6fbf7199'))
                    .then(res => res.json())
                    .then(data => {
                        document.getElementById("lat").innerHTML += ` ${data.loc.split(",").shift()}`,
                        document.getElementById("log").innerHTML += ` ${data.loc.split(",").pop()}`,
                        document.getElementById("city").innerHTML += `  ${data.city}`,
                        document.getElementById("org").innerHTML += `   ${data.org.split(" ").pop()}`,
                        document.getElementById("reg").innerHTML += `   ${data.region}`;
                        document.getElementById("host").innerHTML += `  ${data.hostname}`;
                        document.getElementById("maps").src = "https://maps.google.com/maps?q="+`${data.loc.split(",").shift()}`+","+`${data.loc.split(",").pop()}`+"&z=15&output=embed"
                        console.log("https://maps.google.com/maps?q="+`${data.loc.split(",").shift()}`+","+`${data.loc.split(",").pop()}`+"&z=15&output=embed");
            })
    .then(data =>fetch('https://ipinfo.io/'+ipAddress+'?token=439f8a6fbf7199'))
                    .then(res => res.json())
                    .then(data =>{
                        let kolkata_datetime_str = new Date().toLocaleString("en-US", { timeZone: `${data.timezone}`});
                        let date_kolkata = new Date(kolkata_datetime_str);
                        document.getElementById("timeZone").innerHTML += `   ${data.timezone}`;
                        document.getElementById("dateTime").innerHTML += `   ${date_kolkata}`;
                        document.getElementById("pin").innerHTML += `   ${data.postal}`;})
    .then(data =>fetch('https://ipinfo.io/'+ipAddress+'?token=439f8a6fbf7199'))
                    .then(res => res.json())
                    .then(data =>{
                        let postal = `${data.postal}`
                        code = postal;
                        console.log(code);
                    })
                    .then(data => fetch('https://api.postalpincode.in/pincode/'+code))
                                        .then(res => res.json())
                                        .then(data =>{
                                            document.getElementById("msg").innerHTML += data[0].Message;
                                            console.log(data[0].PostOffice.length);
                                        })
                    .then(data => fetch('https://api.postalpincode.in/pincode/'+code))
                                        .then(res => res.json())
                                        .then(data =>{
                                            console.log(data);
                                            for(let i=0;i<data[0].PostOffice.length;i++){
                                                document.getElementById("name").innerHTML += `  ${data[0].PostOffice[i].Name}`
                                                document.getElementById("bt").innerHTML += `  ${data[0].PostOffice[i].BranchType}`
                                                document.getElementById("ds").innerHTML += `  ${data[0].PostOffice[i].DeliveryStatus}`
                                                document.getElementById("dst").innerHTML += `  ${data[0].PostOffice[i].District}`
                                                document.getElementById("div").innerHTML += `  ${data[0].PostOffice[i].Division}`
                                            }
                                        })




function afterClicking(){
    window.location.href = "./afterClicking.html";
}

/*
Block
: 
"Vijayawada (Urban)"
BranchType
: 
"Sub Post Office"
Circle
: 
"Andhra Pradesh"
Country
: 
"India"
DeliveryStatus
: 
"Non-Delivery"
Description
: 
null
District
: 
"Krishna"
Division
: 
"Vijayawada"
Name
: 
"Besant Road"
Pincode
: 
"520011"
Region
: 
"Vijayawada"
State
: 
"Andhra Pradesh"
*/