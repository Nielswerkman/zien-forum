import {User} from 'models/User';

export class Blog {

    id: number;
    creator: User;
    approvedBy: User;
    title: String;
    summary: String;
    // summaryImage: Blob;
    content: String;

    constructor(id?: number, creator?: User, approvedBy?: User, title?: String, summary?: String, summaryImage?: Blob,
                content?: String) {
        this.id = id;
        this.creator = creator;
        this.approvedBy = approvedBy;
        this.title = title;
        this.summary = summary;
        // this.summaryImage = summaryImage;
        this.content = content;
     }
}
