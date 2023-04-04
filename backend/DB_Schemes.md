```javascript
##Users##

{
	userID : Number,
    username : {
        type: string,
         minLength:2,
         lowercase: true,
         required: true,
        Validate: func(specialCharacters)
      },
 	password(encryped) : {type : String, minLength:8, required:True},
    email : {
        type: String,
        minLength: 2,
         lowercase: true,
         required: true,
        Validate: func(correct Structure)
      },
    creditCard: {
        cardNumber:Number,
        expire: Date,
        validate: func
    },
   	postsLiked: {
      	type : Number,
       	minCount: 0,
     },
   	tripSearches: [{
      locationID: Number,
      searchesCount : Number,
    }],
    packageSearches: [{
      	count:number,
        packageID:Number,
        searchedAt:Date
    }],
    packagePurchased: [{
      	count:number,
        packageID:Number,
        createdAt:Date
    }],
}

##Packages##

{
 price: Number,
 description : String,
 location: {city : string , country : string ,locationID:Number},
 photos : [String], // remote service url's location
},

posts
{
  location: {city : string , country : string, Validate:Func, minLength:2}
  Description: Number,
  photos : [String], // remote service url's location
  comments: [{description: string , username: string , likes : string}]
  likes : Number,
  PostViewes : Number,
  createDate : Date,
},

##TripSearches##

{
  searchCount:Number,
  flight[{
    flightID:Number,
    flightPrice: Number,
    flightDate:Date,
    company:String}],
  accomndation:[{
    accomndationID:Number,
    accomndationPrice: Number,
    accomndationtDate:Date,
    company:String
  }],
}

##TripPurchased##

{
  flight[{flightID:Number,flightPrice: Number,flightDate:Date}],
  accomndation:[{accomndationID:Number,accomndationPrice: Number,accomndationtDate:Date}],
  userID:Number
}
```
