window.onscroll = function(){
    if(document.body.clientWidth > 900){
        if(((document.documentElement.scrollTop > 600)) && ((document.documentElement.scrollTop < 1300))){
            console.log("If: ", document.documentElement.scrollTop.toString());
            document.body.style.backgroundColor = "red";
        }else if((document.documentElement.scrollTop > 1300)){
            console.log("else if: ", document.body.scrollTop.toString());
            document.body.style.backgroundColor = "White";
        }else{
            console.log("else: ", document.body.scrollTop.toString());
            document.body.style.backgroundColor = "#1243a4";
        }
    }
    else{
        if((document.body.scrollTop > 50) || (document.documentElement.scrollTop > 50)){
            document.body.style.backgroundColor = "White";
        }else if((document.body.scrollTop > 800) || (document.documentElement.scrollTop > 800)){
            document.body.style.backgroundColor = "White";
        }
        else{
            document.body.style.backgroundColor = "#1243a4";
        }
    }
    
}