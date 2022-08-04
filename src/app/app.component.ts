import { Component } from '@angular/core';
// import { appConfig } from '@azure/app-configuration'


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
  // appConfig = require("@azure/app-configuration");
  // client = new this.AppConfigurationClient.AppConfigurationClient(this.connection_string);
  // retrievedSetting = this.client.getConfigurationSetting({
  //   key: "TestApp:Settings:Message"
  // });
  
 
  

  onNotifyAppComponet(msg:string){
    this.title = msg;
  }

  onNotify(message : string){
    console.log('product componet = ' + message);
    // this.pageTitle = message;
    
  }
}
