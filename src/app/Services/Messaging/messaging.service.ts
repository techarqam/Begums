import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {


  constructor(
    public http: HttpClient,
  ) {
  }


  async sendMessage(mess, phones) {
    // console.log("mesage :", mess)
    // console.log("phones :", phones)
    for (let i = 0; i < phones.length; i++) {

      let urr1 = "http://api.msg91.com/api/sendhttp.php?country=91&sender=BEGUMS&route=4&mobiles="
      let phone = phones[i];
      let urr2 = "&authkey=248515ASS3bXdTM6iH5bf6582b&message=";
      let urr3 = mess;
      let fU = urr1 + phone + urr2 + urr3;
      this.http.get(fU, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
      }).subscribe(snip => {
        console.log(snip)
      })
    }
  }
}
