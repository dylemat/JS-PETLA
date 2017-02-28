

function rysujChoinke(wiersze) {
 for ( var n = 1; n <= wiersze; n++) {
  var star = ' ';
  for (var b = 1; b <= (n * 2 - 1); b++) {

   star += '*';
  }
 console.log(star);}
}

rysujChoinke(5) ;
