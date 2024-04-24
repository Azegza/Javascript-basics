function LetterFinder( word, match) // declare a func and  parameters
{
for( var i=0; i< word.length ; i++) // iterate each letter in word to check if there is a match
{
        if ( word[i] == match ) // check if the match is true
        {
            console.log("Found a", match, "at", i)
        }
        else {
            console.log(" No", match, " found at", i)

        }


}
}
LetterFinder("apple", "t");
