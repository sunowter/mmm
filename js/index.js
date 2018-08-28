$(function(){
      // 功能1
      // 已进入页面发送ajax请求渲染nav
        $.ajax({
          type:'get',
          url:'http://127.0.0.1:9090/api/getindexmenu',
          dataType:'json',
          success:function(info){
            console.log(info)
            var htmlStr=template('navTpl',info)
            $('.mma-nav ul').html(htmlStr)
          }
        })


    //  功能2
     //点击更多显示三行，在点击隐藏
     $('.mma-nav' ).on('click','ul li:nth-child(8)',function(){
       $('.mma-nav ul li').each(function(i,v){
         var index=v.dataset.index
          if(index>7){
             $('.mma-nav ul li').eq(index).toggleClass()
          }
       })
     })
        


     //功能3：渲染折扣列表
     $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
          console.log(info)
          var htmlStr=template('recommendTpl',info)
          $('.mma-recommend ul').html(htmlStr)
        }





     })
  

     //回到顶部
     $('#goTop').click(function(){
      $('html,body').animate({
        scrollTop:0
      },1000)
     })




    
})