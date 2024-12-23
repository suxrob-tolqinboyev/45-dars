// masala 1
// class Mashina {
//     constructor(nomi, model, yil) {
//         this.nomi = nomi;
//         this.model = model;
//         this.yil = yil;
//     }

//     dvigatelYoq() {
//         console.log(`${this.nomi}, dvigateli ishga tushdi`);
//     };

//     mashinaMalumoti() {
//         return "Nomi:" + this.nomi  + "Model:"  + this.model, "Yil: "  + this.yil;
//     }
// }

// // Foydalanish:
// const mashina1 = new Mashina("BMW", "X6", 2024);
// mashina1.dvigatelYoq();
// console.log(mashina1.mashinaMalumoti());

// masala 2

// class Binolar {
//     constructor(nomi, qurilganYili) {
//       this.nomi = nomi;
//       this.qurilganYili = qurilganYili;
//     }
  
//     binoniTarifla() {
//       return `${this.nomi}, ${this.qurilganYili}-yilda qurilgan.`;
//     }
//   }
  
//   class Kutubxona extends Binolar {
//     static qoshilganKitoblar = 0;
//     static olinganKitoblar = 0;
//     #kitoblar = [];
  
//     constructor(nomi, qurilganYili) {
//       super(nomi, qurilganYili);  // Binolar klassidan meros olish
//       this.#kitoblar = [];
//     }
  
//     kitobQosh(nomi) {
//       this.#kitoblar.push(nomi);
//       Kutubxona.qoshilganKitoblar++;
//       console.log(`${nomi} kitobi ${this.nomi} kutubxonaga qo'shildi.`);
//     }
  
//     kitobOlish(nomi) {
//       const index = this.#kitoblar.indexOf(nomi);
//       if (index !== -1) {
//         this.#kitoblar.splice(index, 1);
//         Kutubxona.olinganKitoblar++;
//         console.log(`${nomi} kitobi ${this.nomi} kutubxonadan olindi.`);
//       } else {
//         console.log(`${nomi} kitobi ${this.nomi} kutubxonada topilmadi.`);
//       }
//     }
  
//     static statistikMalumot() {
//       return `Umumiy qoshilgan kitoblar: ${Kutubxona.qoshilganKitoblar}, olingan kitoblar: ${Kutubxona.olinganKitoblar}.`;
//     }
  
//     kutubxonaMalumot() {
//       const binoniMalumot = this.binoniTarifla();
//       return `${binoniMalumot} Hozirgi kutubxonaning kitoblar soni: ${this.#kitoblar.length}`;
//     }
//   }
  
//   // Foydalanish misoli:
//   const kutubxona = new Kutubxona("Markaziy Kutubxona", 1970);
//   kutubxona.kitobQosh("Daftar xoshiyasidigi bitiklar");
//   kutubxona.kitobOlish("Daftar xoshiyasidigi bitiklar");
//   console.log(Kutubxona.statistikMalumot());
//   console.log(kutubxona.kutubxonaMalumot());

// masala 3
// class Oquvchi {
//     #soatlar = 0;
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     oquvVaqti(soat) {
//       this.#soatlar += soat;
//       console.log(this.name + " " + soat + " soat o'qiydi.");
//     }

//     talabaMalumoti() {
//       return (
//         "Talaba ismi: " + this.name,
//         "Yoshi: " + this.age,
//         "O'qigan soatlar: " + this.#soatlar
//       );
//     }
//   }

//   const oquvchi1 = new Oquvchi("Suxrob", 21);
//   oquvchi1. oquvVaqti(6);
//   console.log(oquvchi1.talabaMalumoti());

// masala 4
// class pet {
//   constructor(nomi, age) {
//     this.nomi = nomi;
//     this.age = age;
//   }

//   ovqatBer() {
//     console.log(this.nomi + " " + "goshtli yemoqda");
//   }

//   oyinOynash() {
//     console.log(this.nomi + " " + "bilan kapto'k otib o'ynayapmiz");
//   }
// }

// const pet1 = new pet("kechuk", 5);
// pet1.oyinOynash();

// pet1.ovqatBer();

// masala 5
// class Savatcha {
//     constructor() {
//       this.mahsulotlar = [];
//     }

//     mahsulotQosh(mahsulot) {
//      return this.mahsulotlar.push(mahsulot);
//     }

//     savatchaHajmi() {
//       return this.mahsulotlar.length;
//     }
//   }

//   let savatcha = new Savatcha();
//   savatcha.mahsulotQosh("Telefon");
//   savatcha.mahsulotQosh("Kompyuter");
//   savatcha.mahsulotQosh("mishka");

//   console.log(savatcha.savatchaHajmi());
//   console.log(savatcha.mahsulotQosh());

// O'RTACHA
// masala 1
// class Bank {
//   constructor(amont = 0, id, paril) {
//     this.amont = amont;
//     this.id = id;
//     this.paril = paril;
//   }

//   pulQosh(mony) {
//     return (this.amont += mony);
//   }

//   pulOlish(mony) {
//     return (this.amont -= mony);
//   }

//   balansKorish() {
//     return this.amont;
//   }
// }

// const suxrob = new Bank(15000, 1234567889, 2003);

// console.log(suxrob.pulQosh(3000));
// console.log(suxrob.pulOlish(3000));
// console.log(suxrob.balansKorish()); 

// masala 2
// class Kutubxona {
//     constructor() {
//         this.kitoblar = [];
//     }

//     kitobQosh(nomi) {
//         if (!this.kitoblar.includes(nomi)) {
//             this.kitoblar.push(nomi);
//             console.log(`${nomi} kitobi qo'shildi.`);
//         } else {
//             console.log(`${nomi} kitobi allaqachon mavjud.`);
//         }
//     }

//     kitobOlish(nomi) {
//         const index = this.kitoblar.indexOf(nomi);
//         if (index !== -1) {
//             this.kitoblar.splice(index, 1);
//             console.log(`${nomi} kitobi olib ketildi.`);
//         } else {
//             console.log(`${nomi} kitobi mavjud emas.`);
//         }
//     }

// }

// const kutubxona = new Kutubxona();

// kutubxona.kitobQosh("Sariqdevni minib");
// kutubxona.kitobQosh("Shum bola");
// kutubxona.kitobOlish("Sariqdevni minib");
// kutubxona.kitobOlish("Ikki esjik orasi");

// masala 3
// class Jadval {
//     #tadbirlar = [];

//     tadbirQosh(nomi, vaqt) {
//       this.#tadbirlar.push({ nomi, vaqt });
//       console.log(`${nomi} tadbiri ${vaqt} ga qo'shildi.`);
//     }

//     jadvalKorish() {
//       if (this.#tadbirlar.length === 0) {
//         return "Jadval bo'sh.";
//       }
//       return this.#tadbirlar
//         .map((tadbir, index) => `${index + 1}. ${tadbir.nomi} - ${tadbir.vaqt}`)
//         .join("\n");
//     }
//   }

//   const jadval = new Jadval();
//   jadval.tadbirQosh("Dars", "09:00");
//   jadval.tadbirQosh("Sport mashg'uloti", "17:00");
//   console.log(jadval.jadvalKorish());

// masala 4
// class YetkazibBerishXizmati {
//     constructor() {
//         this.buyurtmalar = [];
//     }

//     buyurtmaYarat(mahsulot) {
//         const yangiBuyurtma = {
//             id: this.buyurtmalar.length + 1,
//             mahsulot: mahsulot,
//             holat: "Yaratildi"
//         };
//         this.buyurtmalar.push(yangiBuyurtma);
//         console.log(`Buyurtma yaratildi: ${yangiBuyurtma.id} - ${mahsulot}`);
//     }

//     holatTekshir(buyurtmaId) {
//         const buyurtma = this.buyurtmalar.find(b => b.id === buyurtmaId);
//         if (buyurtma) {
//             console.log(`Buyurtma ${buyurtmaId} holati: ${buyurtma.holat}`);
//         } else {
//             console.log(`Buyurtma ${buyurtmaId} topilmadi.`);
//         }
//     }
// }

// const xizmat = new YetkazibBerishXizmati();

// xizmat.buyurtmaYarat("akkyumlyatir");
// xizmat.holatTekshir(1);

//masala 5
// class Qahramon {
//   constructor(nomi) {
//     this.nomi = nomi;
//     this.holat = { x: 0, y: 0 };
//   }

//   yonalishgaBor(tomon) {
//     if (tomon === "chap") this.holat.x -= 1;
//     else if (tomon === "o'ng") this.holat.x += 1;
//     else if (tomon === "yuqoriga") this.holat.y += 1;
//     else if (tomon === "pastga") this.holat.y -= 1;
//     else return console.log("Noto'g'ri yo'nalish!");

//     console.log(
//       `${this.nomi} ${tomon} harakat qildi. Holat: (${this.holat.x}, ${this.holat.y})`
//     );
//   }

//   hujumQil() {
//     console.log(`${this.nomi} hujum qildi!`);
//   }
// }

// const qahramon = new Qahramon("Qahramon");
// qahramon.yonalishgaBor("yuqoriga");
// qahramon.yonalishgaBor("chap");
// qahramon.hujumQil();

// Qiyin
// masala 1
// class AqlliUy {
//     constructor() {
//         this.qurilmalar = {};
//     }

//     qurilmaQosh(nomi) {
//         if (!this.qurilmalar[nomi]) {
//             this.qurilmalar[nomi] = "o'chirilgan";
//             console.log(`${nomi} qurilmasi qo'shildi.`);
//         } else {
//             console.log(`${nomi}" qurilmasi allaqachon mavjud.`);
//         }
//     }

//     qurilmaBoshqar(nomi, holat) {
//         if (this.qurilmalar[nomi]) {
//             this.qurilmalar[nomi] = holat ? "yoqilgan" : "o'chirilgan";
//             console.log(`${nomi} qurilmasi ${this.qurilmalar[nomi]} holatiga o'tkazildi.`);
//         } else {
//             console.log(`${nomi} qurilmasi topilmadi.`);
//         }
//     }
// }

// const uy = new AqlliUy();

// uy.qurilmaQosh("Chiroq");
// uy.qurilmaBoshqar("Chiroq", true);
// uy.qurilmaBoshqar("Televizor", false);
// uy.qurilmaQosh("Televizor");
// uy.qurilmaBoshqar("Televizor", true);

// masala 2
// class OnlineDarsTizimi {
//     constructor() {
//         this.talabalar = {};
//     }

//     talabaQosh(ism) {
//         if (!this.talabalar[ism]) {
//             this.talabalar[ism] = [];
//             console.log(`${ism} talaba ro'yxatga olindi.`);
//         } else {
//             console.log(`${ism} allaqachon ro'yxatda mavjud.`);
//         }
//     }

//     darsTamomla(ism, dars) {
//         if (this.talabalar[ism]) {
//             if (!this.talabalar[ism].includes(dars)) {
//                 this.talabalar[ism].push(dars);
//                 console.log(`${ism} ${dars} darsini tamomladi.`);
//             } else {
//                 console.log(`${ism} ${dars} darsini allaqachon tamomlagan.`);
//             }
//         } else {
//             console.log(`${ism}talaba topilmadi.`);
//         }
//     }
// }

// const tizim = new OnlineDarsTizimi();

// tizim.talabaQosh("Ali");
// tizim.darsTamomla("Ali", "Ingliz tili");

// masala 3
// class SarmoyaTizimi {
//     constructor() {
//         this.sarmoyalar = [];
//     }

//     sarmoyaQosh(turi, miqdor) {
//         if (miqdor > 0) {
//             this.sarmoyalar.push({ turi, miqdor });
//             console.log(`${turi} turidagi ${miqdor} miqdorida sarmoya qo'shildi.`);
//         } else {
//             console.log("Sarmoya miqdori musbat bo'lishi kerak!");
//         }
//     }

//     daromadHisobla() {
//         const jamiDaromad = this.sarmoyalar.reduce((jami, sarmoya) => jami + sarmoya.miqdor, 0);
//         console.log(`Jami daromad: ${jamiDaromad}`);
//         return jamiDaromad;
//     }
// }

// const tizim = new SarmoyaTizimi();

// tizim.sarmoyaQosh("Aksiya", 1000);
// tizim.sarmoyaQosh("Kriptovalyuta", 500);
// tizim.daromadHisobla();

// masala 4
// class XabarTizimi {
//     constructor() {
//         this.foydalanuvchilar = {};
//     }

//     xabarYubor(foydalanuvchi, xabar) {
//         if (!this.foydalanuvchilar[foydalanuvchi]) {
//             this.foydalanuvchilar[foydalanuvchi] = [];
//         }
//         this.foydalanuvchilar[foydalanuvchi].push(xabar);
//         console.log(`${foydalanuvchi} foydalanuvchisiga xabar yuborildi: ${xabar}`);
//     }

//     kelganXabarlarniKorish(foydalanuvchi) {
//         if (this.foydalanuvchilar[foydalanuvchi]) {
//             console.log(`${foydalanuvchi} foydalanuvchisiga kelgan xabarlar:`);
//             this.foydalanuvchilar[foydalanuvchi].forEach((xabar, index) => {
//                 console.log(`${index + 1}. ${xabar}`);
//             });
//         } else {
//             console.log(`${foydalanuvchi} foydalanuvchiga hech qanday xabar kelmagan.`);
//         }
//     }
// }

// const tizim = new XabarTizimi();

// tizim.xabarYubor("Ali", "Salom, Ali!");
// tizim.xabarYubor("Ali", "Bugun uchrashamizmi?");
// tizim.xabarYubor("Laylo", "Salom, Laylo!");
// tizim.kelganXabarlarniKorish("Ali");
// tizim.kelganXabarlarniKorish("Laylo");

// masala 5
// class IshTizimi {
//     constructor() {
//         this.ishOrinlari = [];
//     }

//     ishElonQosh(nomi, tafsilotlar) {
//         const yangiIsh = {
//             id: this.ishOrinlari.length + 1,
//             nomi,
//             tafsilotlar,
//             arizalar: []
//         };
//         this.ishOrinlari.push(yangiIsh);
//         console.log(`${nomi} ish o'rni qo'shildi. ID: ${yangiIsh.id}`);
//     }

//     arizaYubor(ishId, nomzod) {
//         const ish = this.ishOrinlari.find(i => i.id === ishId);
//         if (ish) {
//             ish.arizalar.push(nomzod);
//             console.log(`${nomzod} arizasi ${ish.nomi} ish o'rniga yuborildi.`);
//         } else {
//             console.log(`ID: ${ishId} bo'yicha ish o'rni topilmadi.`);
//         }
//     }
// }

// const tizim = new IshTizimi();

// tizim.ishElonQosh("Dasturchi", "JavaScript, React tajribasi talab qilinadi.");
// tizim.ishElonQosh("Muhandis", "AutoCAD va dizayn bo'yicha tajriba talab qilinadi.");
// tizim.arizaYubor(1, "Ali");
// tizim.arizaYubor(2, "Laylo");
// tizim.arizaYubor(3, "Hasan");
