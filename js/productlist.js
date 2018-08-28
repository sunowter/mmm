$(function(){
  var id=getsearch("categoryId")
  var currentpage=1;
  var total=0
  // console.log(id)
   $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcategorybyid',
    data:{
      categoryid:id,
    },
    dataType:'json',
    success:function(info){
    // console.log(info)
    var htmlStr=template('navTpl',info)
    $('.nav').html(htmlStr)
    //  根据nav导航发送ajax请求，渲染商品详情
    }
   })

   //把页面渲染封装城方法
   render()

   function render(currentpage){
     currentpage=currentpage ||1
     $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getproductlist',
       data:{
         pageid:currentpage,
         categoryid:id,
       },
       dataType:'json',
       success:function(info){
        // console.log(info)
        var htmlStr=template('itemTpl',info)
        $('.content ul').html(htmlStr)
        //求当前的总页数
        total=Math.ceil(info.totalCount/info.pagesize)
        $('.pagenum span').text(currentpage+'/'+total)
         var str=template('optionTpl',{total:total})
        //根据总页数，渲染选项
        $('.pagenum ul').html(str)
     
       }
  
     })
   }
  //  console.log(currentpage)
  //点击上一页：
  $('.prev').click(function(){
    currentpage--
    if(currentpage==0){
      currentpage=1
    }
    render(currentpage)
  })
   
  //点击跳转到下一页：
  $('.next').click(function(){
    currentpage++
    if(currentpage>total){
      currentpage=total
    }
    render(currentpage)
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