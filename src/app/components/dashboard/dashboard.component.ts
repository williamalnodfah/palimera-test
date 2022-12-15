import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedLabel: string = 'info';
  modalShow: boolean = false;

  dialogVisible: boolean = true;

  MenuList: any[] = [
    { name: 'views', opened: false },
    { name: 'actions', opened: false },
    { name: 'encyclopedias', opened: false, subMenus: [false, false, false] },
    { name: 'admin', opened: false },
  ];

  getStatus = (_name: string, _sub?: number) => {
    let index: number = this.MenuList.findIndex(x => x.name == _name);
    if (_sub != undefined) {
      return this.MenuList[index].subMenus[_sub - 1];
    } else {
      return this.MenuList[index].opened;
    }

  }


  toggleStatus = (_name: string, _sub?: number) => {
    let index: number = this.MenuList.findIndex(x => x.name == _name);
    console.log(this.MenuList[index]);
    if (_sub != undefined) {
      this.MenuList[index].subMenus[_sub - 1] = !this.MenuList[index].subMenus[_sub - 1];
    } else {
      this.MenuList[index].opened = !this.MenuList[index].opened;
    }

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLabelClick = (_label: string) => {
    this.selectedLabel = _label;
    this.router.navigateByUrl('base/dashboard/' + _label);
  }


  toggleModal = () => {
    this.modalShow = !this.modalShow;
  }


}


