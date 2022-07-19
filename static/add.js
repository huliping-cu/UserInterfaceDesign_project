


function validate_number(input) {
    isValid = true
    feedback = ""
    
    input = Number(input) 

    if(input==""){
        feedback = "Empty input not allowed"
        $("#input-price").addClass("is-invalid")
        isValid = false}
    else{
        if (input== NaN || !Number.isInteger(input)){
            feedback = "Enter number here"
            $("#input-price").addClass("is-invalid")
            isValid = false}
        }    
        
    $("#price_warning").html(feedback)
   
    return isValid
}

function validate_string(input,div, input_div){

    isValid = true
    feedback = ""

    if(input==""){
        feedback = "Empty string not allowed"
        input_div.addClass("is-invalid")
        isValid = false
    }
    div.html(feedback)
   
    return isValid
}





function validate_name(name) {

    // $("#warning").empty()
    isValid = true
    feedback = ""

    if(name==""){
        feedback = "Empty input not allowed"
        $("#input-name").addClass("is-invalid")
        isValid = false}
    else{
         $.each(data, function (i, item) {
            // console.log("item[name] is: ",item)
            if (name.toString().toLowerCase()==item["name"].toLowerCase()){
                feedback = "Name given already exist, choose another name please"
                $("#input-name").addClass("is-invalid")
                isValid = false}
        });
    }

    $("#warning").html(feedback)
   
    return isValid
}


function validate_inputs(name,price,image,description,review) {
    var valid = false

    
    isvalid_review = validate_string(review,$("#warning-review"),$("#input-review"))
    if(!isvalid_review){
        $("#input-review").focus();
    }
    
    isvalid_description = validate_string(description,$("#warning-description"),$("#input-description"))
    if(!isvalid_description){
        $("#input-description").focus();
    }

    isvalid_image = validate_string(image,$("#warning-image"),$("#input-image"))
    if(!isvalid_image){
        $("#input-image").focus();
    }
    isvalid_price = validate_number(price)
    if(!isvalid_price){
        $("#input-price").focus();
    }

    isvalid_name = validate_name(name)
    if(!isvalid_name){
        $("#input-name").focus();
    }

    if (isvalid_name && isvalid_price && isvalid_image  && isvalid_description && isvalid_review){

        valid = true


    }


    return valid
}




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

function send_data(item){
    let item_id = item["id"]
    console.log("item_id: ",item_id)

    $("#updates").empty()
    let row = $("<div class = 'row bottom_row_padding'>")
    $("#updates").append(row)
    let top_nitification = $("<div class = 'col-md-4' id ='top_nitification' > New item successfully created </div>")
    let link_holder = $("<div class = 'col-md-4 see_here'> see it here </div>")
    $("top-notification").empty()
    $(row).append(top_nitification)
    $(row).append(link_holder)

    $(link_holder).click(function(e){
        console.log("data: ", data)
        // pass in the id                
        let item_id = item["id"]
        console.log("item_id: ",item_id)
        window.location.href = "view/"+item_id;
    })

    console.log("item before ajax",item)
    $.ajax({
        type: "POST",
        url: "add",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(item),
        success: function (response) {
            console.log("response:",response);

        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

    $("#input-name").val("")
    $("#input-price").val("")
    $("#input-image").val("")
    $("#input-description").val("")
    $("#input-review").val("")

    $("#input-name").focus();
    
}
$(document).ready(function () {


    console.log("current_id",current_id)
    $('.alert').hide()

    $("#new-form").submit(function(event) {
        $("#input-name").focus();
        console.log("click")
        event.preventDefault()

            // get user input values
            let name = $("#input-name").val().trim()
            let price = $("#input-price").val().trim()
            let image = $("#input-image").val().trim()
            let description = $("#input-description").val()
            let review = $("#input-review").val().trim()
            console.log("name",name);

            var valid  = validate_inputs(name,price,image,description,review)
            console.log("valid",valid);

        
            new_item = make_item(name,price,image,description,review,current_id)
            if(valid){
                send_data(new_item)
            }
  
            
        
    })

});
