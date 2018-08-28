$(function(){
  ///发送ajax请求，渲染导航
  $.ajax({
     type:'get',
     url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
     dataType:'json',
     success:function(info){
      
      var htmlStr=template('navTpl',info)
      $('.nav ul').html(htmlStr)
      var w=info.result.length
      $('.nav ul').css('width',w+'rem')
      console.log($('.nav ul').css('width'))
      scroll()  
     }
    
  })

  //导航栏滑动
  // 注册鼠标触屏开始的事件，监听鼠标开始移动的坐标
  function scroll(){
    var start=0;
    var move=0;
    var distance=0;
    var navul=document.querySelector('.nav ul')
    var nav=document.querySelector('.nav')
    var current=0;//当前ul在x轴的偏移量
    // 动态获取ul的宽度
   
    var minLeft=nav.offsetWidth-navul.offsetWidth
    console.log(nav.offsetWidth,navul.offsetWidth,minLeft)
    //鼠标触屏开始事件
    nav.addEventListener('touchstart',function(e){
      start=e.targetTouches[0].clientX
  
    })
    //鼠标移动事件
    nav.addEventListener('touchmove',function(e){
   
      move=e.targetTouches[0].clientX
      distance=move-start
      // 鼠标移动的时候，ul跟着移动,在现有的位置基础上进行移动
      navul.style.transition='none'
      navul.style.transform='translateX('+(current+distance)+'px)'
     
    })
    //注册触屏结束事件
    nav.addEventListener('touchend',function(e){
      current+=distance
      // console.log(start,move, distance,current)

     if(current>0){
       console.log(current+'f')
       current=0
      }
      if(current<=minLeft){
        current=minLeft
      }
      console.log(current+'b')
      navul.style.transition='transform 1s'
      navul.style.transform='translateX('+current+'px)'
      
     start=0;
     move=0;
     distance=0;
    })
  

  }  


  //根据标题id将获取改标题对应的商品列表然后渲染到页面
  // 一进入页面先渲染第一页
  render()
  function render(id){
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data:{
        titleid:id ||0
      },
      dataType:'json',
      success:function(info){
        console.log(info)
        var htmlStr=template('listTpl',info)
        $(".content ul").html(htmlStr)
      
      }
    })

  }


  //点击不同的导航渲染不同的页面
   $('.nav').on('click','a',function(e){
    var id=$(this).data('id')
    console.log(id)
     e.preventDefault()
     render(id)



   })
})