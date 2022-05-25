const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path:"config.env" });



module.exports.sell = async (req, res) => {

    const client = Binance()
    const client2 = Binance({
        apiKey: "tkvR0fxbBD8LeJotggSdnp1nzxip2DmOqJLR3cFQ4aYASydgjEB5cZiLKKmPGbIY",
        apiSecret: "DERLHx1KYhMNsyYOHwRrQ7rn60EBoeMRcOPYRqyE96fmnYjWvuAEQkRpFP67Ht0k",
         getTime:()=> new client.time()
      })
      
      
    async function salman(){
      const data = await client2.order({
        symbol: 'BTCUSDT',
        side: 'SELL',
        quantity: '0.00040',
        price: '29721.00',
      })
      
      return data
    
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{res.status(500).send(e.message)})
    
}