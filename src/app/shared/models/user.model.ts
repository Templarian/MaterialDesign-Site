export class User {

    public id: string = null;
    public github: string = null;
    public twitter: string = null;
    public name: string = null;
    public base64: string = null;
    public iconCount: number = null;
    public description: string = null;
    public website: string = null;

    from(user: User): User {
        this.id = user.id;
        this.github = user.github;
        this.twitter = user.twitter;
        this.name = user.name;
        if (typeof user.base64 === 'string') {
            if (user.base64.match(/^data/)) {
                this.base64 = user.base64;
            } else {
                this.base64 = `data:image/png;base64,${user.base64}`;
            }
        }
        this.iconCount = user.iconCount;
        this.description = user.description;
        this.website = user.website;
        return this;
    }
}