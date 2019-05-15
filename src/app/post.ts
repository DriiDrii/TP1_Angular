export class Post {
    title: string;
    content: string;
    loveIts: number;
    private createdAt: Date;

    private loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nibh sem. Proin consequat, felis sit amet rutrum ultrices, ex lorem aliquam enim, non volutpat lectus massa sed nisl. Aenean vel tortor at nisi viverra fermentum. Suspendisse at felis eu odio dignissim ullamcorper. Pellentesque eget odio non ante mollis hendrerit in nec felis. Morbi risus massa, venenatis ut viverra non, posuere vitae elit. Praesent pretium, arcu quis facilisis elementum, arcu felis convallis eros, ac pretium ex magna sit amet orci. Proin ac malesuada sem.
    
    Ut fermentum elementum velit, faucibus viverra massa viverra vel. Vivamus sagittis dignissim convallis. Donec sollicitudin semper hendrerit. Mauris ligula mauris, aliquet vitae tempor at, aliquam nec tellus. Praesent efficitur sem in tellus mattis imperdiet. Nulla posuere aliquam libero sit amet efficitur. Maecenas sit amet enim bibendum dui tristique vulputate eget id mi. Proin pellentesque erat nibh, sit amet condimentum enim aliquet vel. Etiam sagittis faucibus tortor eu sollicitudin. Quisque non ultrices diam, quis maximus augue. Sed vehicula ex in tellus faucibus, vel vestibulum eros finibus. In scelerisque, quam sit amet gravida dictum, diam erat ornare nulla, a malesuada felis lectus at dolor. In consectetur posuere elit, vitae posuere sem laoreet vitae.`;

    constructor(title, loveIts) {
        this.title = title;
        this.content = this.loremIpsum;
        this.loveIts = loveIts;
        this.createdAt = new Date();
    }

    public getCreatedAt() {
        return this.createdAt;
    }
}
