class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayColors(){
        //where all of the changes happen
        //accessing property
        //this.name  
          ((c) =>{c=== this.name ;
            document.getElementById("Color1").innerText = `${c.this.colors[0]}`;
         document.getElementById("Color2").innerHTML= `${c.this.colors[1]}`;
       document.getElementById("Color3").innerHTML= `${c.this.colors[2]}`;
        })         
        
      }
      
      

      
    }

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    selectElement = document.querySelector("#CountryList");
    let input = selectElement.value; //Replace "USA" with user input
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
       country.DisplayColors();
    }
    else if (input === "Mexico") {
        country = mexico;
        country.DisplayColors();

    }
    else if (input === "Algeria") {
        country = algeria;
        country.DisplayColors();
    }

}

console.log(this.name[0]);
