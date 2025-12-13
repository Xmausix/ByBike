export async function sendConfirmationMail(data) {
	console.log(`
📧 EMAIL
Link do tras: ${data.accessLink}
PDF + GPX dostępne po kliknięciu
`);
}
