import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpacexapiService } from './../network/spacexapi.service';
import { Mission } from './../models/mission';

@Component({
  selector: 'app-missionslist',
  templateUrl: './missionslist.component.html',
  styleUrls: ['./missionslist.component.css']
})
export class MissionslistComponent implements OnInit {

  allMissions: Mission[] = [];
  launchYear: string = ''; // Add launchYear property here
  filteredMissions: Mission[] = [];

  
  constructor(
    private spacexapiService: SpacexapiService
  ) { }

  ngOnInit(): void {
    this.getAllMissionsList();
  }

  //get all missions list
  getAllMissionsList() {
    this.spacexapiService.getMissionsList().subscribe((res:any) => {
      this.allMissions = res;
    })
  }

  //filter missions by launch year
 //filter missions by launch year
searchByYear() {
  console.log("Launch Year:", this.launchYear);
  if (this.launchYear) {
    
    this.spacexapiService.getMissionsList().subscribe((res: any) => {
      const filteredMissions = res.filter((item: any) => {
        console.log("Item Launch Year:", item.launch_year);
        return item.launch_year === this.launchYear;
      });
      console.log(filteredMissions); // log filtered array
      this.allMissions = filteredMissions;
    });
  } else {
    this.getAllMissionsList();
  }
}

  

}
