$(function(){

  //京东店铺数据获取
  render(0,0)
      $.ajax({

        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:'json',
        success:function(info){
        console.log(info)
        var str=template('navTpl',info)
        $('.jd').html(str)
        $('.nav .navlist a').click(function(){
          $(this).siblings('ul').toggle()
          $(this).parent().siblings().find('ul').hide()
          //获取选中的文本
          $('.navlist').on('click','ul a',function(e){
            e.preventDefault()
            var txt=$(this).text().trim()
          
            // console.log(txt.indexOf('等'))
            if(txt.indexOf('等')!=-1){
              txt=txt.substr(0,2)
            }
            console.log(txt)
            $(this).parent().parent().siblings().find('span').text(txt)
            console.log(shopid)
            console.log(areaid)
            $('.navlist ul').hide()
            var shopid=$(this).data('id')
            var areaid=$(this).data('areaid')
            if(areaid){
              areaid=areaid
            }else(
              areaid=0
            )
            if(shopid){
              shopid=shopid
            }else(
              shopid=0
            )
            render(shopid, areaid)
          })

        })
        }

      })
      //区域信息获取
      $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dataType:'json',
        success:function(info){
          console.log(info)
          var str=template('areaTpl',info)
          $('.area').html(str)
          
        }
      })
        
      //凑单品商品数据获取
      function render(shopid,areaid){

        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
              shopid:shopid,
              areaid :areaid ,
            },
            dataType:'json',
            success:function(info){
              console.log(info)
              var str=template('productTpl',info)
              $('.content ul').html(str)

            }
        })


      }




  })