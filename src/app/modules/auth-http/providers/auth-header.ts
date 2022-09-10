import { HttpHeaders } from "@angular/common/http";

export const AuthHeader = 'X-Authorization';
export const AuthHeaderObj = new HttpHeaders({ [AuthHeader]: '' });