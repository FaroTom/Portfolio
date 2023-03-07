import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  @ViewChild('nameField') nameField:any;
  @ViewChild('emailField') emailField:any;
  @ViewChild('messageField') messageField:any;
  @ViewChild('sendButton') sendButton:any;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    /* Disable input fields and button **/
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    /* Animation while email is being sent **/

    /* Send mail **/
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://tom-krause.developerakademie.net/send_mail/send_mail.php', 
    {
      method: 'POST',
      body: fd
    }
    )

    /* Shows alert - mail was sent **/

    /* Clears input fields **/
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    /* Reenables input fields and button **/
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  toLocation(location: any) {
    var scrollSection = document.getElementById(location)?.offsetTop;
    var goal = scrollSection! - 100;
    window.scrollTo({ top: goal, behavior: 'smooth'});
  }

}
