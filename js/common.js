
     //回到顶部
     $('#goTop').click(function(){
      $('html,body').animate({
        scrollTop:0
      },1000)
     })

     //从地址栏获取所传参数
     function getsearch(key){
       var str=decodeURI(location.search)//?categoryId=1&categoryId=1
       str=str.slice(1)//categoryId=1&categoryId=1
       var arr=str.split('&')//['categoryId=1','categoryId=1']
       var obj={};
       arr.forEach(function(v,i){
         var key=v.split('=')[0]
         var value=v.split('=')[1]
         obj[key]=value
       })
       return obj[key]
     }