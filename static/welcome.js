test = [
    "Shake Shack",
    "Toast"
]



// function display_popular_items(data){
//     $("#updates").empty()


//     console.log("data",data)

//     $.each(data,function(i, item){
//         // console.log("item",item)

//         let row = $("<div class = 'row'>")
//         $("#updates").append(row)

//         let itemHolder = $("<div class = 'col-md-4'>")
//         let itemName = item["name"]
//         let imgHolder = $("<div class = 'col-4'>")
//         //choose items to be displayed on welcome page here:
//         if(itemName=="Thor" || itemName=="Captain America" || itemName =="Black Panther"){
//             // console.log("itemName: ", itemName)
//             //append the item image to the homepage
//             imgHTML = "<img src='" + item["image"] + "'>"
//             // console.log("imgHTML",imgHTML)
                        
//             $(itemHolder).append(item["name"])
//             $(row).append(itemHolder)
//             $(itemHolder).click(function(e){
//                 //pass in the id                
//                 let item_id = item["id"]
//                 console.log("item_id: ",item_id)
//                 window.location.href = "view/"+item_id;
//         })

       
//         // let delete_button_div = $("<div class = 'col-md-2'>")
//         // let delete_button = $("<button class='btn btn-warning remove'>X</button>")

//         // $(delete_button).click(function(){

//         //     id = item["id"]
//         //     console.log("deleted log: ", item,"deleted button: ",item["id"])

//         // })
//         // $(delete_button_div).append(delete_button)
//         // $(row).append(delete_button_div)

//         }



//     })
// }




function display_popular_items(data){
    $("#updates").empty()


    console.log("data",data)

    $.each(data,function(i, item){
        // console.log("item",item)

        let itemHolder = $("<div class = 'col-md-4 popular'>")
        let nameHolder = $("<div class = 'bold'>")
        let imgHolder = $("<div>")
        let itemName = item["name"]
        // let imgHolder = $("<div class = 'col-md-4'>")
        //choose items to be displayed on welcome page here:
        if(itemName=="Thor" || itemName=="Captain America" || itemName =="Black Panther"){
            // console.log("itemName: ", itemName)
            //append the item image to the homepage
            imgHTML = "<img style='height:120px;width:150px;' src='" + item["image"] + "'>"
            // console.log("imgHTML",imgHTML)
             
            
            $(nameHolder).append(item["name"])
            $(imgHolder).append(imgHTML)

            $(itemHolder).append(nameHolder)
            $(itemHolder).append(imgHolder)
            $("#updates").append(itemHolder)

            $(itemHolder).click(function(e){
                //pass in the id                
                let item_id = item["id"]
                console.log("item_id: ",item_id)
                window.location.href = "view/"+item_id;
        })
    }



    })
}
$(document).ready(function(){

    $("#inputBox").focus();
    $("#inputBox").autocomplete({
        source: test
    });

    //when the page loads, display popular items
    display_popular_items(data)                        

    // $("#submitButton").click(function(){
    //     if(!produce_warning()){
    //         let name = $("#client").val()
    //         let reams = $("#reams").val() 
    //         let new_sale = {
    //             "salesperson":"Liping Hu",
    //             "client": name,
    //             "reams":reams,
    //         }
    //         save_sale(new_sale)
    //         $("#client").focus();
    //         console.log("sales before deleting: ",sales)
    //     }

        
    // });

    // $("#reams").keyup(function(e){
    //     if(e.which == 13){
    //         if(!produce_warning()){
    //             let name = $("#client").val()
    //             let reams = $("#reams").val() 
    //             let new_sale = {
    //                 "salesperson":"Liping Hu",
    //                 "client": name,
    //                 "reams":reams,
    //             }
    //             save_sale(new_sale)
    //             $("#client").focus();
    //         }
    
    //     }
    // });



})