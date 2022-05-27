# fin-eazy-backend
Crypto has been a main discussion in social media for a while.Lots of Beginner investors in crypto are losing money because of lack of proper knowledge.These investors are vulnerable to rug pulls and exit pumps.
Our product FinEazy helps in diversifying their portfolio by investing in a bunch of crypto assets to mitigate risk.Making a crypto basket and investing in this basket suggested by crypto experts.(Like what small case by zerodha does(They do not provide crypto baskets)).
<br/>
This repository is the backend for fin eazy 
rest api endoints
router.get("getprice/",) To getprice of all crypto currencies
router.get('getprice/number rannging from 1-5') gives you buckets each containing Collection of coins
router.get("getprice/home",) To get price, analytics of the trending coins right now.
router.post("getprice/buy") To actually buy a bucket of coins, here we buy the capsule number 5 so make sure to have enough balance before you call the function
router.post("getprice/sell") To sell
router.get("getprice/historybtc") To get your transaction history buying bitcoins
router.get("getprice/historyeth")  To get your transaction history buying ethereum
router.get("getprice/balance") To get your account balance
the endpoints /buy,/sell,/balance,/historyeth,btc and balance requires you to be authenticated by providing your api key and api secret which you can get from your Binance account.



<br/>
We are building website initially, for crypto investors in which they can use their existing Crypto Exchange to invest in this basket.
<br/>
For example: 
The investor can use Binance/kucoin/gate.io
Or any other crypto exchange which they are already using.The basket will be brought/sold at the exchange in which the user is using.
(They can use any exchange of their choice)
<br/>
  This solution could could help investors from 
    1)saving time for research.
    2)Bearing huge losses.
As we expand,
We are also planning to expand this By adding Android,ios support.
Also we are also planning to provide Dentralised exchange support.
Eg:Uniswap
<br/>




