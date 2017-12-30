import {Component} from 'angular2/core';
import {PostService} from '../service/post'
import {Post} from '../model'
import {LoginService} from '../service/login'
import {User} from '../model';

@Component({
    providers: [PostService],
    template: `
    <div class="alert alert-info" *ngIf="showLoading">
        Loading...
    </div>
    <div *ngIf="!showLoading">
    <div *ngIf="_loginService.isLogged()"
            class="alert alert-success">
        Hello {{_loginService.getUser().name}}
        <a href="#" (click)="logout($event)"
        class="pull-right" >
        Logout</a>
    </div>
    <div style="padding-left: 20px; padding-right: 20px;" class="jumbotron" *ngFor="#p of posts">
        <h2>{{p.title}}</h2>
        <div class="angular-with-newlines" ng-repeat="item in items">
            {{p.text}}
        </div>
        <a href="#" (click)="deletePost(p)"
        *ngIf="checkPost(p)">Delete</a>
    </div>
    </div>`
})
export class HomeComponent{
    public posts: Array<Post>;
    private showLoading:boolean=false;

    constructor(private _postService: PostService,
            private _loginService:LoginService) {
        this.loadAllPosts();
    }
    loadAllPosts(){ 
        this.showLoading = true;
        this._postService.getPosts().subscribe(
            p => this.onLoadAllPostsResult(p),
            err => console.log(err)
        );
}
onLoadAllPostsResult(p){
    this.posts = p;
    this.showLoading = false;
}
logout(event){
    this._loginService.logout();
}
checkPost(p:Post):boolean{
        try {
            if (p.user == null) return false;
            if (!this._loginService.isLogged()) return false;
            return p.user._id==this._loginService.getUser()._id;
        } catch (error) {
            return false;
        }
  
}
    deletePost(p){
        this._postService.delete(p).subscribe(
            result => this.onDeletePostResult(result),
            error => this.onDeletePostError(error)
        )
    }
    onDeletePostResult(result){
        this.loadAllPosts();
    }
    onDeletePostError(error){
        console.log(error);
    }
}