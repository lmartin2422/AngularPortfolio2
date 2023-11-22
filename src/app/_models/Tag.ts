// the color coordinated languages on the portfolio cards

export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'crimson'); // defined a tag called Angular, static readonly acts as enums
    static readonly TYPESCRIPT = new Tag('Typescript', 'teal'); 
    static readonly PYTHON = new Tag('Python', 'royal blue'); 
    static readonly JAVA = new Tag('Java', 'gray'); 
    static readonly NODEJS = new Tag('Node.JS', 'brown'); 
    static readonly JAVASCRIPT = new Tag('Javascript', 'darkgreen'); 
    static readonly UIPATH = new Tag('UiPath', 'firebrick'); 
    static readonly HTML = new Tag('HTML/CSS', 'orangered');
    static readonly VBNET = new Tag('Vb.Net', 'green');
    static readonly FLASK = new Tag('Flask', 'purple');
    static readonly EXPRESSJS = new Tag('Express.JS', 'indigo');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'navy')


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key
    }
}