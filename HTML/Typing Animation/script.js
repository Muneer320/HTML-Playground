var i = 0;
var text = 'Hello I am Muneer Alam, I am a non-professional coder and this is my test webpage.';
type();

function type(){
    if (i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}