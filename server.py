from distutils.log import debug
from multiprocessing.connection import Client
import string
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)


data = [
    
    {
        "id": 1,
        "name": "Captain America",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw8422e231/productimages/main/790780C01_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$60",
        "description":"Reporting for duty: carry our Marvel The Avengers Captain America Shield Dangle Charm and share your love for the Marvel Cinematic Universe with the world. Captain America's legendary shield shines bright in hand-applied red, white and blue enamel. Engraved with the message, 'TRUE TO YOURSELF,' this sterling silver stunner symbolizes hope and protection. Add this charm and more of your favorite heroes to our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet.",
        "reviews":[
            "This is my favorite Avengers charm! The enameling is well done, colors are vibrant and the engraving is clear to read. Would definitely recommend even to a casual fan!",
        ]
    },
    {
        "id": 2,
        "name": "Thor",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw56409ac9/productimages/modelshot/790483C01_ABC123_MODEL_eCOM_02_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$60",
        "description":"Bring the thunder with our Marvel The Avengers Thor's Hammer Dangle Charm and share your love for the Marvel Cinematic Universe with the world. Hand-finished in sterling silver, Thor's hammer is brought to life with swirling brown enamel, engraved scratch marks and Asgardian-style rune symbols. The side of the hammer is engraved with “Worthy” as a reminder of the source of Thor’s power. Add this charm and more of your favorite heroes to our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet.",
        "reviews":["This charm has a nice weight to it and dangles nicely. Engraved on the back it says Worthy."]
    },
    {
        "id": 3,
        "name": "Black Panther",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw65d5d035/productimages/modelshot/790783C01_ABC123_MODEL_eCOM_02_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$70",
        "description":"Choose loyalty with our Marvel The Avengers Black Panther Charm and share your love for the Marvel Cinematic Universe with the world. The warrior king is designed in his signature pose and features hand-painted black enamel with sterling silver lines defining his suit.' Wakanda Forever!' is engraved on the back of his helmet. Add Black Panther and more of your favorite heroes to our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet.",
        "reviews":[
        
            "After ordering arrived in 2 days. Really love the charm",
            "This charm is so cute & looks great. My daughter loved it.",
            "Absolutely fantastic, the positioning is so poignant, colour stands out, most beautiful charm"
        ]
        
    },
        {
        "id": 4,
        "name": "Iron Man",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw057ef13b/productimages/main/760268C01_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$70",
        "description":"Iron Man saves the day in a 14k gold-plated charm, with white, black and transparent red enamel accented by two round cubic zirconia stones in each of his palms. At the center of his chest, you’ll find a white enamel-filled heart-shaped arc reactor heart giving him life, with an inspiring message, “FIND YOUR POWER,” on his back, along with the The Avengers logo. This charm is carried on a sleek 14k gold-plated Pandora Moments Snake Chain Bracelet.",
        "reviews":[
        
            "After ordering arrived in 2 days. Really love the charm",
            "This charm is so cute & looks great. My daughter loved it.",
            "Absolutely fantastic, the positioning is so poignant, colour stands out, most beautiful charm"
        ]
        
    },
        {
        "id": 5,
        "name": "Hulk",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwb3b3b670/productimages/singlepackshot/790220C01_V5_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$70",
        "description":"I am Hulk. Unleash the big guy with our Marvel The Avengers Hulk Charm and share your love for the Marvel Cinematic Universe with the world. Hand-finished in sterling silver and painted with transparent green enamel, Hulk is captured in his characteristic pose and engraved with his trademark slogan, ""HULK SMASH!"" A symbol of the many sides that exist in all of us, add this charm along with your other favorite heroes to our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet.",
        "reviews":[
            ''
        ]
        
    },
        {
        "id": 6,
        "name": "Infinity Gauntlet",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw5ad95947/productimages/singlepackshot/760661C01_V5_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$265",
        "description":"The colourful and almighty Infinity Gauntlet makes a powerful and fashionable statement. The 14K gold-plated Rolo Chain Necklace, which is adjustable to three lengths, carries the Marvel The Avengers Infinity Gauntlet Dangle Charm with one Infinity Stone on each knuckle in green, blue, red, purple and orange man-made crystals — plus, a yellow man-made crystal at the center of the front. A moveable index finger makes this dangle charm come to life.",
        "reviews":[
            ''
            
        ]
        
    },
        {
        "id": 7,
        "name": "Black Widow",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw57c9ff66/productimages/modelshot/790785C01_ABC123_MODEL_eCOM_02_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$70",
        "description":"Be ready for action with our Marvel The Avengers Black Widow Dangle Charm and share your love for the Marvel Cinematic Universe with the world. Featuring hand-applied enamel to bring her iconic red hair and black suit to life, our Black Widow charm is also engraved with the powerful message, ""Actually, I can."" Add Black Widow and more of your favorite heroes to our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet.",
        "reviews":[
            "The ring is very pretty but none of Pandora's ring sizes ever seem to fit any of my fingers (either too tight or too loose). The stones end up turning to the bottom of my finger very quickly but I know the next size smaller would've been too tight."
        ]
        
    },
        {
        "id": 8,
        "name": "Infinity Stones",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe730de8a/productimages/main/160779C01_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$100",
        "description":"Harness the power of the Infinity Stones with our Marvel The Avengers Infinity Stones Ring. Perfectly balanced, as all things should be, our 14k gold-plated ring features six colorful man-made crystals, representing the most coveted objects in the universe. The inside of the band is engraved with each stone's corresponding power: space, reality, power, soul, mind and time. Pair this ring with other battle-ready pieces from our Marvel x Pandora collection.",
        "reviews":[
        
            "After ordering arrived in 2 days. Really love the charm",
            "This charm is so cute & looks great. My daughter loved it.",
            "Absolutely fantastic, the positioning is so poignant, colour stands out, most beautiful charm"
        ]
        
    },
        {
        "id": 9,
        "name": "Avengers",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw94a3cda6/productimages/main/590784C00_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$95",
        "description":"Assemble your heroes on our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet. Hand-finished in sterling silver, this charm holder features a clasp engraved with the iconic Avengers logo and etched line details. It's the perfect way to showcase your favorite characters and tell the world about your love for the Marvel Cinematic Universe. Style it with up to 18 charms.",
        "reviews":[
            "Absolutely fantastic, the positioning is so poignant, colour stands out, most beautiful charm",
            "OBSESSED! Me and my sister absolutely love Marvel. This collection (and the Disney collection) are *chefs kiss*"
        ]
        
    },
        {
        "id": 10,
        "name": "Inron Man Arc Reactor",
        "image":"https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw9d8b647e/productimages/modelshot/790788C01_ABC123_MODEL_eCOM_02_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5",
        "price": "$50",
        "description":"Carry the source of Iron Man's power with our Marvel The Avengers Iron Man Arc Reactor Charm. Representing Iron Man's artificial heart, our sterling silver charm features transparent blue enamel and textured details to recreate the look of mechanical machinery. Engraved on the back are the iconic words shared between Tony Stark as Iron Man and his daughter: ""I love you 3000."" Add this charm and more of your favorite heroes to our Pandora Moments Marvel The Avengers Logo Clasp Snake Chain Bracelet.",
        "reviews":[
            "Absolutely fantastic, the positioning is so poignant, colour stands out, most beautiful charm",
            "Hij is gewoon perfect! Niets aan op te merken en de I love you 3000 maakt het gewoon helemaal af!"
        ]
        
    }




]


# ROUTES


# @app.route('/')
# def hello_world():
#    return render_template('hello_world.html') 
# 
# 
current_id = 11

@app.route('/', methods = ['GET','POST'])
def showPopular():
    return render_template('welcome.html',data = data)   


@app.route("/search", methods = ['GET','POST'])
def search():

    print(request.args)
    print(request.args.get("inputBox"))
    enteredName = request.args.get("inputBox")
    print("entered info: ", enteredName)
    item_to_return = []

    if enteredName.isspace() == True: 
        enteredName = ''
        item_to_return = []
    else:

        for item in data:
            #if enteredName is space, clear whitespace
            var = ' '
            print(var.isspace())
            if enteredName.isspace() == True: 
                enteredName = ''
                item_to_return = []
            else:
                if enteredName.lower().strip() in item["name"].lower():

                    item_to_return.append(item)
    print("item_to_return",item_to_return,"enteredName",enteredName)



    return render_template('search.html',enteredName=enteredName, itemReturned = item_to_return)

@app.route("/view/<id>",methods=['GET','POST'])
def view(id = 0):

    global data
    item2 = ""
    # get the item with the exact id
    for item in data:
        # print("item['id']: ",item["id"])
        if item["id"] == int(id):
            temp = "<img id = 'img' src='" + item["image"] + "'>"
            item2={
                "id":item["id"],
                "price":item["price"],
                "name":item["name"],
                "description":item["description"],
                "reviews":item["reviews"],
                "image":temp
            }


    return render_template('view.html', data=item2)

@app.route("/add",methods = ['GET','POST'])
def add():
    global current_id
    global data
    print("data:", data)

    new_item = request.get_json()
    print("new item is:", new_item)

    if new_item is not None :
        new_item["id"] = current_id
        data.append(new_item)
        current_id += 1
    
        # print("data:", data)
    # print("new item is now:", new_item)

    

    # return jsonify(url="view/"+str(new_item["id"]))
    return render_template('add.html', data=data, current_id = current_id)


@app.route('/edit/<id>',methods=['GET','POST'])
def edit(id=0):
    global data
    item3 = ""

    new_item = request.get_json()
    print("new item is:", new_item)

    for item in data:  
        # print("item[id] is: ",item["id"] )  
        if item["id"] == int(id):
            # item = new_item
            current_id = item["id"]

            item3={
                "id":item["id"],
                "price":item["price"],
                "name":item["name"],
                "description":item["description"],
                "reviews":item["reviews"],
                "image":item["image"]
            }
    # print("data is:", data)


    return render_template('edit.html', item=item3,data = data, current_id = current_id)






@app.route('/edit_data', methods=['GET', 'POST'])
def add_review():
    global data
    # global current_id
    print("hello:")



    json_data = request.get_json()
    print("json_data:",json_data)

    name = json_data["name"]
    id = json_data["id"]
    price = json_data["price"]
    image = json_data["image"]
    description = json_data["description"]
    reviews = json_data["reviews"]


    for item in data:  
        if item["id"] == int(id):
            item["id"] = id
            item["name"] = name
            item["image"] = image
            item["price"] = price
            item["description"] = description
            item["reviews"] = reviews


    return jsonify(id)

if __name__ == '__main__':
   app.run(debug = True)




