#Cats Sharin

##Usage
`docker-compose up --build`

##Api
###`/api/doc` :
###Swagger

###`/api/cast` :
#####GET:
Output
```
[
    {
        "id": 2,
        "name": "Ann",
        "color": "sky-blue pink",
        "breed": "moggy",
        "age": 11,
        "photo": null,
        "price": 100,
        "isBooked": false
    },
    {
        "id": 3,
        "name": "Tom",
        "color": "sky-blue pink",
        "breed": "moggy",
        "age": 2,
        "photo": null,
        "price": 200,
        "isBooked": false
    }
]
```
#####Post:
Input
```
[
    {
        "name": "Tom",
        "color": "sky-blue pink", 
        "breed": "moggy",
        "age": 2,
        "price": 200,
    }
]
```
Output
```
{
    "name": "Tom",
    "age": "2",
    "price": "200",
    "photo": null,
    "id": 4,
    "color": "sky-blue pink",
    "breed": "moggy",
    "isBooked": false
}
```