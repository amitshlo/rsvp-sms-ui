import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend/backend.service';
import { GridOptions } from 'ag-grid';
import { faFileExport, faComment, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {

  gridOptions:GridOptions;
  rowData;
  columnDefs = [
    {headerName: 'Name', field: 'name', editable: true },
    {headerName: 'Phone Number', field: 'number', editable: true },
    {headerName: 'Number of invited guests', field: 'invited_count', editable: true }
    {headerName: 'Number of approved guests', field: 'rsvp_count', editable: true }
  ];
  isModalOpen;
  //TODO - make it enum
  smsSuccess:number;
  icons = {
    fileExport: faFileExport,
    sms: faComment,
    loading: faSpinner
  }

  constructor(private backendService:BackendService) {
    this.gridOptions = <GridOptions>{
      columnDefs: this.columnDefs,
      enableSorting: true,
      enableFilter: true,
      onCellValueChanged: (chnage) => console.log(chnage)
    }
    this.isModalOpen = false;
    this.smsSuccess = 0;
  }

  ngOnInit() {
    this.backendService.getGuestList().subscribe((guests) => {
      this.rowData = guests;
    }, (error) => {
      this.rowData = [];
      console.error(error);
    });
  }

  exportData():void {
    this.gridOptions.api.exportDataAsCsv();
  }

  sendSMS():void {
    this.toggleModel();
    this.backendService.sendSMSToAll().subscribe((status) => {
      this.smsSuccess = 1;
      console.log(status);
    }, (error) => {
      this.smsSuccess = 2;
      console.error(error);
    });
  }

  toggleModel():void {
    this.isModalOpen = !this.isModalOpen;
    if (!this.isModalOpen) {
      this.smsSuccess = 0;
    }
  }
}
