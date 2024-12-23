//                        KONSPEKT
//  OOP / CLASS
// Obtektga Yo'naltirilgan Dastur (Object-Oriented Programming) OOP - BU obyektlat va ularning 
// o'zaro munosabatlarini TUZISH VA TASHKIL QILISH IMKONINI BERADI.
// Class (sinflar) bu obekt yaratish uchun shablon yoki struktura.
// ES6 dan boshlanib ,Javascriptda CLASS yaratish uchun maxsus 
// sintaksis qo;shiladi.sinif yaratish uchun class kalit so'zidan foydalanamiz.
// MEROS OLISH Javascriptda sinflar orasida meros olish uchun extends kalit so'zidan foydalanamiz.
// bu orqali bir sinf boshqa sinfdan xususiyatlar va metodlarni oladi.
// sinf yaratishda obektlar avtomatik ravishdasinf prototipga muroojat qiladi.
// Sinfda meroslar har bir obektga meros qilib olingan bo'ladi.
// Private properties xususiy xususiyatlar # belbisidan keyin yoziladi
// va sinfdan tashqarida murojat qilib bo'lmaydi.
// Static methods - classga tegishli metod. class orqali chaiqriladi, obyekt orqali emas.
//  bu metod asosan yordamchi funksiyalarni o'z ichiga oladi.
// constructor overloading - konstructor ichida har xil paramatrlar  bn ishlash 
// imkoniyatini taminlaydi. JS da bir class uchun bir nechta constructor berib bolmaydi.
// encapsulotion(inkapsulatsiya) - obyekt xususiyatlari va metodlarini toplash imkonini beradi.
//  bunda malumotlar himoya qiladi, faqat kerakli joydan foydalanish imkonini beradi. #
// abstraksiya - malumotni muhim jihatlarini korsatish va otriqchasini yashirish 
// imkonini beradi. Sodda dastur uchun yordam beradi.
// inheritance(meros olish) - classlar ortasida boglash imkonini beradi. boshqa 
// classdan xususiyat va metodlarini olishi mumkin. 
//Polymorphism(Polimorfizm) - bu bir xil interfeysga ega bolgan turli xil 
// obyektlarni ifodalaydi. bir xil metodlarni turli xil sinflarda ishlatishda imkon beradi.
//Composition(Kompozitsiya) - obyektlerni birlashtirib yangi obyekt yaratish jarayoni. 
// xususiyat va metodlarni bir joyga jamlab, ularni koproq funksional va moslashuvchan qiladi.

//       CLOSURE LEXICAL ENVIRONMENT Haqida
// Closure - bu Javascript tilida funksiya va uning lexical muhitini saqlab olish 
// imkoniyatini  yaratib beradigan mexanizimdir. yana bir ko'rinishida 
// closure - bu funksiyaning ichida yana bir funksiya .firinchi funksiya ichida 
// o'zgaruvchi e'lon qilib ikkinchi funksiya ochib o'sha o'zgaruvchilarini ishlatish mumkin.
// Closurening asosiy xususiyati ichki funksiya,tashqi funksiyadan olingan 
// o'zgaruvchilarga muroojat qila olishi va o'zgaruvchilarning saqlab tura olishidadir. 

// LEXICAL ENVIROMENT bu o'zgaruvchilarni qayerda va qanday joylashganini aniqlovchi 
// tushunchadir.Lexical Environment, o'z ichiga : 
// 1.O'ZGARUVCHILAR - Lexical Environment o'zida o'zgaruvchilar saqlaydi.
// 2.LINK - Lexical Environment tasjqi muhitda e'lon qilingan o'zgaruvchiga murojaat qila oladi
// Lexical Environment ikki asosiy qisimdan iborat:
// 1. Environment Record - unda barcha lakal o'zgaruvchilar, konstantalar va funksiyalar saqlanadi.
// 2. Outer Lexical Environment - bu yerda tashqi o'zgaruvchilarni olish mumkin yani tashqi scope
// Closure va Lexical Environment o'rtasidagi bog'lanish:
// 1.Closure -bu ichki funksiya va tashqi funksiyaning o'zgaruvchilarini birlashtiruvchi mexanizm.
// 2. Lexical Environment - bu o'garuvchilar va ularningt parent muhitini saqlaydigan struktura.
// Lexical Environmentning yaratilish bosqichi 

