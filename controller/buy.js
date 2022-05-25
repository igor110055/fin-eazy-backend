const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy = async (req, res) => {

    const client = Binance()
    const client2 = Binance({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
        getTime:()=> new client.time()
      })
      
    
    async function salman(){
      const data = await client2.order({
        symbol: 'BTCUSDT',
        side: 'BUY',
        quantity: '0.00041',
        price: '29891.00',
      })
      
      
      return data
    
   }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}