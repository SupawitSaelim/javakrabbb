function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
};

function logQuote(quote){
    console.log(quote + ' Yes.. ');
};

createQuote("eat your vegetables!", logQuote); 