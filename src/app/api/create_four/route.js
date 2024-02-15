import { sendMail } from "../../../services/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { email, subject, mensagem } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "juliadelis2@gmail.com",
      subject,
      html: `<h2>Email:</h2> <p>${email}</p>
  <br/>
 <h2> Mensagem: </h2> <p>${mensagem}</p>`,
    });
    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: "error", error });
  }
}

export async function GET(request, res) {
  console;
  return Response.json({ data: "oi" });
}
