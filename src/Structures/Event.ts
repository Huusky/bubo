export default abstract class Event {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public abstract run(...args: any): Promise<any>;
}
