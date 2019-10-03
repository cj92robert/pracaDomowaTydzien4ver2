import { Component, OnInit } from '@angular/core';
import {VehicleServiceService} from '../services/vehicle-service.service';
import {Vehicle} from '../models/Vehicle';

@Component({
  selector: 'app-vehicle-component',
  templateUrl: './vehicle-component.component.html',
  styleUrls: ['./vehicle-component.component.css']
})
export class VehicleComponentComponent implements OnInit {
  vehicles: Vehicle[] = null;
  showAdder: boolean = false;
  newVehicle: Vehicle = new Vehicle();
  idEdit: number = 0;
  color: string = '';
  constructor(private vehicleService: VehicleServiceService) { }


  ngOnInit() {
  this.refresh();
  }

  delete(vehicle: Vehicle) {
    this.vehicleService.deleteVehicle(vehicle).subscribe(res => {
      this.refresh();
    });


  }

  showForm() {
    this.idEdit = 0;
    this.showAdder = !this.showAdder;
  }

  Edit(vehicle: Vehicle) {

    if(vehicle.id === this.idEdit) {
    this.idEdit = 0;
    } else{
      this.idEdit = vehicle.id;
    }
  }

  addVehicle() {
    this.newVehicle.id = 0;
    this.vehicleService.addVehicle(this.newVehicle).subscribe(res => {
      this.refresh();
      this.showAdder = false;
      this.newVehicle.mark = '';
      this.newVehicle.model = '';
      this.newVehicle.color = '';
    });

  }

  updateVehicle(vehicle: Vehicle) {
    this.vehicleService.updateVehicle(vehicle).subscribe(res=>{
      this.refresh();
      this.idEdit = 0;
    });
  }

  refresh() {
    if (this.color.length > 0) {
      this.vehicleService.getVehiclesByColor(this.color).subscribe(value => {
        this.vehicles = value;
      });
    } else {
      this.vehicleService.getVehicles().subscribe(value => {
        this.vehicles = value;
      });
    }
  }
}
