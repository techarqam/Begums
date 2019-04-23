import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';
import { UserService } from '../Users/user.service';
import { MessagingService } from '../Messaging/messaging.service';
import { FestivitiesService } from '../Festivities/festivities.service';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  birthTemplate: string;
  cDob = moment().format("DDMM");
  birthDayArrPhone: Array<any> = [];
  birthDayArr: Array<any> = [];


  constructor(
    private db: AngularFirestore,
    public toastCtrl: ToastController,
    public userService: UserService,
    public messageService: MessagingService,
    public festService: FestivitiesService,
  ) {
    this.getTemplate();
  }

  getTemplate() {
    this.db.doc(`Templates/Birthday`).snapshotChanges().subscribe(snap => {
      let temp: any = snap.payload.data();
      this.birthTemplate = temp.Message;
    })
  }
  async sendBirthDayWishes() {
    this.db.doc(`BDs/${moment().format("YYYYMMDD")}`).get().subscribe(snap => {
      if (snap.exists) {
        this.presentToast("Birthdays for today Sent !!")
        console.log("Birthdays for today Sent !!");
      } else {
        this.userService.getallUsers().subscribe(snap => {
          snap.forEach(snip => {
            let temp: any = snip;
            temp.DOB = moment(temp.DOB).format("DDMM");
            if (temp.DOB == this.cDob) {
              this.birthDayArr.push(temp);
              this.birthDayArrPhone.push(temp.Phone);
            }
          })
          this.messageService.sendMessage(this.birthTemplate, this.birthDayArrPhone).then(() => {
            console.log(this.birthDayArr)
            this.birthDayArr.forEach(snap => {
              let temp: any = snap;
              this.db.collection("BDs").doc(moment().format("YYYYMMDD")).collection("Clients").doc(temp.Phone).set({ Name: temp.Name });
            })
          }).then(() => {
            this.db.collection("BDs").doc(moment().format("YYYYMMDD")).set({ Delivered: true, TimeStamp: moment().format() });
          });
        })
      }
    })

  }

  async sendFestivities() {
    this.festService.getFests().subscribe(snap => {
      snap.forEach(sanip => {
        let temp: any = sanip;
        temp.FestDate = moment(temp.Date).format("DDMM");

        if (temp.FestDate == this.cDob && temp.Status == "Not Completed") {
          let uurl = "https://begums.tk/proms/" + temp.Name;
          let m: string = temp.Message + "%0A" + uurl;

          this.userService.getallUsers().subscribe(snap => {
            this.messageService.sendMessage(m, snap).then(() => {
              this.db.collection("Festivities").doc(temp.Name).set({ Status: "Completed" }, { merge: true }).then(() => {
                this.userService.presentToast("Festivities sent");
              });
            })
          })



        } else {
          this.userService.presentToast("No Feestivities Today");
        }
      })
    })
  }




  //Support
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom",
      showCloseButton: false,
    });
    toast.present();
  }

}
