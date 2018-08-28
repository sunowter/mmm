$(function(){
   var currentpage=0
  var total=0
  render(currentpage)
   function render(currentpage){
     $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getmoneyctrl',
       data:{
         pageid:currentpage,
       },
       dataType:'json',
       success:function(info){
       console.log(info)
       var htmStr=template('listTpl',info)
       $(".list").html(htmStr)
       //分页渲染
      //  /求当前的总页数
        total=Math.ceil(info.totalCount/info.pagesize)
        $('.pagenum span').text((currentpage+1)+'/'+total)
         var str=template('optionTpl',{total:total})
        //根据总页数，渲染选项
        $('.pagenum ul').html(str)
     
       }
  
     })
   }

  //点击上一页：
  $('.prev').click(function(){
    currentpage--
    if(currentpage<=0){
      currentpage=0
    }
    render(currentpage)
    console.log(currentpage)
  })
   
  //点击跳转到下一页：
  $('.next').click(function(){
    currentpage++
    if(currentpage>=total){
      currentpage=total
    }
    render(currentpage)
    console.log(currentpage)
  })
   //点击显示ul
  $('.pagenum').click(function(){
    $('.morepage').toggle()
  })
  //点击跳:转到指定的页面
  $('.pagenum').on('click','.morepage li',function(){
    currentpage=$(this).index()+1
    render(currentpage)
  })
   
})




       