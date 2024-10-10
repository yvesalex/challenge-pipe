export interface Comment{
    text: string;
    user: {
        avatar: string;
        name: string;
    }
}

export interface ArticleModel{
    id?: number;
    createdAt?: string;
    title?: string;
    imageUrl?: string;
    content?: string;
    comments?: Comment[];
}