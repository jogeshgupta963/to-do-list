var axios = require("axios")
let abcd = "hello World"
let url = "/translation/text/translate?input=" + abcd
var req = axios.post(url)


console.log(req)