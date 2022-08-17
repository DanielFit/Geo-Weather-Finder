import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value-display',
  templateUrl: './key-value-display.component.html',
  styleUrls: ['./key-value-display.component.css']
})
export class KeyValueDisplayComponent <T> implements OnInit {

  @Input() displayKeys?: (keyof T)[]
  @Input() value?: T

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(key: keyof T) {
    return key.toString()
  }

  

}

// T := your object type, K := key to change, R := new key name



  