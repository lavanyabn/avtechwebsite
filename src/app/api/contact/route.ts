// import { google } from "googleapis";

// export async function POST(req: Request) {
//   const body = await req.json();

//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.GOOGLE_CLIENT_EMAIL,
//       private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     },
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   await sheets.spreadsheets.values.append({
//     spreadsheetId: process.env.GOOGLE_SHEET_ID,
//     range: "Sheet1!A:E",
//     valueInputOption: "USER_ENTERED",
//     requestBody: {
//       values: [[
//         body.name,
//         body.email,
//         body.phone,
//         body.message,
//         new Date().toISOString(),
//       ]],
//     },
//   });

//   return new Response(JSON.stringify({ success: true }), { status: 200 });
// }
