export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    createDate!: Date;
    snaps!: number;
    imageUrl!: string;  // ! indique que la valeur sera assignée plus tard
    location?: string; // ? indique que le parametre est optionnel
}