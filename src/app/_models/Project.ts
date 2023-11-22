// the array structure of the projects that will be listed on the portfolio page in the portfolio card

import { Tag } from "./Tag";

export interface Project {  // will represent a project in the portfolio page and hold all relevant data
    id: number;  // will use this to identify the projects
    name: string;
    pictures: string[];
    project_link: string;
    summary: string;
    description: string;
    tags: Tag[];
}