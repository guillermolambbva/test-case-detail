import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  title: string;
  testCaseId: number;
  position: number;
  duration: number;
  result: string;
  lastExecution?: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    testCaseId: 2345,
    title: 'Hydrogen',
    duration: 1.0079,
    result: 'OK',
    lastExecution: new Date()
  },
  {
    position: 2,
    testCaseId: 2345,
    title: 'Helium',
    duration: 4.0026,
    result: 'OK',
    lastExecution: new Date(2017, 4, 4, 17, 23, 42, 11)
  },
  {
    position: 3,
    testCaseId: 2345,
    title: 'Lithium',
    duration: 6.941,
    result: 'OK',
  },
  {
    position: 4,
    testCaseId: 2345,
    title: 'Beryllium',
    duration: 9.0122,
    result: 'OK',
  },
  {
    position: 5,
    testCaseId: 2345,
    title: 'Boron',
    duration: 10.811,
    result: 'OK',
  },
  {
    position: 6,
    testCaseId: 2345,
    title: 'Carbon',
    duration: 12.0107,
    result: 'KO',
  },
  {
    position: 7,
    testCaseId: 2345,
    title: 'Nitrogen',
    duration: 14.0067,
    result: 'KO',
  },
  {
    position: 8,
    testCaseId: 2345,
    title: 'Oxygen',
    duration: 15.9994,
    result: 'OK',
  },
  {
    position: 9,
    testCaseId: 2345,
    title: 'Fluorine',
    duration: 18.9984,
    result: 'OK',
  },
  {
    position: 10,
    testCaseId: 2345,
    title: 'Neon',
    duration: 20.1797,
    result: 'OK',
  },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['position', 'title', 'testCaseId', 'duration', 'result', 'lastExecution'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
