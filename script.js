fetch('http://quotes.stormconsultancy.co.uk/random.json' )
    .then(data=>data.json())
    .then(quoteData =>{

        const quoteText=quoteData.quote;
        
        const quoteElement=document.getElementById('quoteElement')
        
        /*console.log(typeof(quoteAuthor));
        console.log(typeof(quoteElement));*/

        quoteElement.innerHTML=quoteText;//object
        
       
       /* const quoteAuthor=quoteData.author;//string
        const Author=document.getElementById('By')

        
        Author.innerHTML=quoteAuthor;*/
    })