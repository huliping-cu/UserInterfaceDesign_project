
$(document).ready(function(){
    item = data
    let item_id = item["id"]
    
    console.log("in view.js item is: ", item)
    let itemHolder = $("<div class = 'col-md-4 popular'>")
    let imageHolder = $("<div class = 'col-md-4'>")
    let priceHolder = $("<div class = 'col-md-4'>")
    let descriptionHolder = $("<div class = 'col-md-4'>")


    let itemName = item["name"]
    let itemImg = item["image"]
    let price = item["price"]
    let description = item["description"]
    let reviews = item["reviews"]
    console.log("in view.js itemImg: ", itemImg)

    $.each(reviews, function(i,review){
       console.log(review)
       let row = $("<div class = 'row bottom_row_padding'><br>")
       $(row).append(review)
       $("#reviewDiv").prepend(row)
      
    })

 

        $(itemHolder).append(itemName)
        $(imageHolder).append(itemImg)
        $(priceHolder).append(price)
        $(descriptionHolder).append(description)

        $("#nameColumn").append(itemHolder)
        $("#imageColumn").append(imageHolder)
        $("#priceColumn").append(priceHolder)
        $("#descriptionColumn").append(descriptionHolder)


        

        $("#editButton").click(function(e){
            console.log("clicked!")
            console.log("itemName: ",itemName)
            console.log("itemid: ",item_id)
            //pass in the id                
            window.location.href = "http://127.0.0.1:5000/edit/" + item_id
    })







})