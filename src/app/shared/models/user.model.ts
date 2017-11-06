export class User {

    public id: string = null;
    public github: string = null;
    public twitter: string = null;
    public name: string = null;
    public base64: string = null;

    from(user: User): User {
        this.id = user.id;
        this.github = user.github;
        this.twitter = user.twitter;
        this.name = user.name;
        this.base64 = user.base64;
        return this;
    }
}