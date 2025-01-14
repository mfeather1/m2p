function cvt_to_anim(c) {
  var ca = new Array(54);
  var to_anim = [
    6,7,8,3,4,5,0,1,2,45,48,51,46,49,52,47,50,53,12,24,
    36,13,25,37,14,26,38,18,30,42,19,31,43,20,32,44,11,
    10,9,23,22,21,35,34,33,15,27,39,16,28,40,17,29,41];
  for (var i=0; i < 54; i++)
    ca[i] = c[to_anim[i]];
  return(ca.join(''));
}
function cvt_from_anim(c) {
  var ca = new Array(54);
  var from_anim = [
    6,7,8,3,4,5,0,1,2,38,37,36,18,21,24,45,48,51,27,30,
    33,41,40,39,19,22,25,46,49,52,28,31,34,44,43,42,20,
    23,26,47,50,53,29,32,35,9,12,15,10,13,16,11,14,17];
  for (var i=0; i < 54; i++)
    ca[i] = c[from_anim[i]];
  return(ca.join(''));
}
function cvt_to_m2p(c) {
  var ix = [
     0, 1, 2, 3, 4, 5, 6, 7, 8,15,16,17,27,28,29,39,40,41,
    12,13,14,24,25,26,36,37,38,45,46,47,48,49,50,51,52,53,
     9,10,11,21,22,23,33,34,35,18,19,20,30,31,32,42,43,44
  ];
  c = c.split('');
  var U=c[4], D=c[49], L=c[22], R=c[28], F=c[25], B=c[31];
  for (var i=0; i < 54; i++) {
    if      (c[i] == U) c[i] = 'U';
    else if (c[i] == D) c[i] = 'D';
    else if (c[i] == L) c[i] = 'L';
    else if (c[i] == R) c[i] = 'R';
    else if (c[i] == F) c[i] = 'F';
    else if (c[i] == B) c[i] = 'B';
  }
  for (var i=0, f=''; i < 54; i++)
    f += c[ix[i]];
  return f;
}
function cvt_from_m2p(c) {
  var ix = [
     0, 1, 2, 3, 4, 5, 6, 7, 8,36,37,38,18,19,20, 9,10,11,
    45,46,47,39,40,41,21,22,23,12,13,14,48,49,50,42,43,44,
    24,25,26,15,16,17,51,52,53,27,28,29,30,31,32,33,34,35
  ];
  for (var i=0, f=[]; i < 54; i++)
    f[i] = c[ix[i]];
  for (var i=0; i < 54; i++) {
    if      (f[i] == 'U') f[i] = 'R';
    else if (f[i] == 'D') f[i] = 'O';
    else if (f[i] == 'F') f[i] = 'Y';
    else if (f[i] == 'B') f[i] = 'W';
    else if (f[i] == 'L') f[i] = 'G';
    else if (f[i] == 'R') f[i] = 'B';
  }
  return f.join('');
}
function color_str(c) {   
  if      (c == "W") return "white";
  else if (c == "Y") return "yellow";
  else if (c == "R") return "red";
  else if (c == "O") return "orange";
  else if (c == "B") return "blue";
  else if (c == "G") return "green";
  else if (c == "L") return "lightgray";
}
function fullScreen(e) {
  if (typeof e.target.type != 'undefined')
    return;
  var fse = getFullscreenElement();
  if (typeof fse == 'undefined' || fse == null)
    requestFullscreenFunc(document.body);
  else
    exitFullscreenFunc();
}
function exitFullScreen() {
  exitFullscreenFunc();
  document.body.removeChild(logdiv);
  if (fs == 1 && typeof fullscreenElement == 'undefined')
    requestFullscreenFunc(document.body);
}
function getFullscreenElement() {
  return (document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement);
}
function requestFullscreenFunc(elem) {
  if (elem.requestFullscreen) 
    elem.requestFullscreen();
  else if (elem.mozRequestFullScreen)
    elem.mozRequestFullScreen();
  else if (elem.webkitRequestFullscreen)
    elem.webkitRequestFullscreen();
  else if (elem.msRequestFullscreen)
    elem.msRequestFullscreen();
}
function exitFullscreenFunc() {
  if (document.exitFullscreen)
    document.exitFullscreen();
  else if (document.mozCancelFullScreen)
    document.mozCancelFullScreen();
  else if (document.webkitExitFullscreen)
    document.webkitExitFullscreen();
  else if (document.msExitFullscreen)
    document.msExitFullscreen();
}
function animcube_params() {
  var p = '';
  if (typeof align != 'undefined')         p += '&align=' + align;
  if (typeof bgcolor != 'undefined')       p += '&bgcolor=' + bgcolor;
  if (typeof borderwidth != 'undefined')   p += '&borderwidth=' + borderwidth;
  if (typeof butbgcolor != 'undefined')    p += '&butbgcolor=' + butbgcolor;
  if (typeof buttonheight != 'undefined')  p += '&buttonheight=' + buttonheight;
  if (typeof clickprogress != 'undefined') p += '&clickprogress=' + clickprogress;
  if (typeof counter != 'undefined')       p += '&counter=' + counter;
  if (typeof cubecolor != 'undefined')     p += '&cubecolor=' + cubecolor;
  if (typeof doublespeed != 'undefined')   p += '&doublespeed=' + doublespeed;
  if (typeof edit != 'undefined')          p += '&edit=' + edit;
  if (typeof fonttype != 'undefined')      p += '&fonttype=' + fonttype;
  if (typeof hint != 'undefined')          p += '&hint=' + hint;
  if (typeof hintborder != 'undefined')    p += '&hintborder=' + hintborder;
  if (typeof hinthoriz != 'undefined')     p += '&hinthoriz=' + hinthoriz;
  if (typeof hintvert != 'undefined')      p += '&hintvert=' + hintvert;
  if (typeof metric != 'undefined')        p += '&metric=' + metric;
  if (typeof movetext != 'undefined')      p += '&movetext=' + movetext;
  if (typeof movetextspace != 'undefined') p += '&movetextspace=' + movetextspace;
  if (typeof perspective != 'undefined')   p += '&perspective=' + perspective;
  if (typeof position != 'undefined')      p += '&position=' + position;
  if (typeof repeat != 'undefined')        p += '&repeat=' + repeat;
  if (typeof scale != 'undefined')         p += '&scale=' + scale;
  if (typeof slidercolor != 'undefined')   p += '&slidercolor=' + slidercolor;
  if (typeof snap != 'undefined')          p += '&snap=' + snap;
  if (typeof speed != 'undefined')         p += '&speed=' + speed;
  if (typeof textsize != 'undefined')      p += '&textsize=' + textsize;
  if (typeof troughcolor != 'undefined')   p += '&troughcolor=' + troughcolor;
  if (typeof yz != 'undefined')            p += '&yz=' + yz;
  return p;
  /* these params are not allowed:
     buttonbar, colorscheme, colors, config, demo, gabbacolors,
     initmove, initrevmove, move, pos, randmoves, scramble, scw,
     supercube, superfacelets
  */
}

