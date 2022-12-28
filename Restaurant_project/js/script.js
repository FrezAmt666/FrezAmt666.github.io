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
      localStorage.clear();
      getData();
      count();
    });

  });
      
      
    

});