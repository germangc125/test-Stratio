import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'test-stratio';

  items: Item[];

  ngOnInit() {
    this.items = [
      {
        Id: 1,
        Name: "Elemento",
        Level: 1,
        Children: []
      },
      {
        Id: 2,
        Name: "Elemento",
        Level: 1,
        Children: [
          {
            Id: 3,
            Name: "Elemento hijo",
            Level: 2,
            Children: [
              {
                Id: 4,
                Name: "Elemento hijo",
                Level: 3,
                Children: [ {
                  Id: 5,
                  Name: "Elemento hijo",
                  Level: 4,
                  Children: [
                    {
                      Id: 6,
                      Name: "Elemento hijo",
                      Level: 5,
                      Children: []
                    },
                    {
                      Id: 7,
                      Name: "Elemento hijo",
                      Level: 5,
                      Children: []
                    }
                  ]
                },]
              },
              {
                Id: 8,
                Name: "Elemento hijo",
                Level: 3,
                Children: []
              }
            ]
          },
          {
            Id: 9,
            Name: "Elemento hijo",
            Level: 2,
            Children: []
          }
        ]
      },
      {
        Id: 10,
        Name: "Elemento",
        Level: 1,
        Children: []
      }
    ]
  }

  selectItem(itemSelect: Item){
    alert("Name: " + itemSelect.Name + "- Id: " + itemSelect.Id);
  }




  

}
