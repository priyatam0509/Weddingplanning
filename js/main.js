
$(window).on('load',function(){

    //home section slideshow

    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length


    function slideshow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideshow,5000)
    }

    slideshow()

})


$(document).ready(function(){

    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
        peopleFilter($(this).attr("data-target"))
        }
    })
    
    function peopleFilter(target){
        // console.log(target)
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();

    }

    // Gallery popup

    const wHeight = $(window).height();
    // console.log(wHeight)
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");

    let gpIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    // console.log(totalGalleryItems)

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        // console.log(itemIndex)
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })


    $(".gp-counter .next").click(function(){
       if(itemIndex == totalGalleryItems-1){
           itemIndex = 0
       }
       else{
           itemIndex++;
       }
       $(".gallery-popup .gp-img").fadeOut(function(){
        gpSlideShow();
       })
       console.log(itemIndex)
    })


    $(".gp-counter .prev").click(function(){
        if(itemIndex == 0){
            itemIndex = totalGalleryItems-1
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
         gpSlideShow();
        })
        console.log(itemIndex)
     })


    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        // console.log(imgSrc)
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }


    // hide gallery popup
    $(".gp-close").click(function(){
        $("gallery-popup").removeClass("open");
    })
    

    //hide gallery popup when clicked outside of gp-container
    $("gallery-popup").click(function(event){
        console.log(event.target)
        if($(event.target).hasClass("open")){
            console.log("true")
            $(".gallery-popup").removeClass("open");
        }
    })
})