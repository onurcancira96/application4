function whatTimeIsIt(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var mounth = now.getMonth()+1;
    var day = now.getDate();
    var year = now.getFullYear();
    
    (hour<10)? document.getElementById('saat').innerText= '0'+hour:
     document.getElementById('saat').innerText=hour;
     (minute<10)? document.getElementById('dakika').innerText= '0'+minute:
     document.getElementById('dakika').innerText=minute;
     (second<10)? document.getElementById('saniye').innerText= '0'+second:
     document.getElementById('saniye').innerText=second;
     document.getElementById('alttarih').innerText=`${day}/${mounth}/${year}`;
}
setInterval(function(){whatTimeIsIt();},1000);