import axios from "axios";


export async function GET(request, { params }) {
    const {id} = await params
    try {
        const resposta = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}`, {
            headers: {
                "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY, 
            },
        });
        
        return new Response(JSON.stringify(resposta.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://karemarket.vercel.app", 
      },
    });

    }
    catch(erro){
        console.log(erro)
    }
    
}