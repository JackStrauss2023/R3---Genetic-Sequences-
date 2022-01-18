function nucleotideCountsOf(string) {
  return nucleotides.reduce( (counts,n) => {
    counts[n] = Array.from(string).filter( char => char === n).length
    return counts;
  }, {}) 
}

function rna (){
  fill(0);
  textSize(20);
  text(DNA_STRING_FOR_rna,5,125);
  text("Orginial Genetic Sequence for RNA:", 5, 100);

  let letter_U = DNA_STRING_FOR_rna.replace(/T/g, "U");
  text(letter_U, 5 ,height - 100);
  text("Solution Genetic Sequence for RNA:", 5, height - 125);

  let key = "KEY: G - white, A - red, T - green, C - Blue, U - yellow";
  textSize(20);
  fill(0);
  text(key, 5, 25)
}


function revc (){
   fill(0);
   textSize(20);
  text(DNA_STRING_FOR_revc, 10, 40)
  let reverseStr = function(str) {
    return [...str].reverse().join('');
  }
  let flip = reverseStr(DNA_STRING_FOR_revc);

  let reverse = flip.replace(/A/g,"t").replace(/T/g,"a").replace(/C/g,"g").replace(/G/g,"c");

  let revc = reverse.toUpperCase();
  text(revc, 10, height - 170);
  return revc;
}

function hamm (){
  fill(0);
  textSize(20);
  // text(DNA_STRING_1_FOR_hamm, 100,100);
  // text(DNA_STRING_2_FOR_hamm, 100, 120);
 const hammingDistance = (DNA_STRING_1_FOR_hamm = '', DNA_STRING_2_FOR_hamm = '') => {
   if (DNA_STRING_1_FOR_hamm.length !== DNA_STRING_2_FOR_hamm.length) {
      return 0;
   }
   let dist = 0;
   for (let i = 0; i < DNA_STRING_1_FOR_hamm.length; i += 1) {
      if (DNA_STRING_1_FOR_hamm[i] !== DNA_STRING_2_FOR_hamm[i]) {
         dist += 1;
      }
   }
   return dist;
};
let TEXT = hammingDistance(DNA_STRING_1_FOR_hamm, DNA_STRING_2_FOR_hamm);

text(TEXT,210, 30)
text("Number of differences:", 5, 30)
}

function subs() {
strokeWeight(4);
stroke(0);

//2
for( let i = 1.5; i < 5; i++) {
line(width/17 * i, height/2, width/17 * i, height/2 - 100);
}
line(width/17 * 1.5, height/2 - 100,width/17 * 4.5,height/2 - 100);

//4
for( let i = 3.5; i < 7; i++) {
line(width/17 * i, height/2 + 5, width/17 * i, height/2 + 125);
}
line(width/17 * 3.5, height/2 + 125, width/17 * 6.5, height/2 + 125);


//10
for( let i = 9.5; i < 13; i++) {
line(width/17 * i, height/2, width/17 * i, height/2 - 100);
}
line(width/17 * 9.5, height/2 - 100,width/17 * 12.5,height/2 - 100);
}
