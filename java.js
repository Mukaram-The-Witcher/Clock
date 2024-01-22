// let date = new Date();
const time = document.querySelector('.time')
    // Here we get the things what we want in time
    
    
    // Setting Interval
    
    setInterval( clock=()=> {
    const date = new Date();
    let h = new Date().getHours();
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    if (h > 12) {
        h = h-12;
    } if (h < 10){
        h = "0"+h
    } if (m < 10)
    {
        m = "0"+m
    }
    if (s <10) {
        s ="0"+s
    }
    time.innerHTML = h+":"+m+":"+s;
}, 1000);

clock()