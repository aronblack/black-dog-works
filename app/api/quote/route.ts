import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const photoFiles = formData.getAll('photos') as File[]
    const attachments = await Promise.all(
      photoFiles
        .filter(f => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }))
    )

    await resend.emails.send({
      from: 'Black Dog Works <onboarding@resend.dev>',
      to: process.env.QUOTE_TO_EMAIL!,
      subject: `New quote request from ${name}`,
      replyTo: email,
      attachments,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}