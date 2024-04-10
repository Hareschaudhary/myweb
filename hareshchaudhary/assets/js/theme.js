

$(document).ready(()=>{
    let i =1 ;

    $(".toggle").click(()=>{
        $(".offcanvas").toggleClass("main")
    });

    $(".prev").click(()=>{
        i--
        $(".slides").css("left",`${- i*100}%`);
        if (i<=0) {
            i=3
        }
        console.log(i)
    });
    
    $(".next").click(()=>{
        $(".slides").css("left",`${- i*100}%`);
        i++
        if(i > 2){
            i=0
        };
    });
});
