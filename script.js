    let h1 = document.querySelector('.cron')
    let number = 0
    let cron

    function start() {
        cron = setInterval(function () {
           number++
           h1.innerHTML = number
        }, 1000);
    }

    const stop = () => {
        clearInterval(cron)
    }

     function reset() {
        clearInterval(cron)
        number = 0
        h1.innerHTML = number
    }