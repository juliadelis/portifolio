import { sendMail } from "../../../services/email";

export async function POST(req, res) {
  const { email, subject, mensagem } = await req.json();
  const response = await sendMail({
    from: email,
    to: "juliadelis2@gmail.com",
    subject,
    html: `<h2>Email:</h2> <p>${email}</p>
    <br/>
   <h2> Mensagem: </h2> <p>${mensagem}</p>`,
  });
  console.log(response);
  return Response.json({ message: "success" });
}

export async function GET(request, res) {
  console;
  return Response.json({ data: "oi" });
}
