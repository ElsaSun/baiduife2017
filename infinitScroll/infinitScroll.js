var num=0;
var kt=true; //设定一个开关，控制页面是否继续加载
$(function(){

    for(var i =0;i<30;i++){
        $('.comment_list').append('<li>item'+num+++'</li>');
    }
    setTimeout(function(){
        $('#container').append("<div class='footer'></div>");
    },100);
    $(window).scroll(function(){
        if(kt){
            var win_sc=$(this).scrollTop();
            var win_height=$(window).innerHeight();
            if(win_sc+win_height==$(document).height()){
                kt=false;
                $('.footer').append("<div class='spinner'>"+
                    "<div class='box box_1'></div>"+
                    "<div class='box box_2'></div>"+
                    "<div class='box box_3'></div>"+
                    "<div class='box box_4'></div>"+
                    "<div class='box box_5'></div>"+
                    "</div>");
                setTimeout(add,1000);
                setTimeout(function(){
                    $('#container').append("<div class='footer'></div>");
                },1300);
            }
        }

    })
});

function add (){
    for(var i =0;i<10;i++){
        $('.comment_list').append('<li>item'+num+++'</li>');
    }
    $('.footer').remove();
    kt=true;
}
