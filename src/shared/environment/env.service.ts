import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  // Host
  public host = environment.host;

  // API url
  public apiUrl = environment.apiUrl;

  // TEST url
  public testUrl = environment.testUrl;

  // Version
  public version = environment.version;

  // Whether or not to enable debug mode
  public enableDebug = environment.enableDebug;

  constructor() {
  }
}
