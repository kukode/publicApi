/**
 * @description cek water on api onwater.io
 */

 const axios = require('axios')

 function getWater(){
    let water = 'https://api.onwater.io/api/v1/results/-7.731599,108.619935?access_token=XsUvP-LRM-7nZcyZZUgx'
    let noWater = 'https://api.onwater.io/api/v1/results/-7.491320,108.609530'
    
    let url = axios.get(water)
                .then((result) => {
                    console.log(result.data)    
                }).catch((err) => {
                    console.log(err)
                });
        return url
 }
 getWater()
     
 