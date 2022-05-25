const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path:"config.env" });



module.exports.sell = async (req, res) => {

    const client = Binance()
    const client2 = Binance({
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        getTime: () => new client.time() 
      })
      
      
    async function salman(){
      const data = await client2.order({
        symbol: 'BTCUSDT',
        side: 'SELL',
        quantity: '0.00040959',
        price: '29893.00',
      })
      
      return data
    
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{res.status(500).send(e.message)})
    
}