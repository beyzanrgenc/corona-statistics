class City {

    static Adana = new City('adana');
    static Adıyaman = new City('adıyaman');
    static Afyonkarahisar = new City('afyonkarahisar');
    static Ağrı = new City('ağrı');
    static Aksaray = new City('aksaray');
    static Amasya = new City('amasya');
    static Ankara = new City('ankara');
    static Antalya = new City('antalya');
    static Ardahan = new City('ardahan');
    static Artvin = new City('artvin');
    static Aydın = new City('aydın');
    static Balıkesir = new City('balıkesir');
    static Bartın = new City('bartın');
    static Batman = new City('batman');
    static Bayburt = new City('bayburt');
    static Bilecik = new City('bilecik');
    static Bingöl = new City('bingöl');
    static Bitlis = new City('bitlis');
    static Bolu = new City('bolu');
    static Burdur = new City('burdur');
    static Bursa = new City('bursa');
    static Çanakkale = new City('çanakkale');
    static Çankırı = new City('çankırı');
    static Çorum = new City('çorum');
    static Denizli = new City('denizli');
    static Diyarbakır = new City('diyarbakır');
    static Düzce = new City('düzce');
    static Edirne = new City('edirne');
    static Elâzığ = new City('elâzığ');
    static Erzincan = new City('erzincan');
    static Erzurum = new City('erzurum');
    static Eskişehir = new City('eskişehir');
    static Gaziantep = new City('gaziantep');
    static Giresun = new City('giresun');
    static Gümüşhane = new City('gümüşhane');
    static Hakkâri = new City('hakkâri');
    static Hatay = new City('hatay');
    static Iğdır = new City('ığdır');
    static Isparta = new City('ısparta');
    static İstanbul = new City('istanbul');
    static İzmir = new City('izmir');
    static Kahramanmaraş = new City('kahramanmaraş');
    static Karabük = new City('karabük');
    static Karaman = new City('karaman');
    static Kars = new City('kars');
    static Kastamonu = new City('kastamonu');
    static Kayseri = new City('kayseri');
    static Kırıkkale = new City('kırıkkale');
    static Kırklareli = new City('kırklareli');
    static Kırşehir = new City('kırşehir');
    static Kilis = new City('kilis');
    static Kocaeli = new City('kocaeli');
    static Konya = new City('konya');
    static Kütahya = new City('kütahya');
    static Malatya = new City('malatya');
    static Manisa = new City('manisa');
    static Mardin = new City('mardin');
    static Mersin = new City('mersin');
    static Muğla = new City('muğla');
    static Muş = new City('muş');
    static Nevşehir = new City('nevşehir');
    static Niğde = new City('niğde');
    static Ordu = new City('ordu');
    static Osmaniye = new City('osmaniye');
    static Rize = new City('rize');
    static Sakarya = new City('sakarya');
    static Samsun = new City('samsun');
    static Siirt = new City('siirt');
    static Sinop = new City('sinop');
    static Sivas = new City('sivas');
    static Şanlıurfa = new City('şanlıurfa');
    static Şırnak = new City('şırnak');
    static Tekirdağ = new City('tekirdağ');
    static Tokat = new City('tokat');
    static Trabzon = new City('trabzon');
    static Tunceli = new City('tunceli');
    static Uşak = new City('uşak');
    static Van = new City('van');
    static Yalova = new City('yalova');
    static Yozgat = new City('yozgat');
    static Zonguldak = new City('zonguldak');


    constructor(name) {
        this.name = name;
    }
    toString() {
        return `City.${this.name}`;
    }
}