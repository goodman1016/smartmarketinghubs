import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      jobTitle,
      name,
      email,
      phone = "",
      address = "",
      linkedin = "",
      resume = "",
      message = "",
    } = body;

    // ✅ Service account auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // ✅ Append row (order = columns)
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            jobTitle,                 // Job Title
            name,                     // Full Name
            email,                    // Email
            phone,                    // Phone
            address,                  // Address
            linkedin,                 // LinkedIn
            resume,                   // Resume Link
            message,                  // About
          ],
        ],
      },
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Apply API error:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
