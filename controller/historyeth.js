const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path:"config.env" });



module.exports.historyeth = async (req, res) => {

    const client = Binance()
    const client2 = Binance({
        apiKey: "tkvR0fxbBD8LeJotggSdnp1nzxip2DmOqJLR3cFQ4aYASydgjEB5cZiLKKmPGbIY",
        apiSecret: "DERLHx1KYhMNsyYOHwRrQ7rn60EBoeMRcOPYRqyE96fmnYjWvuAEQkRpFP67Ht0k",
         getTime:()=> new client.time()
      })
      
      
    async function salman(){
   const data=await client2.myTrades(
 {symbol:"ETHUSDT"}
   )
//    res.send(data)
   res.send(
data
   )
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{res.status(500).send(e.message)})
    
}