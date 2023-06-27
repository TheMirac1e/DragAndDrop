import ProjectInput from './components/project-input';
import ProjectList from './components/project-list';
import ProjectState from './components/project-state';

import './style.css'

export const projectState = new ProjectState();

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');

