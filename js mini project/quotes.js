//Random Quote generator 

function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s= today.getSeconds();
    var ampm= " ";

    m=checkTime(m);

    if(h>12){
        h=h-12;
        ampm="PM";
    }
    else if(h==12){
        h=12;
        ampm="AM";
    }
    else if(h<12){
        ampm="AM"
    }
    
    else{
        ampm="PM";
    };
    

    document.getElementById('display').innerHTML=h+":"+m+ampm;
    var t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
    if(i<10){
        i="0"+ i
    }
        return i;
    
}
function startDate()
{
    var d=new Date();
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML=days[d.getDay()]+" | "+
    [d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

function genquote()
{
    var randomNum=Math.floor(Math.random()*11)+1;
    document.getElementById('quote').innerHTML=quotes[randomNum];

}
function msg()
{      var msg="Have a great day!";
    document.getElementById('msg').innerHTML=msg;
}
    var quotes=["\"To succeed in your mission, you must have a single-minded devotion to your goal.\"<br><br>-Dr.APJ.Abdul Kalam",
                "\"Life is not fair; get used to it.\"<br><br>-Bill Gates",
                "\"Creativity is just connecting things.\"<br><br>-Steve Jobs",
                "\"If music be the food of love, play on.\"<br><br>-Shakespeare",
                "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"<br><br>-Mother Terasa",
                "\"I love technology while growing up...\"<br><br>-Sundar Pichai",
                "\"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.\"<br><br>-Mark Zuckerberg",
                "\"Everybody has equal opportunity and I think that is true for everything.\"<br><br>- Mukesh Ambani",
                "\"Happiness is when what you think, what you say, and what you do are in harmony.\"<br><br>-Mahatma Gandhiji",
                "\"Truth can be stated in a thousand different ways, yet each one can be true.\"<br><br>-Swami Vivekananda",
                "\"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.\"<br><br>- Albert Einstein",
                "\"All our dreams can come true if we have the courage to pursue them.\"<br><br> - Walt Disney",
]
 
