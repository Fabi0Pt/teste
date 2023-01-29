import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("QR received", qr);
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client ready");
});

client.initialize();
