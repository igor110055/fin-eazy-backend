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
        price: '29891.00',
      })
      const data2 = await client2.order({
        symbol: 'ETHUSDT',
        side: 'BUY',
        quantity: '0.005238',
        price: '1959.450000',
      })
      
      
      return {
        data1,data2
      }
    
   }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}