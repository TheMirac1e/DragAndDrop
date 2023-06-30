import ComponentAbstract from "./component-abstract.ts";
import Project from "./project.ts";
import {IDraggable} from "../types/types.ts";
import {autobind} from "../helpres/decorators.ts";

class ProjectItem extends ComponentAbstract<HTMLUListElement, HTMLLIElement> implements IDraggable {
    private project: Project;

    get persons() {
        if (this.project.people === 1) {
            return '1 person'
        } else {
            return `${this.project.people} persons`
        }
    }

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);

        this.project = project;

        this.configure();
        this.renderedContent();
    }

    @autobind
    dragStartHandler(event: DragEvent) {
        console.log(event);
    }

    @autobind
    dragEndHandler(_: DragEvent) {
        console.log('drag end');
    }

    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }

    renderedContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
        this.element.querySelector('p')!.textContent = this.project.description;
    }
}

export default ProjectItem;
