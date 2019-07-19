export class Subject {
  public name: string;
  public credits: number;
  public description: string;

  constructor(name: string, credits: number, description: string) {
    this.name = name;
    this.credits = credits;
    this.description = description;
  }
}
