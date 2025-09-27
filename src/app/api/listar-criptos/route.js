import axios from "axios";

export async function GET() {
  try {
    const resposta = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY, // sua chave
      },
    });
    return new Response(JSON.stringify(resposta.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // se precisar liberar para outro domínio
      },
    });
  } catch (erro) {
    return new Response(JSON.stringify({ erro: erro.message }), { status: 500 });
  }
}