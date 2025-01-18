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
var fs = 0;
function fullScreen(e) {
  if (typeof e.target.type != 'undefined')
    return;
  var fse = getFullscreenElement();
  if (typeof fse == 'undefined' || fse == null) {
    fs = 1;
    requestFullscreenFunc(document.body);
  }
  else {
    fs = 0;
    exitFullscreenFunc();
  }
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
var logdiv;
function show_log() { 
  var fse = getFullscreenElement();
  var title = 'Solve Log:';
  if (!(typeof fse == 'undefined' || fse == null)) {
    var s = `<style>
    .btn {height:28px; width:100px; border-radius:15px;
          background:white; padding:0px; border:none}
    </style><br>`
    s += title + '<br>';
    for (var i=0; i < logtxt.length; i++)
      s += logtxt[i] + '\n';
    s += '<button class=btn onclick="exitFullScreen()">Back</button>';
    s += '<br><br><br>';
    logdiv = document.createElement('div'); 
    logdiv.id = 'log';
    logdiv.style.overflow = 'auto';
    logdiv.style.paddingLeft = '10%';
    logdiv.style.backgroundColor = '#38383D';
    logdiv.style.textAlign = 'left';
    document.body.appendChild(logdiv);
    logdiv.innerHTML = s;
    requestFullscreenFunc(logdiv);
  } 
  else {
    if (typeof(logwin) != 'undefined')
      logwin.close();
    logwin = window.open('', 'rc_solve_log');
    var s = `<!doctype html>
    <html><head>
    <meta name=viewport content="width=device-width, initial-scale=1">
    <style>
      body {color:white; background-color:#38383D;
      margin-left:10%; margin-right:10%}
      .btn {height:28px; width:100px; border-radius:15px;
            background:white; padding:0px; border:none;}
    </style>
    </head><body><br>`;
    s += title + '<br>';
    for (var i=0; i < logtxt.length; i++)
      s += logtxt[i] + '\n';
    s += `<button class=btn onclick="window.close()">Close</button>
          <br><br></body></html>`;
    logwin.document.write(s);
    logwin.document.title = title;
    logwin.document.close();
  }
}
function show_cube_layout(s, l) {
  l.push('<pre>');
  l.push('    ' + s[0] + s[1] + s[2]);
  l.push('    ' + s[3] + s[4] + s[5]);
  l.push('    ' + s[6] + s[7] + s[8]);
  l.push(s[9]  + s[10] + s[11] + ' ' + s[12] + s[13] + s[14] + ' ' + 
                 s[15] + s[16] + s[17] + ' ' + s[18] + s[19] + s[20]);
  l.push(s[21] + s[22] + s[23] + ' ' + s[24] + s[25] + s[26] + ' ' +
                 s[27] + s[28] + s[29] + ' ' + s[30] + s[31] + s[32]);
  l.push(s[33] + s[34] + s[35] + ' ' + s[36] + s[37] + s[38] + ' ' +
                 s[39] + s[40] + s[41] + ' ' + s[42] + s[43] + s[44]);
  l.push('    ' + s[45] + s[46] + s[47]);
  l.push('    ' + s[48] + s[49] + s[50]);
  l.push('    ' + s[51] + s[52] + s[53]);
  l.push('</pre>');
}
var mlog = [];
function mconsole(s) {
  mlog.push(s);
  setTimeout(console.log.bind(console, s));
}
