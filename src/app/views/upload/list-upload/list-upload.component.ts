import {Component, OnInit} from '@angular/core';

import {AngularFireList} from 'angularfire2/database';
import {FileUpload} from '../fileupload';
import {UploadFileService} from '../upload-file.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  fileUploads: AngularFireList<FileUpload[]>;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
    // this.fileUploads = this.uploadService.getFileUploads({limitToLast: 6})
  }

}
