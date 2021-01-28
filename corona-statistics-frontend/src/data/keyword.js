class Keyword {

    static Vaka = new Keyword('vaka');
    static Vefat = new Keyword('vefat');
    static Taburcu = new Keyword('taburcu');


    constructor(name) {
        this.name = name;
    }
    toString() {
        return `Keyword.${this.name}`;
    }
}