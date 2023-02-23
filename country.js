class Country {
    constructor(name, lang, greeting, colors,flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }

    DisplayColors(){
        //where all of the changes happen
        //accessing property
        //this.name  
        document.querySelector("#countryName").innerText = this.name;
        document.querySelector("#officialLanguage").innerText = this.lang;
        document.querySelector("#Helloworld").innerText = this.greeting;
        document.querySelector("#Color1").style.backgroundColor = this.colors[0];
        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
        document.querySelector("#flag").src=this.flag;
         
        }        
        
      }   
 
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"],"https://m.media-amazon.com/images/I/615lstmihqL._AC_SX522_.jpg" );
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],"https://cdn11.bigcommerce.com/s-e2nupsxogj/images/stencil/960w/products/9899/29159/elf6afvhex7c2ww75jk1__25540.1675152373.jpg?c=1" );
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"],"https://tse2.mm.bing.net/th?id=OIP.uY0eKcElXj5g8p5OebEGVwHaEy&pid=Api&P=0");


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
       
    }
    else if (input === "Mexico") {
        country = mexico;
        

    }
    else if (input === "Algeria") {
        country = algeria;
        
    }
    country.DisplayColors();
}


