import {Institution} from './institution';

export class InternshipRoute {
    id: number;
    name: String;
    institution: Institution;
  
  
  
    constructor(id?: number, name?: String, institution?: Institution) {
      this.id = id;
      this.name = name;
      this.institution = institution;
    }
  }