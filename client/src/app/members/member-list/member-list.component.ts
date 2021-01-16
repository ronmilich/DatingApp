import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [
  ]
})
export class MemberListComponent implements OnInit {
  members: Member[]

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers()
    console.log(this.members)
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members
    })
  }
}
