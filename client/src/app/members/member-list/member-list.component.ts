import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { Pagination } from 'src/app/models/pagination.model';
import { User } from 'src/app/models/user.model';
import { UserParams } from 'src/app/models/userParams.model';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [
  ]
})
export class MemberListComponent implements OnInit {
  members: Member[]
  pagination: Pagination
  userParams: UserParams
  user: User
  genderList = [{ value: 'male', display: 'Male' }, { value: 'female', display: 'Female' }]


  constructor(private memberService: MembersService) {
    this.userParams = this.memberService.getUserParams()
  }

  ngOnInit(): void {
    this.loadMembers()
  }

  loadMembers() {
    this.memberService.setUserParams(this.userParams)
    this.memberService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result
      this.pagination = response.pagination
    })
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page
    this.memberService.setUserParams(this.userParams)
    this.loadMembers()
  }

  resetFilters() {
    this.userParams = this.memberService.resetUserParams()
    this.loadMembers()
  }
}
