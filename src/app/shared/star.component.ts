import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AppConfigurationClient } from "@azure/app-configuration";
import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential,InteractiveBrowserCredential } from "@azure/identity";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  cropWidth = 75;
  @Input() rating = 4;
  @Output() notifys: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 75/5;
  }

  async onStarClick(){
    debugger;
    console.log('star clicked' + this.rating);
    this.notifys.emit('Star clicked' + this.rating);

    //app config
    const conn = 'Endpoint=https://local-appconfig.azconfig.io;Id=pGuQ-l0-s0:xaR0L7hO08iddZnboKTD;Secret=rD2PCWtFefJlu6wci+k/SMkbtY6D7pxwo9YExg1Pa48=';
    const client = new AppConfigurationClient(conn);

    var val = await client.getConfigurationSetting({ key: "test" });
    console.log('on notify clicked' + val.value);

    //key vault config
    const credential = new InteractiveBrowserCredential();

    const keyVaultName = "angularPractice-keyVault";
  const vaultUrl  = "https://" + keyVaultName + ".vault.azure.net";

    // // const keyVaultclient = new SecretClient(vaultUrl,credential);

    // // Read the secret we created
    // const secret = await keyVaultclient.getSecret("test");
    // console.log("key vault secret: ", secret);

  }
}
