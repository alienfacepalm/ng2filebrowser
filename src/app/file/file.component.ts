import { Component, Input } from '@angular/core';

import { IFile } from './file.interface';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent : IFile {}