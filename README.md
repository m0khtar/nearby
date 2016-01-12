# nearby
Display nearby locations in the area of interests.

#Prerequisites
- Node.js
- MongoDB
- Google maps api key (places)

#How to?
- gets data from google api, stores them in mongodb (to avoid the query limit).
- fetchs from mongodb, create markers and diplay items using the $near operator.

#Getting Started
Clone and start having fun !

```
$ git clone https://github.com/m0khtar/nearby.git nearby-clone
$ cd nearby-clone
$ git remote rm origin

$ bower install && npm install

$ grunt serve
```

#To do
- add filters
- add search autocomplete
- search history / caching


#Licence
[MIT](https://opensource.org/licenses/MIT)
