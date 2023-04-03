import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from './../network/spacexapi.service';

@Component({
  selector: 'app-missionsdetail',
  templateUrl: './missionsdetail.component.html',
  styleUrls: ['./missionsdetail.component.css']
})
export class MissionsdetailComponent implements OnInit {
  mission:any 
  constructor(
    private route: ActivatedRoute,
    private SpacexapiService: SpacexapiService
  ) { }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMissionDetail(id);
  }


  //get mision details
  getMissionDetail(id:any) {
    this.SpacexapiService.getMissionsList().subscribe((res: any) => {
      this.mission = res.find((data:any) => data.mission_name == id);
    })
  }
}
