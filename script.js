const body = document.body;
const info = document.getElementById('info');
const button = document.getElementById('button');

// const request = await fetch("https://ipinfo.io/json?token=ee6314704821fd")
// const jsonResponse = await request.json()

// console.log(jsonResponse.ip, jsonResponse.country)

fetch("https://ipinfo.io/json?token=ee6314704821fd").then(
    (response) => response.json()
  ).then(
    (jsonResponse) => {
        console.log(jsonResponse)

        const sliced = jsonResponse.loc.slice(0, 7)
        const slicedSecond = jsonResponse.loc.slice(8, 15)

        button.addEventListener('click', () => {
          info.innerHTML = `
            <div class="information">
                <p>Kenglik: ${sliced}</p>
                <p>Uzunlik: ${slicedSecond}</p>
                <p>Mamlakat: ${jsonResponse.country}</p>
                <p>Shahar: ${jsonResponse.city}</p>
                <p>IP Manzil: ${jsonResponse.ip}</p>
                <p>Internet provayder:  ${jsonResponse.org}</p>
            </div>
            <iframe src="https://www.google.com/maps?q=${jsonResponse.loc}&z=15&output=embed" frameborder="0"></iframe>
          `
        })

        // document.body.innerHTML = `
        //   <iframe 
        //     src="https://www.google.com/maps?q=${jsonResponse.loc}&z=15&output=embed"
        //     width="600" 
        //     height="450" 
        //   </iframe>
        // `;
    }
  )



