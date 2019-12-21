export class FormControlBase {
    private randomHash: number;

    constructor() {
        this.randomHash = Math.round(Math.random() * Date.now());
    }

    name: string;

    get elementId(): string {
        return `field${this.randomHash}-${this.name}`;
    }

    get labelId(): string {
        return `field${this.randomHash}-${this.name}-label`;
    }

    get descriptionId(): string {
        return `field${this.randomHash}-${this.name}-desc`;
    }
}
