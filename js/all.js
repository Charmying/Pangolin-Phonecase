// ====================   導覽列   ==================== //

// ====================   漢堡   ==================== //

let ham_line = document.querySelector(".ham_line");
ham_line.addEventListener("click", function(){
    let ham_menu = document.querySelector("ul.ham_menu");
    let ham_btns = document.querySelectorAll(".ham_btn");
    ham_menu.classList.toggle("active");
    ham_btns.forEach(function(ham_btn){
        ham_btn.classList.toggle("active");
    });
    let ham_mask = document.querySelector("div#ham_mask");
    ham_mask.classList.toggle("noshow");
    ham_mask.addEventListener("click", function(){
        ham_mask.setAttribute("style", "animation: fadeout 1s linear")
        ham_mask.classList.add("noshow");
        ham_menu.classList.remove("active");
        ham_btns.forEach(function(ham_btn){
            ham_btn.classList.remove("active");
    });
    });
});

let p_subsel = document.querySelector("ol.ham_subsel");

$(".plus_line").on("click", function(){
    $("ol.ham_subsel").slideToggle();
});

let plus_line_btn = document.querySelector(".plus_line");
plus_line_btn.addEventListener("click", function(){
    let p_vertical = document.querySelector("span.vertical");
    p_vertical.classList.toggle("active");
    let p_horizontal = document.querySelector("span.horizontal");
    p_horizontal.classList.toggle("active");
    let p_title = document.querySelector(".plus_line a");
});


// ------ Footer RWD ------
let ftitle = document.getElementsByClassName("ftitle");
for(let i = 0; i < ftitle.length; i++){
    let fsub = document.getElementsByClassName("fsub");
    let farrow = document.getElementsByClassName("arrow");
    ftitle[i].addEventListener("click", function(){

        let fmenu_name = document.getElementsByClassName("fmenu_name");
        if(fsub[i].style.maxHeight == ""){
            fsub[i].style.maxHeight = fsub[i].scrollHeight + "px"; // 設定 CSS：max-height
            farrow[i].style.transform = "rotate(-180deg)";
        }else{
            fsub[i].style.maxHeight = ""; // 移除 CSS： max-height
            farrow[i].style.transform = "rotate(0deg)";
        }
    });
}



// ====================   回到最上面   ==================== //
$(function(){
	$('#backtop').click(function(){ 
		$('html,body').animate({scrollTop: 0}, 700);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 350 ){
			$('#backtop').fadeIn(500);
		} else {
			$('#backtop').stop().fadeOut(500);
		}
	}).scroll();
});

$(window).on("scroll", function(){
    if ($(document).scrollTop() >= $(document).height() - $(window).height() - 200){
        $('#backtop').css("animation", "popping 2s ease infinite");
    }else{
        $('#backtop').css("animation", "none");
    };

    // if ($(document).scrollTop() >= $(document).height() - $(window).height() - 200)
});

















// ==================== Scroll 事件: 動畫 active ==================== //

window.addEventListener("scroll", function(){
    let slidein = document.getElementsByClassName("slidein");
    for(let i = 0; i < slidein.length; i++){
        if( ((this.scrollY + this.innerHeight) - slidein[i].offsetHeight / 3) > slidein[i].offsetTop){
                // console.log("here");
            
            slidein[i].classList.add("active");
        }else{
            slidein[i].classList.remove("active");
        };
    }

    let fadein = document.getElementsByClassName("fadein");
    for(let i = 0; i < fadein.length; i++){
        if( ((this.scrollY + this.innerHeight) - fadein[i].offsetHeight / 3) > fadein[i].offsetTop){
            // console.log("here");
        
            fadein[i].classList.add("active");
        }else{
            fadein[i].classList.remove("active");
        };
    }

    let shrink = document.getElementsByClassName("shrink");
    for(let i = 0; i < shrink.length; i++){
        if( ((this.scrollY + this.innerHeight) - shrink[i].offsetHeight / 3) > shrink[i].offsetTop){
            // console.log("here");
        
            shrink[i].classList.add("active");
        }else{
            shrink[i].classList.remove("active");
        };
    }
    
});






























// ----- newsletter input ------
$("input.the_btn").on("click", function(){
    alert("訂閱成功");
    $("input.the_text").val("");
});























