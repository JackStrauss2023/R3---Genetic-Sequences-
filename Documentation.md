**User Interaction:**

When the user presses a certain key, the sketch will show the solution to the problem that corresponds with the key the user pressed. 

|Key|Problem|
|---|---|---|
|1|Problem DNA|
|2|Problem RNA|
|3|Problem REVC|
|4|Problem HAMM|
|5|Problem SUBS|


**1) Problem DNA**

In order to solve this problem I needed to count the number of nucleotides in the genetic sequence. I used Mr. Oswald's starter code to solve this problem. This code counts the number of each nucleotide in the genetic sequence. For example, A had 20, C had 12, G had 17, and T had 21. I drew the genetic sequence as squares using the drawstring() function in my code. This code adjusted the size of the squares that represent the nucleotides based on the width of the screen. I also created a color coated key for each nucleotide and adjusted its text size based on the width of the screen. To show the data visualy I created a bar graph. I used the map function to map number of nucleotides to the width of the screen. 

**2) Problem RNA**

I solved this problem by replacing all of the T characters and replacing them with U characters. I was able to do that by using this code, DNA_STRING_FOR_rna.replace(/T/g, "U");. After I replaced the T characters with the U characters I drew two genetic sequences that represented the original sequence and the solution sequence. These sequences were color coded and I used the drawstring() function.

**3) Problem REVC**

In order to solve this problem I had to flip the string and then replace all of the T characters to A characters, all of the A characters to T characters, all of the G characters to C characters,and all of the C characters to G characters. First I flipped the string by using this code, let reverseStr = function(str) {return [...str].reverse().join('');} let flip = reverseStr(DNA_STRING_FOR_revc);. I then replaced the characters by using this code,let reverse = flip.replace(/A/g,"t").replace(/T/g,"a").replace(/C/g,"g").replace(/G/g,"c");. I changed the characters to lowercase, so the code does not keep replacing characters. Once I did this I had to capitalize the characters by using this function, toUpperCase(). I then drew two strings by using the drawstring() function. One string was the original and the other string was the solution.

**4) Problem Hamm**

I solved this problem by determining the number of corresponding nucleotides that differ in the two sequences. To demostrate my solution I drew both of the genetic sequences by using the drawstring() function. I then drew thin rectangles through the nucleotides that differed by using the connectors() function. I also have the number of differing nucleotides at the top left of the screen.

**5) Problem Subs**

In order to solve this problem I needed to determine where the substring, ATAT, was located in the genetic sequence. I solved this by creating lines that showed where the ATAT was located. I was able to draw the lines that connected to the genetic sequence that was drawn by using the drawstring() function. I was able to identitfy 3 substrings in the genetic sequence.
