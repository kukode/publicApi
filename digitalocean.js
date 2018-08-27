/**
 * @description latihan real api
 */

const axios = require('axios')

function getDO(){

    let result = axios.get('https://s2k7tnzlhrpw.statuspage.io/api/v1/summary.json')
                    .then((result) => {
                        let obj = result.data
                        
                       console.log(obj)
                        
                    }).catch((err) => {
                        console.log(err)
                    });

    return result
}
// getDO()

function getDOComponent(){

    let result = axios.get('https://s2k7tnzlhrpw.statuspage.io/api/v1/components.json')
                    .then((result) => {
                        let obj = result.data
                        console.log(obj)
                        
                    }).catch((err) => {
                        console.log(err)
                    });

    return result
}
// getDOComponent()

function getIncident(){
    let url = axios.get('https://s2k7tnzlhrpw.statuspage.io/api/v1/incidents.json')
                .then((result)=>{
                    let res = result.data;
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
    return url
}   
getIncident()