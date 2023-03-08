import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  @ViewChild('nameField') nameField: any;
  @ViewChild('emailField') emailField: any;
  @ViewChild('messageField') messageField: any;
  @ViewChild('sendButton') sendButton: any;

  @Input() name?: string;
  @Input() email?: string;
  @Input() message?: string;

  showLoadingAnimation = false;
  showAlertEmail = false;

  /* Updates input design depending on input value length **/
  updateDesignNameInput() {
    if (this.name?.length == 0 || this.name == undefined) {
      this.nameField.nativeElement.classList.add('input-red')
    } else {
      this.nameField.nativeElement.classList.remove('input-red')
    }
  }

  updateDesignEmailInput() {
    if (this.email?.length == 0 || this.email == undefined) {
      this.emailField.nativeElement.classList.add('input-red')
    } else {
      this.emailField.nativeElement.classList.remove('input-red')
    }
  }

  updateDesignMessageInput() {
    if (this.message?.length == 0 || this.message == undefined) {
      this.messageField.nativeElement.classList.add('textarea-red')
    } else {
      this.messageField.nativeElement.classList.remove('textarea-red')
    }
  }

  /* Resets design to standard if input loses focus while being marked red **/
  resetDesignNameInput() {
    if (this.nameField.nativeElement.classList.contains('input-red')) {
      this.nameField.nativeElement.classList.remove('input-red')
    }
  }

  resetDesignEmailInput() {
    if (this.emailField.nativeElement.classList.contains('input-red')) {
      this.emailField.nativeElement.classList.remove('input-red')
    }
  }

  resetDesignMessageInput() {
    if (this.messageField.nativeElement.classList.contains('textarea-red')) {
      this.messageField.nativeElement.classList.remove('textarea-red')
    }
  }



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
    this.showLoadingAnimation = true;

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
    ).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
    }).then(() => {
      this.success();
    }).catch((error) => {
      this.error(error);
    });

    /* Clears input fields **/
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    /* Reenables input fields and button **/
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    /* Hides success alert **/
    setTimeout(() => {
      this.showAlertEmail = false;
    }, 5000)
  }

  /* Shows alert - mail was sent, stops loading animation **/
  success() {
    setTimeout(() => {
      this.showLoadingAnimation = false;
    }, 800)
    setTimeout(() => {
      this.showAlertEmail = true;
    }, 800);
  }

  /* Function gets called if there was an error (not on server-side) **/
  error(error:any) {
    this.showLoadingAnimation = false;
    alert('something went wrong')
    console.log(error)
  }

  toLocation(location: any) {
    var scrollSection = document.getElementById(location)?.offsetTop;
    var goal = scrollSection! - 100;
    window.scrollTo({ top: goal, behavior: 'smooth' });
  }

}
