import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FirebaseRef} from 'angularfire2';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showFormData = false;
  currentDate = Date.now();
  items: FirebaseListObservable<any[]>;
  item1 : FirebaseListObservable<any>;
  public model = new Todo("", "", "Medium");
  constructor(public af: AngularFire) {
    //this.items = af.database.list('/items', { preserveSnapshot: true });
    this.items = af.database.list('/items');
  }

  writeUserData() {
    console.log("form submited:" + JSON.stringify(this.model));
    if (this.model && this.model.title && this.model.details && this.model.priority) {
      this.items.push(this.model);
      this.model = { "title": "", "details": "", "priority": "Medium" };
      this.showFormData = !this.showFormData;
    } else {
      alert("Please Enter All Fields.");
    }
  }

  updateData(todoData) {
     this.model = { "title": todoData.title, "details": todoData.details, "priority": todoData.priority };
     this.showFormData = !this.showFormData;
  }

  showForm(){
    this.showFormData = !this.showFormData;
  }
}
