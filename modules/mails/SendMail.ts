import { Attachment } from "nodemailer/lib/mailer";

import { watch } from "chokidar";
import { readFileSync } from "fs";
import { createTransport } from "nodemailer";

interface Button {
    link: string;
    message: string;
}

var ButtonTemplate: string = "";
var HTMLTemplate: string = "";

const watcher = watch('modules/mails/template', { persistent: true, interval: 500 });
watcher.on('add', (path) => ReloadEmailTemplates())
watcher.on('change', (path) => ReloadEmailTemplates())

const ReloadEmailTemplates = () => {
    ButtonTemplate = String(readFileSync("modules/mails/template/button.html"))
    HTMLTemplate = String(readFileSync("modules/mails/template/main.html"))
}

const GenerateButton = (page_url: string, url: string, message: string) => {
    return ButtonTemplate.replace(/{url}/g, `${page_url}${url}`).replace(/{message}/g, message)
}

export default async function (email: string, subject: string, content: string, button: Button | null, attachments: Attachment[], customfields?: Record<string, string>) {
    setTimeout(async () => {
        if (HTMLTemplate == "") ReloadEmailTemplates();
        var emailContent = HTMLTemplate.replace(/{content}/g, content).replace(/{button}/g, (!button) ? "" : GenerateButton(String(process.env.URL), button.link, button.message));
        if (customfields)
            for (const customfield of Object.keys(customfields)) emailContent = emailContent.replace(new RegExp(customfield, "g"), customfields[customfield]);


        const transporter = createTransport({
            host: process.env.MAILSERVER,
            port: Number(process.env.MAILPORT),
            auth: {
                user: String(process.env.MAILUSERNAME),
                pass: String(process.env.MAILPASSWORD),
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        try {
            await transporter.sendMail({
                from: `"Swiftly Solution" <${process.env.MAILUSERNAME}>`,
                to: email,
                subject: subject,
                html: emailContent,
                attachments: attachments
            })
        } catch (err) {
            console.log(err)
        }
    }, 10)
}