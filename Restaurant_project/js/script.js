$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $("#all").click(function() { 
        $(".local").show("slow");
        $(".asian").show("slow");
        $(".european").show("slow");
        $(".drink").show("slow");


        $("#all").addClass("choose");
        $("#local").removeClass("choose");
        $("#asian").removeClass("choose");
        $("#european").removeClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#local").click(function() { 
        $(".local").show("slow");
        $(".asian").hide("slow");
        $(".european").hide("slow");
        $(".drink").hide("slow");


        $("#all").removeClass("choose");
        $("#local").addClass("choose");
        $("#asian").removeClass("choose");
        $("#european").removeClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#asian").click(function() { 
        $(".local").hide("slow");
        $(".asian").show("slow");
        $(".european").hide("slow");
        $(".drink").hide("slow");


        $("#all").removeClass("choose");
        $("#local").removeClass("choose");
        $("#asian").addClass("choose");
        $("#european").removeClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#european").click(function() { 
        $(".local").hide("slow");
        $(".asian").hide("slow");
        $(".european").show("slow");
        $(".drink").hide("slow");


        $("#all").removeClass("choose");
        $("#local").removeClass("choose");
        $("#asian").removeClass("choose");
        $("#european").addClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#drink").click(function() { 
        $(".local").hide("slow");
        $(".asian").hide("slow");
        $(".european").hide("slow");
        $(".drink").show("slow");


        $("#all").removeClass("choose");
        $("#local").removeClass("choose");
        $("#asian").removeClass("choose");
        $("#european").removeClass("choose");
        $("#drink").addClass("choose");
      
      });

      $("#bichicken").show();
      $("#bipork").hide();
      $("#bibimchicken").addClass("select");
      $("#bibimpork").removeClass("select");
      $("#bibimchicken").click(function () {
        $("#bibimchicken").addClass("select");
        $("#bibimpork").removeClass("select");
        $("#bichicken").show();
        $("#bipork").hide();
        });

      $("#bibimpork").click(function () {
        $("#bibimpork").addClass("select");
        $("#bibimchicken").removeClass("select");
        $("#bichicken").hide();
        $("#bipork").show();
        });


        //pizza
        $(".smallpizza").show();
        $(".mediumpizza").hide();
        $(".largepizza").hide();
        $("#small").click(function() { 
          $(".smallpizza").show();
          $(".mediumpizza").hide();
          $(".largepizza").hide();
         
  
  
          $("#small").addClass("choose");
          $("#medium").removeClass("choose");
          $("#large").removeClass("choose");
          
        
        });

        $("#medium").click(function() { 
          $(".smallpizza").hide();
          $(".mediumpizza").show();
          $(".largepizza").hide();
         
  
  
          $("#small").removeClass("choose");
          $("#medium").addClass("choose");
          $("#large").removeClass("choose");
          
        
        });

        $("#large").click(function() { 
          $(".smallpizza").hide();
          $(".mediumpizza").hide();
          $(".largepizza").show();
         
  
  
          $("#small").removeClass("choose");
          $("#medium").removeClass("choose");
          $("#large").addClass("choose");
          
        
        });

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();


          // small pizza
        $("#chickenpizza1").click(function (){
          $("#psmall1").show();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza1").addClass("choose");
          $("#porkpizza1").removeClass("choose");
          $("#beefpizza1").removeClass("choose");
          $("#seafoodpizza1").removeClass("choose");
          $("#sausagepizza1").removeClass("choose");
        });

        $("#porkpizza1").click(function (){
          $("#psmall1").hide();
          $("#psmall2").show();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();
          
          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza1").removeClass("choose");
          $("#porkpizza1").addClass("choose");
          $("#beefpizza1").removeClass("choose");
          $("#seafoodpizza1").removeClass("choose");
          $("#sausagepizza1").removeClass("choose");
        });

        $("#beefpizza1").click(function (){
          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").show();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza1").removeClass("choose");
          $("#porkpizza1").removeClass("choose");
          $("#beefpizza1").addClass("choose");
          $("#seafoodpizza1").removeClass("choose");
          $("#sausagepizza1").removeClass("choose");
        });

        $("#seafoodpizza1").click(function (){
          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").show();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza1").removeClass("choose");
          $("#porkpizza1").removeClass("choose");
          $("#beefpizza1").removeClass("choose");
          $("#seafoodpizza1").addClass("choose");
          $("#sausagepizza1").removeClass("choose");
        });

        $("#sausagepizza1").click(function (){
          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").show();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza1").removeClass("choose");
          $("#porkpizza1").removeClass("choose");
          $("#beefpizza1").removeClass("choose");
          $("#seafoodpizza1").removeClass("choose");
          $("#sausagepizza1").addClass("choose");
        });
        //small pizza end
        
        // medium pizza
          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();

        $("#chickenpizza2").click(function (){
          $("#pmedium1").show();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza2").addClass("choose");
          $("#porkpizza2").removeClass("choose");
          $("#beefpizza2").removeClass("choose");
          $("#seafoodpizza2").removeClass("choose");
          $("#sausagepizza2").removeClass("choose");
        });

        $("#porkpizza2").click(function (){
          $("#pmedium1").hide();
          $("#pmedium2").show();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza2").removeClass("choose");
          $("#porkpizza2").addClass("choose");
          $("#beefpizza2").removeClass("choose");
          $("#seafoodpizza2").removeClass("choose");
          $("#sausagepizza2").removeClass("choose");
        });

        $("#beefpizza2").click(function (){
          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").show();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza2").removeClass("choose");
          $("#porkpizza2").removeClass("choose");
          $("#beefpizza2").addClass("choose");
          $("#seafoodpizza2").removeClass("choose");
          $("#sausagepizza2").removeClass("choose");
        });

        $("#seafoodpizza2").click(function (){
          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").show();
          $("#pmedium5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza2").removeClass("choose");
          $("#porkpizza2").removeClass("choose");
          $("#beefpizza2").removeClass("choose");
          $("#seafoodpizza2").addClass("choose");
          $("#sausagepizza2").removeClass("choose");
        });

        $("#sausagepizza2").click(function (){
          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").show();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#chickenpizza2").removeClass("choose");
          $("#porkpizza2").removeClass("choose");
          $("#beefpizza2").removeClass("choose");
          $("#seafoodpizza2").removeClass("choose");
          $("#sausagepizza2").addClass("choose");
        });
        // medium pizza end


        // large pizza
          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();

          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
        $("#chickenpizza3").click(function (){
          $("#plarge1").show();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();
          
          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();
          
          $("#chickenpizza3").addClass("choose");
          $("#porkpizza3").removeClass("choose");
          $("#beefpizza3").removeClass("choose");
          $("#seafoodpizza3").removeClass("choose");
          $("#sausagepizza3").removeClass("choose");
        });

        $("#porkpizza3").click(function (){
          $("#plarge1").hide();
          $("#plarge2").show();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();
          
          $("#chickenpizza3").removeClass("choose");
          $("#porkpizza3").addClass("choose");
          $("#beefpizza3").removeClass("choose");
          $("#seafoodpizza3").removeClass("choose");
          $("#sausagepizza3").removeClass("choose");
        });

        $("#beefpizza3").click(function (){
          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").show();
          $("#plarge4").hide();
          $("#plarge5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();
          
          $("#chickenpizza3").removeClass("choose");
          $("#porkpizza3").removeClass("choose");
          $("#beefpizza3").addClass("choose");
          $("#seafoodpizza3").removeClass("choose");
          $("#sausagepizza3").removeClass("choose");
        });

        $("#seafoodpizza3").click(function (){
          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").show();
          $("#plarge5").hide();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();
          
          $("#chickenpizza3").removeClass("choose");
          $("#porkpizza3").removeClass("choose");
          $("#beefpizza3").removeClass("choose");
          $("#seafoodpizza3").addClass("choose");
          $("#sausagepizza3").removeClass("choose");
        });

        $("#sausagepizza3").click(function (){
          $("#plarge1").hide();
          $("#plarge2").hide();
          $("#plarge3").hide();
          $("#plarge4").hide();
          $("#plarge5").show();

          $("#psmall1").hide();
          $("#psmall2").hide();
          $("#psmall3").hide();
          $("#psmall4").hide();
          $("#psmall5").hide();

          $("#pmedium1").hide();
          $("#pmedium2").hide();
          $("#pmedium3").hide();
          $("#pmedium4").hide();
          $("#pmedium5").hide();
          
          $("#chickenpizza3").removeClass("choose");
          $("#porkpizza3").removeClass("choose");
          $("#beefpizza3").removeClass("choose");
          $("#seafoodpizza3").removeClass("choose");
          $("#sausagepizza3").addClass("choose");
        });

        // large pizza end



      //detail price

      $('.addtocart').click(function(e)  {
        e.preventDefault();

        let id=$(this).data('id');
        let name=$(this).data('name');
        let price=$(this).data('price');
        console.log(id,name,price);
        

        let items = {
            item_id : id,
            item_name : name,
            item_price : price,
            qty : 1,

        }

        let itemString  =localStorage.getItem('shops')
        let itemArray;
        if(itemString == null){
            itemArray = [];

        }else{
            itemArray = JSON.parse(itemString);
        }

        let status = false;

        $.each(itemArray,  function(i,v){
            if(id == v.item_id){
                status = true;
                v.qty++;
            }
        })

        if(status == false){
            itemArray.push(items);
        }


        
        let itemData = JSON.stringify(itemArray);

        localStorage.setItem('shops', itemData);
        count();
    });
    function count(){
      let itemString = localStorage.getItem('shops');
      if(itemString){
          let itemArray = JSON.parse(itemString);
          
      if(itemArray != 0){
  
          
          let count = itemArray.length;
          // let count = 0;
          // $.each(itemArray, function(i , v){
          //     count += v.qty;
          // })
          $('#count_number').text(count);
      }
      }
  }
  $(document).ready(function(){
    count();
    getData();
    function getData(){
    let itemStr = localStorage.getItem("shops");
    console.log(itemStr);
    if(itemStr){
      let itemArr = JSON.parse(itemStr);
      let data = '';
      let j = 1;
      let total =0;

      $.each(itemArr, function(i,v){
        data += `<tr>
          <td>${j++}</td>
          <td>${v.item_name}</td>
          <td>${v.item_price}</td>
          <td><button class="btn btn-sm btn-outline-success min" data-item_i="${i}" > - </button> ${v.qty} <button class="btn btn-sm btn-outline-success max" data-item_i="${i}" > + </button></td>
          <td>${v.item_price * v.qty}</td>
        </tr>`
        total += v.item_price * v.qty;


      });
      data += `<td colspan="4">Total</td>
      <td>${total}</td?
      `
      $('#data_body').html(data);
    }else{
      let data= "";
      $('#data_body').html(data);
    }
  }
    $("#data_body").on('click' , '.min' , function(){

      let item_i = $(this).data('item_i');
      let itemStr = localStorage.getItem('shops');
      if(itemStr){
        let itemArr= JSON.parse(itemStr);

        $.each(itemArr, function (i,v){
          if(item_i == i){
            v.qty--;
            if(v.qty == 0){
              itemArr.splice(item_i,1);
            }

          }
        });

        let itemData = JSON.stringify(itemArr);
        localStorage.setItem('shops' , itemData);
        getData();
        count();
      }

    });

    $("#data_body").on('click' , '.max' , function(){
      let item_i = $(this).data('item_i');
      let itemStr = localStorage.getItem('shops');
      if(itemStr){
        let itemArr= JSON.parse(itemStr);

        $.each(itemArr, function (i,v){
          if(item_i == i){
            v.qty++;
            
          }
        });

        let itemData = JSON.stringify(itemArr);
        localStorage.setItem('shops' , itemData);
        getData();
        count();
      }

    });

    $('#order').click(function(e){
      e.preventDefault();
      $("#alert").text("You have ordered successfully!");
      $("#alert").addClass("alert-success");
      localStorage.clear();
      getData();
      count();
    });

  });


  
      
      
    

});