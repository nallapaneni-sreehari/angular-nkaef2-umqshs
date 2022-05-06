import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  template: `
  <p>File Upload {{ progress }} %</p>
  <div style="width: 100%; height: 20px; border: 1px solid">
  <div style="height:18px; background: red;" [style.width.%]="progress"></div>
  </div>
  `,
})
export class FileUploadComponent implements OnInit {
  progress = 0;
  interval;
  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(this.interval);
      } else {
        this.progress += 5;
      }
    }, 1000);
  }
}
