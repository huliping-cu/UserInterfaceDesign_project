






function make_item(name,price,image,description,review,current_id){
    let item = {
        "id": current_id,
        "name": name,
        "image": image,
        "price": price,
        "description":description,
        "reviews": [
            review
        ]
    }

    return item
}




$(document).ready(function () {

    console.log("entered edit.js!")
    $("#input-name").val("")
    $("#input-price").val("")
    $("#input-image").val("")
    $("#input-description").val("")
    $("#input-review").val("")
    $("#input-name").focus();


    // console.log("current_id",current_id)
    let itemName = item["name"]
    let itemImg = item["image"]
    let price = item["price"]
    let description = item["description"]
    let review = item["reviews"].toString()
    let id = item["id"]


    console.log("id",id)

    $("#input-name").val(itemName)
    $("#input-price").val(price)
    $("#input-image").val(itemImg)
    $("#input-description").val(description)
    $("#input-review").val(review)


    $( "#dialog-confirm" ).dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Discard Changes": function() {
            $( this ).dialog( "close" );
            window.location.href = "/view/" + item["id"];
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
    });

    $("#editButton").click(function () { 


        // get user input values
            let name = $("#input-name").val().trim()
            let price = $("#input-price").val().trim()
            let img = $("#input-image").val().trim()
            let description = $("#input-description").val()
            let review = $("#input-review").val().trim()
            
            // let image = "<img id = 'img' src='" + img + "'>"
            let reviews = []
            reviews.push(review)
            console.log("name: ",name,"price",price)
            // console.log("id: ")


        let valid = true  
        
        // valid = validate_inputs(name,price,image,description,review)
        if (valid == true) {
           
            var temp = {
                "id": id,
                "name": name,
                "price":price,
                "image":img,
                "description":description,
                "reviews":reviews

            }

            console.log("temp data",temp)

            
            $.ajax({
                type: "POST",
                url: "/edit_data",
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(temp),
                success: function (response) {
                    console.log("response",response)

                    window.location.href = "http://127.0.0.1:5000/view/" + response
                },
                error: function(request, status, error){
                    console.log("Error");
                    console.log(request)
                    console.log(status)
                    console.log(error)
                }
            });

        }

        $("#input-name").val("")
        $("#input-price").val("")
        $("#input-image").val("")
        $("#input-description").val("")
        $("#input-review").val("")

        $("#input-name").focus();
        
        
        
    });

    $("#discardButton").click(function(event){
        console.log("click")
        event.preventDefault();
        $( "#dialog-confirm" ).dialog("open", {
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
              "Discard Changes": function() {
                $( this ).dialog( "close" );
                window.location.href = "/view/" + item["id"];
              },
              Cancel: function() {
                $( this ).dialog( "close" );
              }
            }
        });
    })
});
