const stampa = (mgs) => {
    console.log('ecco qua' ,mgs)
}

const submitElement = document.querySelector('input[type="submit"]')
const deleteElement = document.querySelector('input[name="delete"]')

let price, userName, userKm, userRange


submitElement.addEventListener('click', function () {
    //Ricevo dati nome
    userName = document.querySelector('input[name="username"')
    userName = userName.value
    // Ricevo dati km
    userKm = document.querySelector('input[name="distance"]')
    userKm = parseInt(userKm.value)
    // Ricevo dati età
    userRange = document.querySelector('select')
    userRange = userRange.value
    
    const ticiketUser = document.getElementById('ticketUser')
    const ticketSale = document.getElementById('ticketSale')
    const ticketCoach = document.getElementById('ticketCoach')
    const ticketCP = document.getElementById('ticketCP')
    const ticketPrice = document.getElementById('ticketPrice')
    
    // stampa(userName)
    // stampa(userKm)
    // stampa(userRange)
    // stampa(ticiketUser)
    // stampa(ticketSale)
    // stampa(ticketCP)
    // stampa(ticketCoach)
    // stampa(ticketPrice)

    if (userName != '' && isNaN(userName) && userKm != '' && userKm > 0) {
        // Calcolo costo biglietto
        price = 0.21 * userKm
        // Calcolo sconto
        const calcSale = price * userRange 
        const finalPrice = (price - calcSale).toFixed(2)
        // Inserisco dati in HTML
        ticiketUser.innerHTML = userName   
        if (userRange === 1) {
            ticketSale.innerHTML = 'Biglietto Standard'
        } else {
            ticketSale.innerHTML = 'Biglietto Scontato'
        }
        ticketCoach.innerHTML = Math.floor(Math.random() * 10 + 1);
        ticketCP.innerHTML = Math.floor(Math.random() * 100000 );
        ticketPrice.innerHTML = finalPrice + '&euro;'

        //stampa(calcSale)
        //stampa(finalPrice)
        //stampa(userRange)
        //stampa(price)
    
    } else {
        alert('Alcuni dati sono errati')
    }
})




deleteElement.addEventListener('click', function () {

    const userName = document.querySelector('input[name="username"]')
    userName.value = '';

    const userKm = document.querySelector('input[name="distance"]')
    userKm.value = '';

    const userRange = document.querySelector('select')
    userRange.value = 1;

    // stampa(userName)
    // stampa(userKm)
    // stampa(userRange)
    // stampa('ecco qua submit', deleteElement)
})



