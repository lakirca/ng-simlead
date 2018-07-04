import { Component, OnInit } from "@angular/core";
import { EmailService } from "../../email.service";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.css"]
})
export class MailComponent implements OnInit {
  constructor(private _emailService: EmailService) {}

  ngOnInit() {}

  onSubmit(name, email, message) {
    this._emailService
      .sendEmail({
        from: email,
        to:
          // "Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>",
          "lakirca@gmail.com",
        name: name,
        text: message
      })
      .subscribe(
        () => {
          console.info("mail did send");
        },
        err => console.log(err)
      );
  }
}
