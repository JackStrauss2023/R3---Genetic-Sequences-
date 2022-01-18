 // All...
// http://rosalind.info/problems/dna/
// http://rosalind.info/problems/rna/
// http://rosalind.info/problems/revc/
// http://rosalind.info/problems/hamm/
// One...
// http://rosalind.info/problems/subs/
// http://rosalind.info/problems/prot/
// http://rosalind.info/problems/gc/
const DNA_STRING_FOR_dna = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC";
const DNA_STRING_FOR_rna = "GATGGAACTTGACTACGTAAATT" ;
const DNA_STRING_FOR_revc = "AAAACCCGGT";
const DNA_STRING_1_FOR_hamm = "GAGCCTACTAACGGGAT";
const DNA_STRING_2_FOR_hamm = "CATCGTAATGACGGCCT";
const DNA_STRING_FOR_subs = "GATATATGCATATACTT";
const DNA_SUBSTRING_FOR_subs = "ATAT";
const RNA_STRING_FOR_prot = "AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA";

function problem_dna() {
  // this line is actually the solution to the problem
  let counts = nucleotideCountsOf(DNA_STRING_FOR_dna);
  // this is all drawing code...
  drawString(DNA_STRING_FOR_dna,0,25,width);
  drawCounts(counts);
  // pieChart(width/2, height/2, width/4, counts);
  data();
  fill(0);
  textSize(15);
  text("Genetic Sequence for DNA:", 10, 20);
}

function problem_rna() {
rna ();
textSize(20);
fill(0);
drawString(DNA_STRING_FOR_rna,0,130,width);
drawString(DNA_STRING_FOR_rna.replace(/T/g, "U"),0,height - 90,width);
}

function problem_revc() {
const revcStr = revc();
textSize(20);
text("Orginial Genetic Sequence for REVC:", 10, 20);
text("Solution Genetic Sequence for REVC:", 10, height - 195);
drawString(DNA_STRING_FOR_revc,0,50,width);
drawString(revcStr,0,height - 145,width);

}

function problem_hamm() {
fill(0);
connectors();
hamm();
drawString(DNA_STRING_1_FOR_hamm,0,height/2 - 100,width);
drawString(DNA_STRING_2_FOR_hamm,0, height/2 + 100,width);
}

function problem_subs() {
subs();

drawString(DNA_STRING_FOR_subs,0,height/2,width);
textSize(30);
fill(0);
let substring = "ATAT - substring";
text(substring,5, 30)

 let key = "KEY: G - white, A - red, T - green, C - Blue";
  textSize(20);
  fill(0);
  text(key, 5, 55)

}

function problem_prot() {

}

function problem_gc() {

}