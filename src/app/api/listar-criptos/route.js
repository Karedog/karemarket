import axios from "axios";

export async function GET() {
  try {
    const criptoQuote = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY, 
      },
    })
    
    let criptoIds = ""
    
    criptoQuote.data.data.forEach(item =>{
      criptoIds = `${criptoIds}${item.id},`
    })
    
    const retirarUltimaLetra = criptoIds.split('')
    retirarUltimaLetra.pop()
    criptoIds = retirarUltimaLetra.join('')

    const criptoMeta = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${criptoIds}`, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY, 
      },
    })
    

    return new Response(JSON.stringify({Quote:criptoQuote.data.data,Meta:criptoMeta.data.data}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", 
      },
    });

  } catch (erro) {
    return new Response(JSON.stringify({ erro: erro.message }), { status: 500 });
  }
}