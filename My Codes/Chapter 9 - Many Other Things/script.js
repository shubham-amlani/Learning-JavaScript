const loadScript=(src, hello)=>{
    //Creates an element script in document.
    let script = document.createElement("script");
    //.src tells to add src attribute to the script and store value src in it.
    script.src = src;
    //appends the script tag with attribute src containing url given in argument to function loadScript.
    document.body.appendChild(script);
    //tells that now script is loaded along with url.
    script.onload = function scriptOnload(){
        console.log("Loaded Script with SRC: " + src);
        hello(null, src);
    }
    script.onerror = function scriptOnerror(){
        console.log("Error while loading script with SRC: " + src);
        hello(new Error("Error loading script with SRC: "));
    }
    //function give in second argument is now running.
    //end of funtion loadScript.
}

const hello=(error, src)=>{
    console.log("Hello World !, hello function got running");
    if(error){
        console.log("Error loading script");
        return;
    }
    else{
        console.log("Script loaded Successfully");
        return;
    }
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", hello)