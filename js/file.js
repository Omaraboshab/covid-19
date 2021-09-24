new WOW().init();
$(document).ready(function(){
    
    $('.MoodIcon').click(function(){
        
        if($(this).hasClass('lightMood')){
            $(this).removeClass('lightMood')
            $(this).addClass('darkMood')
            $(this).css('color','white')
            $('section').css('background','black')
            $('header').css('background','black')
        }
        else if($(this).hasClass('darkMood')){
            $(this).removeClass('darkMood')
            $(this).addClass('lightMood')
            $(this).css('color','black')
            $('section').css('background','white')
            $('header').css('background','white')
        }

        



    });






    let a1=document.getElementById("a1")
    let a2=document.getElementById("a2")
    let a3=document.getElementById("a3")
    let a4=document.getElementById("a4")
    let a5=document.getElementById("a5")
    let a6=document.getElementById("a6")
    let a7=document.getElementById("a7")


    $(window).scroll(function(){
        let x=$(window).scrollTop();
    console.log(x);

    if(x > 90){
        $(".navbar").css('background',"white")
    }
    else{
        $(".navbar").css('background',"transparent")

    }

    if(x > 0 && x<=885){
        $(a1).css("color","red")
        $(a2).css("color","#394B6C")
        $(a3).css("color","#394B6C")
        $(a4).css("color","#394B6C")
        $(a5).css("color","#394B6C")
        $(a6).css("color","#394B6C")
        $(a7).css("color","#394B6C")
    }
    else if(x > 885 && x<=2200){
        $(a1).css("color","#394B6C")
        $(a2).css("color","red")
        $(a3).css("color","#394B6C")
        $(a4).css("color","#394B6C")
        $(a5).css("color","#394B6C")
        $(a6).css("color","#394B6C")
        $(a7).css("color","#394B6C")

    }
    
    else if(x > 2200 && x<=2965){
        $(a1).css("color","#394B6C")
        $(a2).css("color","#394B6C")
        $(a3).css("color","red")
        $(a4).css("color","#394B6C")
        $(a5).css("color","#394B6C")
        $(a6).css("color","#394B6C")
        $(a7).css("color","#394B6C")

    }
    else if(x > 2965 && x<=5050){
        $(a1).css("color","#394B6C")
        $(a2).css("color","#394B6C")
        $(a3).css("color","#394B6C")
        $(a4).css("color","red")
        $(a5).css("color","#394B6C")
        $(a6).css("color","#394B6C")
        $(a7).css("color","#394B6C")

    }
    else if(x > 5050 && x<=6360){
        $(a1).css("color","#394B6C")
        $(a2).css("color","#394B6C")
        $(a3).css("color","#394B6C")
        $(a4).css("color","#394B6C")
        $(a5).css("color","red")
        $(a6).css("color","#394B6C")
        $(a7).css("color","#394B6C")

    }
    else if(x > 6360 && x<=7225){
        $(a1).css("color","#394B6C")
        $(a2).css("color","#394B6C")
        $(a3).css("color","#394B6C")
        $(a4).css("color","#394B6C")
        $(a5).css("color","#394B6C")
        $(a6).css("color","red")
        $(a7).css("color","#394B6C")

    }
    else if(x > 7225 && x<=7965){
        $(a1).css("color","#394B6C")
        $(a2).css("color","#394B6C")
        $(a3).css("color","#394B6C")
        $(a4).css("color","#394B6C")
        $(a5).css("color","#394B6C")
        $(a6).css("color","#394B6C")
        $(a7).css("color","red")

    }

    else{
        $(a1).css("color","#394B6C")
        $(a2).css("color","#394B6C")
        $(a3).css("color","#394B6C")
        $(a4).css("color","#394B6C")
        $(a5).css("color","#394B6C")
        $(a6).css("color","#394B6C")
        $(a7).css("color","#394B6C")
    }





    });



});

