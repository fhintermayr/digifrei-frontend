import {Directive, inject, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {AuthService} from "../../modules/authentication/service/auth.service";
import {AccessRole} from "../enum/access-role";

@Directive({
  selector: '[ifRole]',
  hostDirectives: [NgIf]
})
export class IfRoleDirective implements OnInit {

  @Input('ifRole')
  ifRole!: AccessRole[]

  private readonly ngIfDirective = inject(NgIf);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const usersRole: AccessRole = this.authService.getUsersRole()
    this.ngIfDirective.ngIf = this.ifRole.some(role => role === usersRole)
  }

}
