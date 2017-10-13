document.addEventListener("DOMContentLoaded", function() {
    var max = 10, min = 0;
    var users = ["divyansh goel", "Péricles Júnior", "Adrien Pellegrini","Chandler Moulton","Eve Molnar","Sharine Borslien","David L Reinke","Abdallah Barthe","Laura Barnitz","You Wu"];
    var links = ["https://medium.com/@divyanshgoel.2011", "https://medium.com/@priclesjnior", "https://medium.com/@pellea","https://medium.com/@AreaCodeGreetin","https://medium.com/@eve_75841","https://medium.com/@sharine777","https://medium.com/@davidlreinke","https://medium.com/@abdallah_barthe","https://medium.com/@laurabarnitz","https://medium.com/@youwu"]; 
    var idx1 = 0, idx2 = 0, idx3 = 0;

    while(idx1 === idx2 || idx2 === idx3 || idx1 === idx3){
        idx1 = Math.floor(Math.random() * (max - min) + min);
        idx2 = Math.floor(Math.random() * (max - min) + min);
        idx3 = Math.floor(Math.random() * (max - min) + min);
    }

    document.getElementById('e1').innerText = users[idx1];
    document.getElementById('e1').setAttribute('href',links[idx1]);
    document.getElementById('e2').innerText = users[idx2];
    document.getElementById('e2').setAttribute('href',links[idx2]);    
    document.getElementById('e3').innerText = users[idx3];
    document.getElementById('e3').setAttribute('href',links[idx3]);
    
  });