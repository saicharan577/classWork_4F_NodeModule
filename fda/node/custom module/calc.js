const { parse } = require("path")

const url=require(url)
const address ="https://example.com:8000/lo.html?name=DineshKumar&age=33"
const parseAddress=url.parse(address,true)
console.log("Hostname:"+parseAddress.hostname)
console.log("portnumber")