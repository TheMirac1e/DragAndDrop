import {ProjectStatus} from "../types/types.ts";

class Project {
    constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) {

    }
}

export default Project;
