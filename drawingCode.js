function drawCounts(counts) {
  strings = {whole:''};
  for( const n in counts ) {
    if( n != "U" ) {
      const string = `${n}: ${counts[n]} `;
      strings.whole += string;
      strings[n] = string;
    }
  }
  strings.whole = strings.whole.trim();
  adjustTextSizeToWidth(strings.whole, width)

  let x = 0;
  let y = height - 5;
  for( let n of ["A","C","G","T"] ) {
    fill(colorTable[n]);
    // textSize(25);
    text(strings[n],x,y);
    x += textWidth(strings[n]);
  }  
}

function data(){
  let m1 = map(20,0, 70, 0,width);
  fill('red');
  rect(0,height/2 - 100, m1, 50);

  let m2 = map(12,0, 70, 0,width);
  fill('blue');
  rect(0, height/2 - 50, m2, 50);

  let m3 = map(17,0, 70, 0,width);
  fill('white');
  rect(0,height/2, m3, 50);

  let m4 = map(21,0, 70, 0,width);
  fill('green');
  rect(0, height/2 + 50, m4, 50);
}

function adjustTextSizeToWidth( string, maxWidth ) {
  let ts = height*0.15; 
  textSize(ts);
  while( 20 + textWidth(string) > maxWidth ) {
    ts -= 1;
    textSize(ts);
  }
  while( 20 + textWidth(string) < maxWidth ) {
    ts += 1;
    textSize(ts);
  }
}


function drawString(string,x,y,width) {
  const s = width/string.length;
  noStroke();
  for( let i = 0; i < string.length; i++ ) {
    fill(colorTable[string.charAt(i)]);
    square(x + i * s, y, s);
  }
}

const colorTable = {
  A: 'red',
  C: 'blue',
  G: 'white',
  T: 'green',
  U: 'yellow'
}

function connectors() {
rect(width/17 *0.5, 0, 1, height);
rect(width/17 *2.5, 0, 1, height);
rect(width/17 *4.5, 0, 1, height);
rect(width/17 *7.5, 0, 1, height);
rect(width/17 *9.5, 0, 1, height);
rect(width/17 *14.5, 0, 1, height);
rect(width/17 *15.5, 0, 1, height);
}