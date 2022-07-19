

function onlySpaces(str) {
    return /^\s*$/.test(str);
  }

function display_popular_items(data){
    $("#updates").empty()
    console.log("data",data)
    var flag = onlySpaces(data)
    console.log(flag)
    console.log("type of data", typeof 'data')


    
    if (data.length ==0){
        let row = $("<br><div class = 'row'> No Results Found! </div>")

        $("#updates").append(row)
    }

    else{

 
        cnt = data.length
        let row = $("<br><div class = 'row'>"+cnt+ " Results Found! </div>")
        $("#updates").append(row)
        
        $.each(data,function(i, item){
            // console.log("each is: ",item)
            
            let row = $("<br><div class = 'row'>")
            $("#updates").append(row)

            let itemHolder = $("<div class = 'col-md-2' > </div>")
            let itemName = item["name"]
            let itemId = item["id"]

            //choose items to be displayed on welcome page here:
            $(itemHolder).append(itemName)
            $(row).append(itemHolder)
            
            $(itemHolder).click(function(e){
                console.log("itemId: ", itemId)

                //pass in the id                
                let item_id = item["id"]
                console.log("item_id: ",item_id)
                window.location.href = "view/"+item_id;
            })
        })
    }
}



$(document).ready(function(){
    $("#inputBox").focus();
    console.log("item_to_return",itemReturned,"enteredName",enteredName)

    // console.log(itemReturned==[], enteredName=='')
    if(enteredName=='' ){
        $("#updates").empty()
        $("#inputBox").val('');
        $("#inputBox").focus();

    }
    else{
        display_popular_items(itemReturned)

    }

})
