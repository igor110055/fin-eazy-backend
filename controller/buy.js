const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy = async (req, res) => {
  

    const client = Binance()
    const client2 = Binance({
      apiKey: "tkvR0fxbBD8LeJotggSdnp1nzxip2DmOqJLR3cFQ4aYASydgjEB5cZiLKKmPGbIY",
      apiSecret: "DERLHx1KYhMNsyYOHwRrQ7rn60EBoeMRcOPYRqyE96fmnYjWvuAEQkRpFP67Ht0k",
        getTime:()=> new client.time()
      })
      
    
    async function salman(){
      const data1 = await client2.order({
        symbol: 'BTCUSDT',
        side: 'BUY',
        quantity: '0.00041',
        price: '29600.00'
      })
 
      //29891.00
  }

    
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}