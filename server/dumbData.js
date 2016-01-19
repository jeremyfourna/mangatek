Meteor.startup(function() {
	if (Mangas.find({}).fetch().length === 0) {
		var userId = Accounts.createUser({
			password: '123456',
			email: 'abc@def.com',
			profile: {
				admin: true
			}
		});
		var data = [{
			"tomeTitle": "À l 'aube d'une grande aventure",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 1,
			"isbn": "9782723488525",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-edition-originale-1-glenat.jpg",
			"releaseDate": "2000/09/20",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 1,
			"isbn": "9782505009993",
			"cover": "http://www.manga-news.com/public/images/series/monster-deluxe-1-kana.jpg",
			"releaseDate": "2010/11/05",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 1,
			"isbn": "9782505014409",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-1-kana.jpg",
			"releaseDate": "2012/04/27",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 1,
			"isbn": "9782723448123",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_01.jpg",
			"releaseDate": "2004/10/6",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 1,
			"isbn": "9782845993594",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic1_g.jpg",
			"releaseDate": "2004/11/16",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Drifters",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kohta Hirano",
			"tomeNumber": 1,
			"isbn": "9782759506040",
			"cover": "http://www.manga-news.com/public/images/vols/drifters-1-tonkam.jpg",
			"releaseDate": "2011/04/27",
			"owned": true,
			"editor": "Tonkam",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 1,
			"isbn": "9782723472272",
			"cover": "http://www.manga-news.com/public/images/vols/Dr-Slump-ultimate-1.jpg",
			"releaseDate": "2009/12/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 1,
			"isbn": "9782845385542",
			"cover": "http://www.manga-news.com/public/images/vols/citu_hunter_ultime_01.jpg",
			"releaseDate": "2005/10/27",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Sangoku",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 1,
			"isbn": "9782876952058",
			"cover": "http://www.manga-news.com/public/images/vols/DragonBall1.jpg",
			"releaseDate": "1993/05/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 1,
			"isbn": "9782351420171",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal_01.jpg",
			"releaseDate": "2005/09/08",
			"owned": true,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "A Silent Voice",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshitoki Oima",
			"cover": "http://www.manga-news.com/public/images/vols/a-silent-voice-1-ki-oon.jpg",
			"isbn": "9782355927713",
			"tomeNumber": 1,
			"releaseDate": "2015/01/22",
			"owned": true,
			"editor": "Ki-oon",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 1,
			"isbn": "9782845380790",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_01.jpg",
			"releaseDate": "2002/03/28",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Prison School",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Hiramoto",
			"tomeNumber": 1,
			"isbn": "9782302040960",
			"cover": "http://www.manga-news.com/public/images/vols/prison-school-1-soleil.jpg",
			"releaseDate": "2014/07/16",
			"owned": true,
			"editor": "Soleil",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 1,
			"isbn": "9782811611699",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-1-pika.jpg",
			"releaseDate": "2013/06/26",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 1,
			"isbn": "9782871292661",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter01_09022003.jpg",
			"releaseDate": "2003/07/15",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Akira",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Katsuhiro Otomo",
			"tomeNumber": 1,
			"isbn": "9782723427371",
			"cover": "http://www.manga-news.com/public/images/vols/akira_01.jpg",
			"releaseDate": "1999/04/20",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 1,
			"isbn": "9782505000327",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_01.jpg",
			"releaseDate": "2007/01/19",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 1,
			"isbn": "9782845991002",
			"cover": "http://www.manga-news.com/public/images/vols/gto1_g.jpg",
			"releaseDate": "2001/02/20",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 1,
			"isbn": "9782811605308",
			"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-1-pika.jpg",
			"releaseDate": "2011/09/07",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO - Paradise Lost",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 1,
			"isbn": "9782811622725",
			"cover": "http://www.manga-news.com/public/images/vols/gto-lost-paradise-1-pika.jpg",
			"releaseDate": "2015/09/09",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Luffy versus la bande à Baggy!!",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 2,
			"isbn": "9782723489898",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-edition-originale-2-glenat.jpg",
			"releaseDate": "2000/11/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 2,
			"isbn": "9782505010005",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-2-kana.jpg",
			"releaseDate": "2010/11/05",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 2,
			"isbn": "9782845993969",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic2_g.jpg",
			"releaseDate": "2005/01/18",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 2,
			"isbn": "9782723472289",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-edition-glenat-2.jpg",
			"releaseDate": "2010/01/13",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 2,
			"isbn": "9782845385948",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_02-2.jpg",
			"releaseDate": "2005/12/01",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Kaméhaméha",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 2,
			"isbn": "9782876952065",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_02.jpg",
			"releaseDate": "1993/06/17",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 2,
			"isbn": "9782351420188",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal_02.jpg",
			"releaseDate": "2005/09/08",
			"owned": true,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "A Silent Voice",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshitoki Oima",
			"tomeNumber": 2,
			"isbn": "9782355927942",
			"cover": "http://www.manga-news.com/public/images/vols/a-silent-voice-2-ki-oon.jpg",
			"releaseDate": "2015/03/12",
			"owned": true,
			"editor": "KI-oon",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 2,
			"isbn": "9782845380998",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_02.jpg",
			"releaseDate": "2002/05/03",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 2,
			"isbn": "9782723448147",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_02-2.jpg",
			"releaseDate": "2004/10/20",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 2,
			"isbn": "9782871292678",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter02_09022003.jpg",
			"releaseDate": "2000/04/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Akira",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Katsuhiro Otomo",
			"tomeNumber": 2,
			"isbn": "9782723427999",
			"cover": "http://www.manga-news.com/public/images/vols/akira_02.jpg",
			"releaseDate": "1999/07/22",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 2,
			"isbn": "9782505000426",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_02.jpg",
			"releaseDate": "2007/02/02",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 2,
			"isbn": "9782845991064",
			"cover": "http://www.manga-news.com/public/images/vols/gto2_g.jpg",
			"releaseDate": "2001/04/03",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 2,
			"isbn": "9782811605636",
			"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14days-2-pika.jpg",
			"releaseDate": "2011/11/02",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Piété filiale",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 3,
			"isbn": "9782723434805",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_03.jpg",
			"releaseDate": "2001/01/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 3,
			"isbn": "9782505010593",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-3-kana.jpg",
			"releaseDate": "2011/02/04",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 3,
			"isbn": "9782845994157",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic3_g.jpg",
			"releaseDate": "2005/03/15",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 3,
			"isbn": "9782723472296",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-edition-glenat-3.jpg",
			"releaseDate": "2010/03/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 3,
			"isbn": "9782845386495",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_03-2.jpg",
			"releaseDate": "2006/02/09",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "L 'initiation",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 3,
			"isbn": "9782876952072",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_03.jpg",
			"releaseDate": "1993/09/22",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 3,
			"isbn": "9782351420195",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal_03.jpg",
			"releaseDate": "2005/11/10",
			"owned": true,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "A Silent Voice",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshitoki Oima",
			"tomeNumber": 3,
			"isbn": "9782355928222",
			"cover": "http://www.manga-news.com/public/images/vols/silent-voice-3-ki-oon.jpg",
			"releaseDate": "2015/05/15",
			"owned": true,
			"editor": "Ki-oon",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 3,
			"isbn": "9782845381148",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_03.jpg",
			"releaseDate": "2002/07/05",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 3,
			"isbn": "9782723449021",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_03-2.jpg",
			"releaseDate": "2004/11/27",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 3,
			"isbn": "9782871292685",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter03_09022003.jpg",
			"releaseDate": "2000/06/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Akira",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Katsuhiro Otomo",
			"tomeNumber": 3,
			"isbn": "9782723428217",
			"cover": "http://www.manga-news.com/public/images/vols/akira_03.jpg",
			"releaseDate": "1999/09/25",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 3,
			"isbn": "9782505000792",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_03.jpg",
			"releaseDate": "2007/04/06",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 3,
			"isbn": "9782845991125",
			"cover": "http://www.manga-news.com/public/images/vols/gto3_g.jpg",
			"releaseDate": "2001/04/24",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 3,
			"isbn": "9782811606039",
			"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-3-pika.jpg",
			"releaseDate": "2012/01/04",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Un chemin en pente raide",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 4,
			"isbn": "9782723434812",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_04.jpg",
			"releaseDate": "2001/03/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 4,
			"isbn": "9782505010968",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-4-kana.jpg",
			"releaseDate": "2011/05/06",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 4,
			"isbn": "9782845994393",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic4_g.jpg",
			"releaseDate": "2005/05/17",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 4,
			"isbn": "9782723474665",
			"cover": "http://www.manga-news.com/public/images/vols/Dr-slump-deluxe-4-glenat.jpg",
			"releaseDate": "2010/05/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 4,
			"isbn": "9782845386952",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_04-2.jpg",
			"releaseDate": "2006/04/13",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Le Tournoi",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 4,
			"isbn": "9782876952102",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_04.jpg",
			"releaseDate": "1993/11/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 4,
			"isbn": "9782351420416",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal_04.jpg",
			"releaseDate": "2006/01/12",
			"owned": true,
			"editor": "Kurokawa",
			"version": "fr"
		}, {

			"tomeTitle": "",
			"mangasName": "A Silent Voice",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshitoki Oima",
			"tomeNumber": 4,
			"isbn": "9782355928390",
			"cover": "http://www.manga-news.com/public/images/vols/silent-voice-4-ki-oon.jpg",
			"releaseDate": "2015/07/02",
			"owned": true,
			"editor": "Ki-oon",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 4,
			"isbn": "9782845381315",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_04.jpg",
			"releaseDate": "2002/09/19",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 4,
			"isbn": "9782723449038",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_04-2.jpg",
			"releaseDate": "2005/02/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 4,
			"isbn": "9782871292692",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter04_09022003.jpg",
			"releaseDate": "2000/09/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Akira",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Katsuhiro Otomo",
			"tomeNumber": 4,
			"isbn": "9782723428248",
			"cover": "http://www.manga-news.com/public/images/vols/akira_04.jpg",
			"releaseDate": "2000/01/17",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 4,
			"isbn": "9782505001065",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_04.jpg",
			"releaseDate": "2007/06/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 4,
			"isbn": "9782845991170",
			"cover": "http://www.manga-news.com/public/images/vols/gto4_g.jpg",
			"releaseDate": "2001/05/15",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 4,
			"isbn": "9782811606398",
			"cover": "http://www.manga-news.com/public/images/vols/shonan-gto-14-days-3-pika.jpg",
			"releaseDate": "2012/02/29",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Pour qui sonne le glas",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 5,
			"isbn": "9782723434829",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_05.jpg",
			"releaseDate": "2001/05/14",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 5,
			"isbn": "9782505012139",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-5-kana.jpg",
			"releaseDate": "2011/08/26",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 5,
			"isbn": "9782845994669",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic5_g.jpg",
			"releaseDate": "2005/08/16",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 5,
			"isbn": "9782723474672",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-5-glenat.jpg",
			"releaseDate": "2010/07/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'Ultime combat",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 5,
			"isbn": "9782876952119",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_05.jpg",
			"releaseDate": "1994/01/25",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 5,
			"isbn": "9782351420454",
			"cover": "http://www.manga-news.com/public/images/vols/fma_05.jpg",
			"releaseDate": "2006/03/09",
			"owned": true,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 5,
			"isbn": "9782845381742",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_05.jpg",
			"releaseDate": "2003/01/17",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 5,
			"isbn": "9782723449045",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_05-2.jpg",
			"releaseDate": "2005/02/23",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 5,
			"isbn": "9782871292708",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter05_09022003.jpg",
			"releaseDate": "2000/10/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Akira",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Katsuhiro Otomo",
			"tomeNumber": 5,
			"isbn": "9782723428255",
			"cover": "http://www.manga-news.com/public/images/vols/akira_05.jpg",
			"releaseDate": "2000/05/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 5,
			"isbn": "9782845991200",
			"cover": "http://www.manga-news.com/public/images/vols/gto5_g.jpg",
			"releaseDate": "2001/06/26",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 5,
			"isbn": "9782811606800",
			"cover": "http://www.manga-news.com/public/images/vols/gto-14-days-5-pika.jpg",
			"releaseDate": "2012/05/02",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 6,
			"isbn": "9782505012641",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-6-kana.jpg",
			"releaseDate": "2011/12/02",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La grande promesse",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 6,
			"isbn": "9782723435604",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_06.jpg",
			"releaseDate": "2001/07/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'Empire du ruban rouge",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 6,
			"isbn": "9782876952126",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_06.jpg",
			"releaseDate": "1994/03/28",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 6,
			"isbn": "9782351420461",
			"cover": "http://www.manga-news.com/public/images/vols/fma_06.jpg",
			"releaseDate": "2006/05/11",
			"owned": true,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 6,
			"isbn": "9782845381995",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_06.jpg",
			"releaseDate": "2003/03/07",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 6,
			"isbn": "9782723449052",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_2ed_06.jpg",
			"releaseDate": "2005/03/16",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 6,
			"isbn": "9782871293217",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter06_09022003.jpg",
			"releaseDate": "2001/01/20",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Akira",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Katsuhiro Otomo",
			"tomeNumber": 6,
			"isbn": "9782723428262",
			"cover": "http://www.manga-news.com/public/images/vols/akira_06.jpg",
			"releaseDate": "2000/09/20",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 6,
			"isbn": "9782845991255",
			"cover": "http://www.manga-news.com/public/images/vols/gto6_g.jpg",
			"releaseDate": "2001/08/21",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 6,
			"isbn": "9782811607302",
			"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-6-pika.jpg",
			"releaseDate": "2012/07/04",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 7,
			"isbn": "9782505013983",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-7-kana.jpg",
			"releaseDate": "2012/01/20",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le Vieux schnock",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 7,
			"isbn": "9782723436229",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_07.jpg",
			"releaseDate": "2001/09/18",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "La Menace",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 7,
			"isbn": "9782876952171",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_07.jpg",
			"releaseDate": "1994/05/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 7,
			"isbn": "9782845382107",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_07.jpg",
			"releaseDate": "2003/05/09",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 7,
			"isbn": "9782723450973",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_07.jpg",
			"releaseDate": "2005/04/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 7,
			"isbn": "9782871293224",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter07_09022003.jpg",
			"releaseDate": "2001/03/17",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 7,
			"isbn": "9782845991347",
			"cover": "http://www.manga-news.com/public/images/vols/gto7_g.jpg",
			"releaseDate": "2001/09/18",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 7,
			"isbn": "9782811609481",
			"cover": "http://www.manga-news.com/public/images/vols/gto-14-days-7-pika.jpg",
			"releaseDate": "2012/09/05",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 8,
			"isbn": "9782505014928",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-8-kana.jpg",
			"releaseDate": "2012/04/27",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Je ne vais pas mourir",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 8,
			"isbn": "9782723436236",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_08.jpg",
			"releaseDate": "2001/11/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Duel",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 8,
			"isbn": "9782876952188",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_08.jpg",
			"releaseDate": "1994/06/23",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 8,
			"isbn": "9782845382299",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_08.jpg",
			"releaseDate": "2003/07/11",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 8,
			"isbn": "9782723450980",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_08.jpg",
			"releaseDate": "2005/06/15",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 8,
			"isbn": "9782871293231",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter08_09022003.jpg",
			"releaseDate": "2001/05/12",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 8,
			"isbn": "9782845991378",
			"cover": "http://www.manga-news.com/public/images/vols/gto8_g.jpg",
			"releaseDate": "2001/10/23",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 8,
			"isbn": "9782811609702",
			"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-8-pika.jpg",
			"releaseDate": "2012/10/31",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Monster",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 9,
			"isbn": "9782505015260",
			"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-9-kana.jpg",
			"releaseDate": "2012/08/24",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Une jeune fille en pleurs",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 9,
			"isbn": "9782723436243",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_09.jpg",
			"releaseDate": "2002/02/15",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Sangohan",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 9,
			"isbn": "9782876952195",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_09.jpg",
			"releaseDate": "1994/07/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 9,
			"isbn": "9782845382503",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_09.jpg",
			"releaseDate": "2003/09/26",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 9,
			"isbn": "9782723450997",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_09.jpg",
			"releaseDate": "2005/06/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 9,
			"isbn": "9782871293248",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter09_09022003.jpg",
			"releaseDate": "2001/07/07",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 9,
			"isbn": "9782845991446",
			"cover": "http://www.manga-news.com/public/images/vols/gto9_g.jpg",
			"releaseDate": "2001/11/13",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Shonan 14 Days",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 9,
			"isbn": "9782811610715",
			"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-9-pika.jpg",
			"releaseDate": "2013/01/02",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "OK let 's stand up !",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 10,
			"isbn": "9782723436250",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_10.jpg",
			"releaseDate": "2002/04/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Miraculé",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 10,
			"isbn": "9782876952201",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_10.jpg",
			"releaseDate": "1994/10/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 10,
			"isbn": "9782845382718",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_10.jpg",
			"releaseDate": "2003/11/21",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 10,
			"isbn": "9782723451000",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_10.jpg",
			"releaseDate": "2005/10/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 10,
			"isbn": "9782871293255",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter10_09022003.jpg",
			"releaseDate": "2001/10/06",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 10,
			"isbn": "9782845991477",
			"cover": "http://www.manga-news.com/public/images/vols/gto10_g.jpg",
			"releaseDate": "2001/12/11",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Le pire brigand de tout East-Blue",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 11,
			"isbn": "9782723436267",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_11.jpg",
			"releaseDate": "2002/07/27",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Grand défi",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 11,
			"isbn": "9782876952218",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_11.jpg",
			"releaseDate": "1994/11/25",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 11,
			"isbn": "9782845383029",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_11.jpg",
			"releaseDate": "2004/02/14",
			"owned": true,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 11,
			"isbn": "9782723451017",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_11.jpg",
			"releaseDate": "2006/01/18",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 11,
			"isbn": "9782871294023",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter11_09022003.jpg",
			"releaseDate": "2002/01/19",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 11,
			"isbn": "9782845991545",
			"cover": "http://www.manga-news.com/public/images/vols/gto11_g.jpg",
			"releaseDate": "2002/01/15",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "La légende est en marche",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 12,
			"isbn": "9782723439343",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_12.jpg",
			"releaseDate": "2002/08/17",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les Forces du mal",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 12,
			"isbn": "9782723418553",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_12.jpg",
			"releaseDate": "1995/01/23",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 12,
			"isbn": "9782723451024",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_12.jpg",
			"releaseDate": "2006/03/15",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 12,
			"isbn": "9782871294153",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter12_09022003.jpg",
			"releaseDate": "2002/04/13",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 12,
			"isbn": "9782845991569",
			"cover": "http://www.manga-news.com/public/images/vols/gto12_g.jpg",
			"releaseDate": "2002/02/26",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Sois forte!!!",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 13,
			"isbn": "9782723440103",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_13.jpg",
			"releaseDate": "2002/10/16",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'Empire du chaos",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 13,
			"isbn": "9782723418560",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_13.jpg",
			"releaseDate": "1995/03/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 13,
			"isbn": "9782723454124",
			"cover": "http://ecx.images-amazon.com/images/I/51xHrLe3kOL._SX356_BO1,204,203,200_.jpg",
			"releaseDate": "2006/05/05",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 13,
			"isbn": "9782871294290",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter13_09022003.jpg",
			"releaseDate": "2002/06/06",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 13,
			"isbn": "9782845991606",
			"cover": "http://www.manga-news.com/public/images/vols/gto13_g.jpg",
			"releaseDate": "2002/03/19",
			"owned": true,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "L 'instinct",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 14,
			"isbn": "9782723441537",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_14.jpg",
			"releaseDate": "2003/01/16",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Démon",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 14,
			"isbn": "9782723418577",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_14.jpg",
			"releaseDate": "1995/05/22",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 14,
			"isbn": "9782723454377",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_14.jpg",
			"releaseDate": "2006/07/11",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 14,
			"isbn": "9782871294429",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter14_09022003.jpg",
			"releaseDate": "2003/01/18",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Droit devant!!",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 15,
			"isbn": "9782723442138",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_15.jpg",
			"releaseDate": "2003/03/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Chi-chi",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 15,
			"isbn": "9782723418584",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_15.jpg",
			"releaseDate": "1995/07/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 15,
			"isbn": "9782723454384",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_15.jpg",
			"releaseDate": "2006/09/05",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 15,
			"isbn": "9782871295099",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter15_01032003.jpg",
			"releaseDate": "2003/03/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Perpétuation",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 16,
			"isbn": "9782723442404",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_16.jpg",
			"releaseDate": "2003/05/16",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'Héritier",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 16,
			"isbn": "9782723418591",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_16.jpg",
			"releaseDate": "1995/08/27",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 16,
			"isbn": "9782723454391",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_16.jpg",
			"releaseDate": "2006/11/08",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 16,
			"isbn": "9782871295365",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter16_12072003.jpg",
			"releaseDate": "2003/07/05",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Les cerisiers de Hiluluk",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 17,
			"isbn": "9782723440868",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_17.jpg",
			"releaseDate": "2003/09/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les Saïyens",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 17,
			"isbn": "9782723418607",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_17.jpg",
			"releaseDate": "1995/09/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 17,
			"isbn": "9782723454407",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_17.jpg",
			"releaseDate": "2007/01/03",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 17,
			"isbn": "9782871295624",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter17_08052004.jpg",
			"releaseDate": "2004/05/01",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Ace entre en scène",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 18,
			"isbn": "9782723443845",
			"cover": "http://www.manga-news.com/public/images/vols/onepiece_18.jpg",
			"releaseDate": "2003/11/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Maître Kaïo",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 18,
			"isbn": "9782723418614",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_18.jpg",
			"releaseDate": "1995/11/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 18,
			"isbn": "9782723454414",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_18.jpg",
			"releaseDate": "2007/03/07",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 18,
			"isbn": "9782871296850",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter18_15072004.jpg",
			"releaseDate": "2004/07/03",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Rébellion",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 19,
			"isbn": "9782723444040",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_19.jpg",
			"releaseDate": "2004/01/08",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Végéta",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 19,
			"isbn": "9782723419024",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_19.jpg",
			"releaseDate": "1996/02/14",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 19,
			"isbn": "9782723457989",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_19.jpg",
			"releaseDate": "2007/06/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 19,
			"isbn": "9782871297277",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter19_01032005.jpg",
			"releaseDate": "2005/03/04",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Bataille décisive à Alubarna",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 20,
			"isbn": "9782723445832",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_20.jpg",
			"releaseDate": "2004/03/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 20,
			"isbn": "9782723458108",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_20.jpg",
			"releaseDate": "2007/07/11",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 20,
			"isbn": "9782871297819",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter20_17052005.jpg",
			"releaseDate": "2005/05/20",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Utopie",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 21,
			"isbn": "9782723445849",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_21.jpg",
			"releaseDate": "2004/05/12",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 21,
			"isbn": "9782723458191",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_21.jpg",
			"releaseDate": "2007/09/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 21,
			"isbn": "9782871298991",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter21_19032006.jpg",
			"releaseDate": "2006/03/17",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Espoir",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 22,
			"isbn": "9782723445856",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_22.jpg",
			"releaseDate": "2004/07/15",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Zabon et Doria",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 22,
			"isbn": "9782723418652",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_22.jpg",
			"releaseDate": "1996/08/25",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 22,
			"isbn": "9782723458283",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_22.jpg",
			"releaseDate": "2007/11/28",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 22,
			"isbn": "9782871299172",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter22.jpg",
			"releaseDate": "2006/06/02",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "L 'aventure de Vivi",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 23,
			"isbn": "9782723447065",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_23.jpg",
			"releaseDate": "2004/09/15",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Recoom et Guldo",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 23,
			"isbn": "9782723418669",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_23.jpg",
			"releaseDate": "1996/10/29",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 23,
			"isbn": "9782723459631",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_23.jpg",
			"releaseDate": "2008/01/30",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 23,
			"isbn": "9782505000266",
			"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter23_18112006.jpg",
			"releaseDate": "2006/11/17",
			"owned": true,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Les rêves",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 24,
			"isbn": "9782723447072",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_24.jpg",
			"releaseDate": "2004/11/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Capitaine Ginue",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 24,
			"isbn": "9782723418676",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_24.jpg",
			"releaseDate": "1997/01/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 24,
			"isbn": "9782723459648",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_24.jpg",
			"releaseDate": "2008/03/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'homme qui valait cent millions",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 25,
			"isbn": "9782723448291",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_25.jpg",
			"releaseDate": "2005/02/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Piccolo",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 25,
			"isbn": "9782723422246",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_25.jpg",
			"releaseDate": "1997/03/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 25,
			"isbn": "9782723459617",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_25.jpg",
			"releaseDate": "2008/06/04",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'île de Dieu",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 26,
			"isbn": "9782723448307",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_26.jpg",
			"releaseDate": "2005/04/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 26,
			"isbn": "9782723459624",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_26.jpg",
			"releaseDate": "2008/07/09",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Prélude",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 27,
			"isbn": "9782723448314",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_27.jpg",
			"releaseDate": "2005/06/01",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Super Saïyen",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 27,
			"isbn": "9782723422260",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_27.jpg",
			"releaseDate": "1997/06/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 27,
			"isbn": "9782723464727",
			"cover": "http://www.manga-news.com/public/images/vols/berserk_27.jpg",
			"releaseDate": "2008/09/24",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Wiper le berserker",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 28,
			"isbn": "9782723448321",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_28.jpg",
			"releaseDate": "2005/08/31",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 28,
			"isbn": "9782723464734",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-28.jpg",
			"releaseDate": "2008/11/18",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Oratorio",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 29,
			"isbn": "9782723448338",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-29-glenat.jpg",
			"releaseDate": "2005/10/05",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les Androïdes",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 29,
			"isbn": "9782723423472",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_29.jpg",
			"releaseDate": "1997/10/17",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Capriccio",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 30,
			"isbn": "9782723448345",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_30.jpg",
			"releaseDate": "2006/01/04",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Je suis là",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 31,
			"isbn": "9782723453684",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_31.jpg",
			"releaseDate": "2006/03/01",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Cell",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 31,
			"isbn": "9782723423496",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_31.jpg",
			"releaseDate": "1998/04/16",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Love song",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 32,
			"isbn": "9782723453691",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_32.jpg",
			"releaseDate": "2006/03/03",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Transformation ultime",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 32,
			"isbn": "9782723423502",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_32.jpg",
			"releaseDate": "1998/06/22",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Davy back fight!!",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 33,
			"isbn": "9782723453707",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_33.jpg",
			"releaseDate": "2006/07/11",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Water Seven, la cité sur l 'eau",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 34,
			"isbn": "9782723453714",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_34.jpg",
			"releaseDate": "2006/09/05",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Capitaine",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 35,
			"isbn": "9782723453721",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_35.jpg",
			"releaseDate": "2006/11/08",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'Adieu de Sangoku",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 35,
			"isbn": "9782723423533",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_35.jpg",
			"releaseDate": "1998/11/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Justice nº9",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 36,
			"isbn": "9782723453738",
			"cover": "http://www.manga-news.com/public/images/vols/one_peice_36.jpg",
			"releaseDate": "2007/02/14",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Un Nouveau héros",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 36,
			"isbn": "9782723423540",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_36.jpg",
			"releaseDate": "1999/02/15",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Tom",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 37,
			"isbn": "9782723458054",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_37.jpg",
			"releaseDate": "2007/04/04",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Kaïo Shin",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 37,
			"isbn": "9782723427920",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_37.jpg",
			"releaseDate": "1999/04/26",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Rocketman!",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 38,
			"isbn": "9782723458009",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_38.jpg",
			"releaseDate": "2007/06/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le Sorcier Babidi",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 38,
			"isbn": "9782723428057",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_38.jpg",
			"releaseDate": "1999/06/28",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Compétition",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 39,
			"isbn": "9782723458160",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_39.jpg",
			"releaseDate": "2007/08/22",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Gear",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 40,
			"isbn": "9782723458214",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_40.jpg",
			"releaseDate": "2007/11/14",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Déclaration de guerre",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 41,
			"isbn": "9782723460590",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_41.jpg",
			"releaseDate": "2008/01/23",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les pirates face au CP9",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 42,
			"isbn": "9782723460606",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_42.jpg",
			"releaseDate": "2008/03/19",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "La légende du héros",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 43,
			"isbn": "9782723463355",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_43.jpg",
			"releaseDate": "2008/05/21",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Rentrons",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 44,
			"isbn": "9782723464246",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_44.jpg",
			"releaseDate": "2008/07/09",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Je comprends ce que tu ressens",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 45,
			"isbn": "9782723464567",
			"cover": "http://www.manga-news.com/public/images/vols/one_piece_45.jpg",
			"releaseDate": "2008/09/10",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "A l 'aventure sur l'île fantôme",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 46,
			"isbn": "9782723464611",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-46.jpg",
			"releaseDate": "2008/11/18",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Ciel nuageux avec risque de chutes d 'os",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 47,
			"isbn": "9782723465137",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-47.jpg",
			"releaseDate": "2009/01/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'aventure d'Odz",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 48,
			"isbn": "9782723466257",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-48.jpg",
			"releaseDate": "2009/03/25",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Nightmare Luffy",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 49,
			"isbn": "9782723468794",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-49.jpg",
			"releaseDate": "2009/05/20",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "De retour",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 50,
			"isbn": "9782723470346",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-glenat-50.jpg",
			"releaseDate": "2009/07/01",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les onze Supernovae",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 51,
			"isbn": "9782723471916",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-glenat-51.jpg",
			"releaseDate": "2009/09/09",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Roger & Rayleigh",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 52,
			"isbn": "9782723472265",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-glenat-52.jpg",
			"releaseDate": "2010/01/13",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "La constitution souveraine",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 53,
			"isbn": "9782723474979",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-53-glenat.jpg",
			"releaseDate": "2010/04/07",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Inarrêtable",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 54,
			"isbn": "9782723474986",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-54-glenat.jpg",
			"releaseDate": "2010/06/30",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Un travelo en enfer",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 55,
			"isbn": "9782723474993",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-55-glenat.jpg",
			"releaseDate": "2010/10/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Merci",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 56,
			"isbn": "9782723478991",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-56-glenat.jpg",
			"releaseDate": "2011/01/05",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Bataille décisive au sommet",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 57,
			"isbn": "9782723482318",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-57-glenat.jpg",
			"releaseDate": "2011/04/06",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'ère de Barbe Blanche",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 58,
			"isbn": "9782723483506",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-58-glenat.jpg",
			"releaseDate": "2011/09/07",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "La fin de Portgas D.Ace",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 59,
			"isbn": "9782723483513",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-59-glenat.jpg",
			"releaseDate": "2011/11/30",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Petit frère",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 60,
			"isbn": "9782723486675",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-60-glenat.jpg",
			"releaseDate": "2012/01/04",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "A l 'aube d'une grande aventure vers le nouveau monde",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 61,
			"isbn": "9782723486682",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-61--glenat.jpg",
			"releaseDate": "2012/03/07",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Périple sur l 'île des hommes-poissons",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 62,
			"isbn": "9782723487689",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-62-glenat.jpg",
			"releaseDate": "2012/05/23",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Otohime et Tiger",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 63,
			"isbn": "9782723487696",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-63-glenat.jpg",
			"releaseDate": "2012/07/04",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "100 000 vs 10",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 64,
			"isbn": "9782723487702",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-64-glenat.jpg",
			"releaseDate": "2012/10/03",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Table rase",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 65,
			"isbn": "9782723493062",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-65-glenat.jpg",
			"releaseDate": "2013/01/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Vers le soleil",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 66,
			"isbn": "9782723493260",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-66-glenat.jpg",
			"releaseDate": "2013/04/03",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Cool fight",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 67,
			"isbn": "9782723495738",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-67-glenat.jpg",
			"releaseDate": "2013/07/03",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Alliance entre pirates",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 68,
			"isbn": "9782723496766",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-68-glenat.jpg",
			"releaseDate": "2013/10/09",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "SAD",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 69,
			"isbn": "9782723498234",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-edition-originale-69-glenat.jpg",
			"releaseDate": "2014/01/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Doflamingo sort de l 'ombre",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 70,
			"isbn": "9782723499330",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-70-gelant.jpg",
			"releaseDate": "2014/04/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le colisée de tous Les dangers",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 71,
			"isbn": "978272349934",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-71-fr.jpg",
			"releaseDate": "2014/07/02",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les oubliés de Dressrosa",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 72,
			"isbn": "9782344004319",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-72-glenat.jpg",
			"releaseDate": "2014/10/01",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L 'opération Dressrosa S.O.P",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 73,
			"isbn": "9782344006450",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-73-glenat.jpg",
			"releaseDate": "2015/01/07",
			"owned": true,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 1,
			"isbn": "9791090476004",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-1-ed-edition.jpg",
			"releaseDate": "2011/06/03",
			"owned": false,
			"editor": "ED",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 1,
			"isbn": "9782351420553",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-01.jpg",
			"releaseDate": "2009/03/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 1,
			"isbn": "9782849655375",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-01.jpg",
			"releaseDate": "2009/01/29",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 1,
			"isbn": "9782505008262",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-1-kana.jpg",
			"releaseDate": "2010/07/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Naruto Uzumaki",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 1,
			"isbn": "9782871294146",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_01.jpg",
			"releaseDate": "2002/03/09",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 2,
			"isbn": "9782505014416",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-2-kana.jpg",
			"releaseDate": "2012/04/27",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Drifters",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kohta Hirano",
			"tomeNumber": 2,
			"isbn": "9782759506057",
			"cover": "http://www.manga-news.com/public/images/vols/drifters-2-tonkam.jpg",
			"releaseDate": "2012/04/11",
			"owned": false,
			"editor": "Tonkam",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Prison School",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Hiramoto",
			"tomeNumber": 2,
			"isbn": "9782302041073",
			"cover": "http://www.manga-news.com/public/images/vols/prison-school-2-soleil.jpg",
			"releaseDate": "2014/10/22",
			"owned": false,
			"editor": "Soleil",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 2,
			"isbn": "9782811611705",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-2-pika.jpg",
			"releaseDate": "2013/06/26",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 2,
			"isbn": "9791090476011",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-ed-2.jpg",
			"releaseDate": "2011/12/05",
			"owned": false,
			"editor": "ED",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 2,
			"isbn": "9782351420560",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-02.jpg",
			"releaseDate": "2009/03/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 2,
			"isbn": "9782849655580",
			"cover": "http://www.manga-news.com/public/images/vols/ikigam02.jpg",
			"releaseDate": "2009/04/09",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 2,
			"isbn": "9782505008279",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-jp-02.jpg",
			"releaseDate": "2010/07/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Un client embarassant",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 2,
			"isbn": "9782871294177",
			"cover": "http://www.manga-news.com/public/images/vols/naruto02.JPG",
			"releaseDate": "2002/04/13",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 3,
			"isbn": "9782505014638",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-3-kana.jpg",
			"releaseDate": "2012/06/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Drifters",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kohta Hirano",
			"tomeNumber": 3,
			"isbn": "9782759506064",
			"cover": "http://www.manga-news.com/public/images/vols/drifters-3-tonkam.jpg",
			"releaseDate": "2013/09/25",
			"owned": false,
			"editor": "Tonkam",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Prison School",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Hiramoto",
			"tomeNumber": 3,
			"isbn": "9782302043602",
			"cover": "http://www.manga-news.com/public/images/vols/prison-school-3-soleil.jpg",
			"releaseDate": "2015/01/21",
			"owned": false,
			"editor": "Soleil",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 3,
			"isbn": "9782811612207",
			"cover": "http://www.manga-news.com/public/images/vols/attaque--des-titans-3-pika.jpg",
			"releaseDate": "2013/09/04",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 3,
			"isbn": "9791090476028",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-ed-3.jpg",
			"releaseDate": "2011/12/05",
			"owned": false,
			"editor": "ED",
			"version": "Edition"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 3,
			"isbn": "9782351420577",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-03.jpg",
			"releaseDate": "2009/05/14",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 3,
			"isbn": "9782849656273",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-3.jpg",
			"releaseDate": "2009/07/09",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 3,
			"isbn": "9782505009634",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-3-kana.jpg",
			"releaseDate": "2010/09/17",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Se battre pour ses rêves!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 3,
			"isbn": "9782871294276",
			"cover": "http://www.manga-news.com/public/images/vols/naruto03.JPG",
			"releaseDate": "2002/07/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 4,
			"isbn": "9782505015239",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-4-kana.jpg",
			"releaseDate": "2012/08/24",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Drifters",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kohta Hirano",
			"tomeNumber": 4,
			"isbn": "9782756071756",
			"cover": "http://www.manga-news.com/public/images/vols/drifters-4-tonkam.jpg",
			"releaseDate": "2015/09/23",
			"owned": false,
			"editor": "Tonkam",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Prison School",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Hiramoto",
			"tomeNumber": 4,
			"isbn": "9782302045088",
			"cover": "http://www.manga-news.com/public/images/vols/prison-school-4-soleil.jpg",
			"releaseDate": "2015/04/22",
			"owned": false,
			"editor": "Soleil",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 4,
			"isbn": "9782811612818",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-3-pika.jpg",
			"releaseDate": "2013/10/30",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 4,
			"isbn": "9791090476035",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-4-ed.jpg",
			"releaseDate": "2012/02/17",
			"owned": false,
			"editor": "ED",
			"version": "Edition"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 4,
			"isbn": "9782351423684",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-4-kurokawa.jpg",
			"releaseDate": "2009/07/02",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 4,
			"isbn": "9782849656686",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-asuka-4.jpg",
			"releaseDate": "2009/09/24",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 4,
			"isbn": "9782505009887",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-4-kana.jpg",
			"releaseDate": "2010/11/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le pont des héros!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 4,
			"isbn": "9782871294412",
			"cover": "http://www.manga-news.com/public/images/vols/naruto04.JPG",
			"releaseDate": "2002/10/19",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 5,
			"isbn": "9782505015512",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-5-kana.jpg",
			"releaseDate": "2012/10/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 5,
			"isbn": "9782845387393",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_05-2.jpg",
			"releaseDate": "2006/06/08",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "A Silent Voice",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshitoki Oima",
			"tomeNumber": 5,
			"isbn": "9782355928659",
			"cover": "http://www.manga-news.com/public/images/vols/silent-voice-5-ki-oon.jpg",
			"releaseDate": "2015/10/08",
			"owned": false,
			"editor": "Ki-oon",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Prison School",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Hiramoto",
			"tomeNumber": 5,
			"isbn": "9782302046092",
			"cover": "http://www.manga-news.com/public/images/vols/prison-school-5-soleil.jpg",
			"releaseDate": "2015/07/01",
			"owned": false,
			"editor": "Soleil",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 5,
			"isbn": "9782811613297",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-5-pika.jpg",
			"releaseDate": "2014/01/01",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 5,
			"isbn": "9791090476042",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-5.jpg",
			"releaseDate": "2012/10/03",
			"owned": false,
			"editor": "ED",
			"version": "Edition"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 5,
			"isbn": "9782505001614",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_05.jpg",
			"releaseDate": "2007/08/24",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 5,
			"isbn": "9782351423691",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-kurokawa-5.jpg",
			"releaseDate": "2009/09/10",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 5,
			"isbn": "9782849657249",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-asuka-5.jpg",
			"releaseDate": "2010/01/28",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 5,
			"isbn": "9782505010302",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-5-kana.jpg",
			"releaseDate": "2011/01/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Les rivaux",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 5,
			"isbn": "9782871294917",
			"cover": "http://www.manga-news.com/public/images/vols/naruto05.JPG",
			"releaseDate": "2003/01/25",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 6,
			"isbn": "9782845994973",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic6_g.jpg",
			"releaseDate": "2007/12/05",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 6,
			"isbn": "9782505015826",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-hero-6-kana.jpg",
			"releaseDate": "2012/12/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 6,
			"isbn": "9782723474689",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-6-glenat.jpg",
			"releaseDate": "2010/09/22",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 6,
			"isbn": "9782845387744",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_06-2.jpg",
			"releaseDate": "2006/08/24",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 6,
			"isbn": "9782811613860",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-6-pika.jpg",
			"releaseDate": "2014/03/05",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 6,
			"isbn": "9791090476059",
			"cover": "http://www.manga-news.com/public/images/vols/Head-trick-6.jpg",
			"releaseDate": "2013/06/06",
			"owned": false,
			"editor": "ED",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 6,
			"isbn": "9782505001812",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_06.jpg",
			"releaseDate": "2007/10/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 6,
			"isbn": "9782351423707",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-kurokawa-6.jpg",
			"releaseDate": "2009/11/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 6,
			"isbn": "9782849657911",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-kaze-manga-6.jpg",
			"releaseDate": "2010/04/29",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 6,
			"isbn": "9782505010760",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-6-kana.jpg",
			"releaseDate": "2011/04/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La détermination de Sakura !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 6,
			"isbn": "9782871295112",
			"cover": "http://www.manga-news.com/public/images/vols/naruto06.JPG",
			"releaseDate": "2003/03/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 7,
			"isbn": "9782845995857",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic7_g.jpg",
			"releaseDate": "2006/04/18",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 7,
			"isbn": "9782505018094",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-7-kana.jpg",
			"releaseDate": "2013/04/19",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 7,
			"isbn": "9782723474696",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-7-glenat.png",
			"releaseDate": "2010/11/24",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 7,
			"isbn": "9782845388239",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_07-2.jpg",
			"releaseDate": "2006/10/12",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 7,
			"isbn": "9782351420478",
			"cover": "http://www.manga-news.com/public/images/vols/fma_07.jpg",
			"releaseDate": "2006/07/13",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 7,
			"isbn": "9782811614355",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-7-pika.jpg",
			"releaseDate": "2014/05/02",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 7,
			"isbn": "9791090476066",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-7-ed-edition-normal.jpg",
			"releaseDate": "2014/05/12",
			"owned": false,
			"editor": "ED",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 7,
			"isbn": "9782505001997",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_07.jpg",
			"releaseDate": "2007/12/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 7,
			"isbn": "9782351423967",
			"cover": "http://www.manga-news.com/public/images/vols/Soul-eater-kurokawa-7.jpg",
			"releaseDate": "2010/01/14",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 7,
			"isbn": "9782849658604",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-7-kaze-manga.jpg",
			"releaseDate": "2010/07/01",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 7,
			"isbn": "9782505011699",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-7-kana.jpg",
			"releaseDate": "2011/07/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La voie à suivre !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 7,
			"isbn": "9782871295358",
			"cover": "http://www.manga-news.com/public/images/vols/naruto07.JPG",
			"releaseDate": "2003/07/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 8,
			"isbn": "9782845996472",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic8_g.jpg",
			"releaseDate": "2006/12/06",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 8,
			"isbn": "9782505018100",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-8-kana.jpg",
			"releaseDate": "2013/09/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 8,
			"isbn": "9782723478809",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-8-glenat.jpg",
			"releaseDate": "2011/01/26",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 8,
			"isbn": "9782845388598",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_08-2.jpg",
			"releaseDate": "2006/12/07",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 8,
			"isbn": "9782351420485",
			"cover": "http://www.manga-news.com/public/images/vols/fma_08.jpg",
			"releaseDate": "2006/09/14",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 8,
			"isbn": "9782811615154",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-8-pika.jpg",
			"releaseDate": "2014/07/02",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Head Trick",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "E.D & K 'Yat",
			"tomeNumber": 8,
			"isbn": "9791090476073",
			"cover": "http://www.manga-news.com/public/images/vols/head-trick-8.jpg",
			"releaseDate": "2015/07/08",
			"owned": false,
			"editor": "ED",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 8,
			"isbn": "9782505002697",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_08.jpg",
			"releaseDate": "2008/02/15",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 8,
			"isbn": "9782351423974",
			"cover": "http://www.manga-news.com/public/images/vols/Soul-eater-kurokawa-8.jpg",
			"releaseDate": "2010/03/11",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 8,
			"isbn": "9782820300614",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-8-kaze.jpg",
			"releaseDate": "2011/03/24",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 8,
			"isbn": "9782505012412",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-8-kana.jpg",
			"releaseDate": "2011/10/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Au péril de sa vie !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 8,
			"isbn": "9782871295525",
			"cover": "http://www.manga-news.com/public/images/vols/naruto08.JPG",
			"releaseDate": "2003/10/12",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 9,
			"isbn": "9782845997233",
			"cover": "http://www.manga-news.com/public/images/vols/xxxholic9_g.jpg",
			"releaseDate": "2007/05/16",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 9,
			"isbn": "9782505018117",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-9-kana.jpg",
			"releaseDate": "2013/12/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 9,
			"isbn": "9782723478816",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-9-glenat.jpg",
			"releaseDate": "2011/03/16",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 9,
			"isbn": "9782845389434",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_09-2.jpg",
			"releaseDate": "2007/02/08",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 9,
			"isbn": "9782351420492",
			"cover": "http://www.manga-news.com/public/images/vols/fma_09.jpg",
			"releaseDate": "2006/11/09",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 9,
			"isbn": "9782811615628",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-9-pika.jpg",
			"releaseDate": "2014/09/03",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 9,
			"isbn": "9782505002970",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_09.jpg",
			"releaseDate": "2008/04/11",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 9,
			"isbn": "9782351423981",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-9-kurokawa.jpg",
			"releaseDate": "2010/05/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 9,
			"isbn": "9782820302779",
			"cover": "http://www.manga-news.com/public/images/vols/Ikigami-9-kaze.jpg",
			"releaseDate": "2012/01/18",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 9,
			"isbn": "9782505049685",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-9-kana.jpg",
			"releaseDate": "2012/01/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Neiji et Hinata",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 9,
			"isbn": "9782871295990",
			"cover": "http://www.manga-news.com/public/images/vols/naruto09.JPG",
			"releaseDate": "2004/01/08",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 10,
			"isbn": "9782505060147",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-10-kana.jpg",
			"releaseDate": "2014/04/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 10,
			"isbn": "9782723478823",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-10-10-glenat.jpg",
			"releaseDate": "2011/05/18",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 10,
			"isbn": "9782845389656",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_10.jpg",
			"releaseDate": "2007/04/12",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 10,
			"isbn": "9782351421475",
			"cover": "http://www.manga-news.com/public/images/vols/fma_10.jpg",
			"releaseDate": "2007/01/11",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 10,
			"isbn": "9782811615994",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-10-pika.jpg",
			"releaseDate": "2014/10/29",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 10,
			"isbn": "9782845997813",
			"cover": "http://www.manga-news.com/public/images/vols/xxx_holic_10.jpg",
			"releaseDate": "2007/10/17",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 10,
			"isbn": "9782505003038",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_10.jpg",
			"releaseDate": "2008/06/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 10,
			"isbn": "9782351423998",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-10-kurokawa.jpg",
			"releaseDate": "2010/07/01",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Ikigami-Préavis de mort",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Motoro Mase",
			"tomeNumber": 10,
			"isbn": "9782820304506",
			"cover": "http://www.manga-news.com/public/images/vols/ikigami-10-kaze.jpg",
			"releaseDate": "2012/06/20",
			"owned": false,
			"editor": "Kaze",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 10,
			"isbn": "9782505014379",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-10-kana.jpg",
			"releaseDate": "2012/04/27",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Un ninja formidable...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 10,
			"isbn": "9782871296140",
			"cover": "http://www.manga-news.com/public/images/vols/naruto10.JPG",
			"releaseDate": "2004/03/20",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 11,
			"isbn": "9782505060734",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-tome-11-kana.jpg",
			"releaseDate": "2014/08/22",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 11,
			"isbn": "9782723478830",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-11-perfect-glenat.jpg",
			"releaseDate": "2011/07/20",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 11,
			"isbn": "9782809400106",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_11.jpg",
			"releaseDate": "2007/06/14",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 11,
			"isbn": "9782351421512",
			"cover": "http://www.manga-news.com/public/images/vols/fma_11.jpg",
			"releaseDate": "2007/03/08",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 11,
			"isbn": "9782811617240",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-11-pika.jpg",
			"releaseDate": "2015/01/07",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 11,
			"isbn": "9782845998339",
			"cover": "http://www.manga-news.com/public/images/vols/xxx_holic_11.jpg",
			"releaseDate": "2008/04/23",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 11,
			"isbn": "9782505003694",
			"cover": "http://www.manga-news.com/public/images/vols/deathnote_11.jpg",
			"releaseDate": "2008/07/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 11,
			"isbn": "9782351424001",
			"cover": "http://www.manga-news.com/public/images/vols/Soul_11-kurokawa.jpg",
			"releaseDate": "2010/09/09",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 11,
			"isbn": "9782505014799",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-11-kana.jpg",
			"releaseDate": "2012/07/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Mon nouveau prof !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 11,
			"isbn": "9782871296249",
			"cover": "http://www.manga-news.com/public/images/vols/naruto11.JPG",
			"releaseDate": "2004/05/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 12,
			"isbn": "9782505060741",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-12-kana.jpg",
			"releaseDate": "2014/12/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 12,
			"isbn": "9782723478847",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-12-glenat.jpg",
			"releaseDate": "2011/09/21",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 12,
			"isbn": "9782809400649",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_12.jpg",
			"releaseDate": "2007/08/23",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 12,
			"isbn": "9782351421567",
			"cover": "http://www.manga-news.com/public/images/vols/fma_12.jpg",
			"releaseDate": "2007/05/10",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 12,
			"isbn": "9782845383357",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_12.jpg",
			"releaseDate": "2004/05/27",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 12,
			"isbn": "9782811618360",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-titans-12-pika.jpg",
			"releaseDate": "2015/03/04",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 12,
			"isbn": "9782845999398",
			"cover": "http://www.manga-news.com/public/images/vols/xxx_holic_12.jpg",
			"releaseDate": "2008/10/08",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 12,
			"isbn": "9782505004295",
			"cover": "http://www.manga-news.com/public/images/vols/death_note_12.jpg",
			"releaseDate": "2008/10/03",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 12,
			"isbn": "9782351425749",
			"cover": "http://www.manga-news.com/public/images/vols/Soul_12-kurokawa.jpg",
			"releaseDate": "2010/11/10",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 12,
			"isbn": "9782505015475",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-12-kana.jpg",
			"releaseDate": "2012/10/19",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "L'oiseau s'est envolé...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 12,
			"isbn": "9782871296355",
			"cover": "http://www.manga-news.com/public/images/vols/naruto12.JPG",
			"releaseDate": "2004/07/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 13,
			"isbn": "9782505062929",
			"cover": "http://www.manga-news.com/public/images/vols/iam-hero-13-kana.jpg",
			"releaseDate": "2015/04/17",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 13,
			"isbn": "9782723482660",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-13-glenat.jpg",
			"releaseDate": "2011/11/30",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 13,
			"isbn": "9782809401134",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_13.jpg",
			"releaseDate": "2007/10/11",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 13,
			"isbn": "9782351421574",
			"cover": "http://www.manga-news.com/public/images/vols/fma_13.jpg",
			"releaseDate": "2007/07/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 13,
			"isbn": "9782845383746",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_13.jpg",
			"releaseDate": "2004/08/19",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 13,
			"isbn": "9782811618803",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-titans-13-pika.jpg",
			"releaseDate": "2015/05/06",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 13,
			"isbn": "9782811600402",
			"cover": "http://www.manga-news.com/public/images/vols/Holic13.jpg",
			"releaseDate": "2009/04/08",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Death Note",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 13,
			"isbn": "9782505004523",
			"cover": "http://www.manga-news.com/public/images/vols/death-note-13.jpg",
			"releaseDate": "2009/09/25",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 13,
			"isbn": "9782351425756",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-13-kurokawa.jpg",
			"releaseDate": "2011/01/13",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 13,
			"isbn": "9782505016847",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-13-kana.jpg",
			"releaseDate": "2013/01/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La fin de l'examen...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 13,
			"isbn": "9782871296461",
			"cover": "http://www.manga-news.com/public/images/vols/naruto13.JPG",
			"releaseDate": "2004/09/28",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "I Am A Hero",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kengo Hanazawa",
			"tomeNumber": 14,
			"isbn": "9782505062936",
			"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-14-kana.jpg",
			"releaseDate": "2015/08/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 14,
			"isbn": "9782723486743",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-14-glenat.jpg",
			"releaseDate": "2012/02/22",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 14,
			"isbn": "9782809401615",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_14.jpg",
			"releaseDate": "2007/12/06",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 14,
			"isbn": "9782351421581",
			"cover": "http://www.manga-news.com/public/images/vols/fma_14.jpg",
			"releaseDate": "2007/09/13",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 14,
			"isbn": "9782845384149",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_14.jpg",
			"releaseDate": "2004/11/25",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 14,
			"isbn": "9782811618810",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-titans-14-pika.jpg",
			"releaseDate": "2015/07/01",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 14,
			"isbn": "9782811601652",
			"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-pika-14.jpg",
			"releaseDate": "2010/01/06",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 14,
			"isbn": "9782351425763",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-14-kurokawa.jpg",
			"releaseDate": "2011/03/10",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 14,
			"isbn": "9782845991651",
			"cover": "http://www.manga-news.com/public/images/vols/gto14_g.jpg",
			"releaseDate": "2002/04/16",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 14,
			"isbn": "9782505017271",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-14-kana.jpg",
			"releaseDate": "2013/04/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Hokage contre Hokage !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 14,
			"isbn": "9782871296577",
			"cover": "http://www.manga-news.com/public/images/vols/naruto14couv.JPG",
			"releaseDate": "2004/11/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dr. Slump",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 15,
			"isbn": "9782723486750",
			"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-15-glenat.jpg",
			"releaseDate": "2012/04/18",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 15,
			"isbn": "9782809402117",
			"cover": "http://www.manga-news.com/public/images/vols/citu_hunter_ultime_15.jpg",
			"releaseDate": "2008/02/14",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 15,
			"isbn": "9782351421598",
			"cover": "http://www.manga-news.com/public/images/vols/fma_15.jpg",
			"releaseDate": "2007/11/08",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 15,
			"isbn": "9782845384590",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_15.jpg",
			"releaseDate": "2005/02/10",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "L 'Attaque Des Titans",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hajime Isayama",
			"tomeNumber": 15,
			"isbn": "9782811620943",
			"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-15-pika.jpg",
			"releaseDate": "2015/09/02",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 15,
			"isbn": "9782811603182",
			"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-15-pika.jpg",
			"releaseDate": "2010/06/30",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 15,
			"isbn": "9782351425770",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-15-kurokawa.jpg",
			"releaseDate": "2011/05/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 15,
			"isbn": "9782845991705",
			"cover": "http://www.manga-news.com/public/images/vols/gto15_g.jpg",
			"releaseDate": "2002/05/14",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 15,
			"isbn": "9782505017288",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-15-kana.jpg",
			"releaseDate": "2013/07/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le répertoire ninpô de Naruto !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 15,
			"isbn": "9782871297048",
			"cover": "http://www.manga-news.com/public/images/vols/naruto15.JPG",
			"releaseDate": "2005/01/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 16,
			"isbn": "9782809402896",
			"cover": "http://www.manga-news.com/public/images/vols/citu_hunter_ultime_16.jpg",
			"releaseDate": "2008/04/24",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 16,
			"isbn": "9782351422656",
			"cover": "http://www.manga-news.com/public/images/vols/fma_16.jpg",
			"releaseDate": "2008/03/13",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 16,
			"isbn": "9782845385016",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_16.jpg",
			"releaseDate": "2005/05/12",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 16,
			"isbn": "9782811603700",
			"cover": "http://www.manga-news.com/public/images/vols/XXXHolic16-pika.jpg",
			"releaseDate": "2010/10/20",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 16,
			"isbn": "9782351425787",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-16-kurokawa.jpg",
			"releaseDate": "2011/07/07",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 16,
			"isbn": "9782845991767",
			"cover": "http://www.manga-news.com/public/images/vols/gto16_g.jpg",
			"releaseDate": "2002/06/18",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 16,
			"isbn": "9782505017295",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-16-kana.jpg",
			"releaseDate": "2013/10/18",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La bataille de Konoha, dernier acte!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 16,
			"isbn": "9782871297239",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_16.jpg",
			"releaseDate": "2005/03/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 17,
			"isbn": "9782809403374",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_deluxe_17.jpg",
			"releaseDate": "2008/06/12",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 17,
			"isbn": "9782351423189",
			"cover": "http://www.manga-news.com/public/images/vols/fma_17.jpg",
			"releaseDate": "2008/05/15",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 17,
			"isbn": "9782845385399",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_17.jpg",
			"releaseDate": "2005/08/25",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 17,
			"isbn": "9782811604158",
			"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-17-pika.jpg",
			"releaseDate": "2011/01/19",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 17,
			"isbn": "9782351426043",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-17-kurokawa.jpg",
			"releaseDate": "2011/10/13",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 17,
			"isbn": "9782845991811",
			"cover": "http://www.manga-news.com/public/images/vols/gto17_g.jpg",
			"releaseDate": "2002/08/27",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 17,
			"isbn": "9782505060062",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-17-kana.jpg",
			"releaseDate": "2014/01/24",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La puissance d'Itachi !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 17,
			"isbn": "9782871297239",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_17.jpg",
			"releaseDate": "2005/05/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 18,
			"isbn": "9782809403787",
			"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_18.jpg",
			"releaseDate": "2008/08/21",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 18,
			"isbn": "9782351423257",
			"cover": "http://www.manga-news.com/public/images/vols/fma_18.jpg",
			"releaseDate": "2008/09/11",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 18,
			"isbn": "9782845386181",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_18.jpg",
			"releaseDate": "2005/11/10",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 18,
			"isbn": "9782811604967",
			"cover": "http://www.manga-news.com/public/images/vols/XXX-HOLIC-18-pika.jpg",
			"releaseDate": "2011/06/15",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 18,
			"isbn": "9782351426906",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-18-kurokawa.jpg",
			"releaseDate": "2011/12/08",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 18,
			"isbn": "9782845991866",
			"cover": "http://www.manga-news.com/public/images/vols/gto18_g.jpg",
			"releaseDate": "2002/09/17",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 18,
			"isbn": "9782505060444",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-18.jpg",
			"releaseDate": "2014/04/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La décision de Tsunade !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 18,
			"isbn": "9782871297970",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_18.jpg",
			"releaseDate": "2005/07/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 19,
			"isbn": "9782809404234",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-19.jpg",
			"releaseDate": "2008/10/23",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 19,
			"isbn": "9782351423356",
			"cover": "http://www.manga-news.com/public/images/vols/fma_19.jpg",
			"releaseDate": "2008/09/11",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 19,
			"isbn": "9782845386549",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_19.jpg",
			"releaseDate": "2006/09/02",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "XXX Holic",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "CLAMP",
			"tomeNumber": 19,
			"isbn": "9782811605582",
			"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-19-pika.jpg",
			"releaseDate": "2011/10/19",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 19,
			"isbn": "9782351426913",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-19-kurokawa.jpg",
			"releaseDate": "2012/03/08",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 19,
			"isbn": "9782845991897",
			"cover": "http://www.manga-news.com/public/images/vols/gto19_g.jpg",
			"releaseDate": "2002/10/15",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 19,
			"isbn": "9782505060451",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-19-kana.jpg",
			"releaseDate": "2014/07/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le successeur",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 19,
			"isbn": "9782871298168",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_19.jpg",
			"releaseDate": "2005/09/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 20,
			"isbn": "9782809404586",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-20.jpg",
			"releaseDate": "2008/12/04",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Yajirobe",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 20,
			"isbn": "9782723419239",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_20.jpg",
			"releaseDate": "1996/04/26",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 20,
			"isbn": "9782351424117",
			"cover": "http://www.manga-news.com/public/images/vols/fma-20.jpg",
			"releaseDate": "2009/04/09",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 20,
			"isbn": "9782845387973",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_20.jpg",
			"releaseDate": "2006/09/28",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 20,
			"isbn": "9782351427743",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-20-kurokawa.jpg",
			"releaseDate": "2012/07/05",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 20,
			"isbn": "9782845991958",
			"cover": "http://www.manga-news.com/public/images/vols/gto20_g.jpg",
			"releaseDate": "2002/11/19",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Bakuman",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Takeshi Obata & Tsugumi Oba",
			"tomeNumber": 20,
			"isbn": "9782505060468",
			"cover": "http://www.manga-news.com/public/images/vols/bakuman-20-kana.jpg",
			"releaseDate": "2014/11/28",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Naruto versus Sasuke !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 20,
			"isbn": "9782871298342",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto20_05112005.jpg",
			"releaseDate": "2005/11/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 21,
			"isbn": "9782809406092",
			"cover": "http://www.manga-news.com/public/images/vols/cityhunter21_f.jpg",
			"releaseDate": "2009/02/11",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 21,
			"isbn": "9782723418645",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_21.jpg",
			"releaseDate": "1996/06/24",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 21,
			"isbn": "9782351424285",
			"cover": "http://www.manga-news.com/public/images/vols/fma-21.jpg",
			"releaseDate": "2009/07/02",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 21,
			"isbn": "9782845389403",
			"cover": "http://www.manga-news.com/public/images/vols/20th_century_21.jpg",
			"releaseDate": "2007/03/08",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 21,
			"isbn": "9782351428290",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-21-kurokawa.jpg",
			"releaseDate": "2012/10/11",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 21,
			"isbn": "9782845992016",
			"cover": "http://www.manga-news.com/public/images/vols/gto21_g.jpg",
			"releaseDate": "2002/12/03",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Sans pitié!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 21,
			"isbn": "9782871298908",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto21_20012006.jpg",
			"releaseDate": "2006/01/20",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 22,
			"isbn": "9782809407105",
			"cover": "http://www.manga-news.com/public/images/vols/chunter22_f.jpg",
			"releaseDate": "2009/04/08",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 22,
			"isbn": "9782351424483",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-kurokawa-22.jpg",
			"releaseDate": "2009/11/12",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "20th Century Boys",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Naoki Urasawa",
			"tomeNumber": 22,
			"isbn": "9782809400373",
			"cover": "http://www.manga-news.com/public/images/vols/20th-century-boys-22-panini.jpg",
			"releaseDate": "2007/07/12",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 22,
			"isbn": "9782351428764",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-22-kurokawa.jpg",
			"releaseDate": "2013/03/04",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 22,
			"isbn": "9782845992085",
			"cover": "http://www.manga-news.com/public/images/vols/gto22_g.jpg",
			"releaseDate": "2003/01/14",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Réincarnation",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 22,
			"isbn": "9782871299110",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto22_10032006.jpg",
			"releaseDate": "2006/03/03",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 23,
			"isbn": "9782809408041",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-ultime-23.jpg",
			"releaseDate": "2009/06/10",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 23,
			"isbn": "9782351425077",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-kurokawa-23.jpg",
			"releaseDate": "2010/04/08",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 23,
			"isbn": "9782351428849",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-23-kurokawa.jpg",
			"releaseDate": "2013/07/04",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 23,
			"isbn": "9782845992139",
			"cover": "http://www.manga-news.com/public/images/vols/gto23_g.jpg",
			"releaseDate": "2003/02/25",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Crise...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 23,
			"isbn": "9782871299318",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto23_05052006.jpg",
			"releaseDate": "2006/05/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 24,
			"isbn": "9782809408997",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-24-panini.jpg",
			"releaseDate": "2009/08/26",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 24,
			"isbn": "9782351425497",
			"cover": "http://www.manga-news.com/public/images/vols/FMA_24-kurokawa.jpg",
			"releaseDate": "2010/09/09",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 24,
			"isbn": "9782505003564",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter_24.jpg",
			"releaseDate": "2008/07/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 24,
			"isbn": "9782351429303",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-24-kurokawa.jpg",
			"releaseDate": "2013/11/14",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 24,
			"isbn": "9782845992245",
			"cover": "http://www.manga-news.com/public/images/vols/gto24_g.jpg",
			"releaseDate": "2003/03/18",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Tournant décisif !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 24,
			"isbn": "9782871299615",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-24-kana.jpg",
			"releaseDate": "2006/07/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 25,
			"isbn": "9782809409185",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-ultimate-panini-25.jpg",
			"releaseDate": "2009/09/16",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 25,
			"isbn": "9782351425732",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-25-kurokawa.jpg",
			"releaseDate": "2011/01/13",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 25,
			"isbn": "9782505005230",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter25.jpg",
			"releaseDate": "2009/01/16",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Soul Eater",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Atsushi Ohkubo",
			"tomeNumber": 25,
			"isbn": "9782368520215",
			"cover": "http://www.manga-news.com/public/images/vols/soul-eater-25-kurokawa.jpg",
			"releaseDate": "2014/07/03",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "GTO-Great Teacher Onizuka",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tôru Fujisawa",
			"tomeNumber": 25,
			"isbn": "9782845992313",
			"cover": "http://www.manga-news.com/public/images/vols/gto25_g.jpg",
			"releaseDate": "2003/04/22",
			"owned": false,
			"editor": "Pika",
			"version": "fr"
		}, {
			"tomeTitle": "Itachi et Sasuke",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 25,
			"isbn": "9782871299776",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto25_02092006.jpg",
			"releaseDate": "2006/09/22",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 26,
			"isbn": "9782809409352",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-panini-26.jpg",
			"releaseDate": "2009/10/14",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Le Petit Dende",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 26,
			"isbn": "9782723422253",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_26.jpg",
			"releaseDate": "1997/05/29",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 26,
			"isbn": "9782351426319",
			"cover": "http://www.manga-news.com/public/images/vols/full-metal-alchemist-26-kurokawa.jpg",
			"releaseDate": "2011/04/14",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 26,
			"isbn": "9782505006176",
			"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter-kana-26.jpg",
			"releaseDate": "2009/08/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Séparation...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 26,
			"isbn": "9782871299875",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto26_15112006.jpg",
			"releaseDate": "2006/11/17",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 27,
			"isbn": "9782809410068",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-ultime-panini-27.jpg",
			"releaseDate": "2009/12/02",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "FullMetal Alchemist",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Hiromu Arakawa",
			"tomeNumber": 27,
			"isbn": "9782351426517",
			"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-27-kurokawa.jpg",
			"releaseDate": "2011/07/07",
			"owned": false,
			"editor": "Kurokawa",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 27,
			"isbn": "9782505009078",
			"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunetr-27-kana.jpg",
			"releaseDate": "2010/07/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le jour du départ !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 27,
			"isbn": "9782505000310",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto27_20012007.jpg",
			"releaseDate": "2007/01/19",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 28,
			"isbn": "9782809411331",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-panini-28.jpg",
			"releaseDate": "2010/02/17",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Trunks",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 28,
			"isbn": "9782723423465",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_28.jpg",
			"releaseDate": "1997/08/19",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 28,
			"isbn": "9782505014706",
			"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-28-kana.jpg",
			"releaseDate": "2012/06/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le retour au pays !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 28,
			"isbn": "9782505000921",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto28_07032007.jpg",
			"releaseDate": "2007/03/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 29,
			"isbn": "9782809412642",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-panini-29.jpg",
			"releaseDate": "2010/04/07",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 29,
			"isbn": "9782723464741",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-29.jpg",
			"releaseDate": "2009/01/27",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 29,
			"isbn": "9782505015710",
			"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-29-kana.jpg",
			"releaseDate": "2012/11/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Kakashi versus Itachi!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 29,
			"isbn": "9782505000976",
			"cover": "http://www.manga-news.com/public/images/vols/Naruto29_05052007.jpg",
			"releaseDate": "2007/05/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 30,
			"isbn": "9782809413755",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-30-panini.jpg",
			"releaseDate": "2010/06/09",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "Réunification",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 30,
			"isbn": "9782723423489",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_30.jpg",
			"releaseDate": "1998/02/18",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 30,
			"isbn": "9782723464758",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-30.jpg",
			"releaseDate": "2009/03/11",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 30,
			"isbn": "9782505018087",
			"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-30-kana.jpg",
			"releaseDate": "2013/06/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Chiyo et Sakura",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 30,
			"isbn": "9782505001522",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_30.jpg",
			"releaseDate": "2007/07/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 31,
			"isbn": "9782809414431",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-31-panini.jpg",
			"releaseDate": "2010/08/25",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 31,
			"isbn": "9782723467223",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-31.jpg",
			"releaseDate": "2009/05/20",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 31,
			"isbn": "9782505019336",
			"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-31-kana.jpg",
			"releaseDate": "2013/09/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Testament !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 31,
			"isbn": "9782505001676",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_31.jpg",
			"releaseDate": "2007/09/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "City Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Tsukasa Hojo",
			"tomeNumber": 32,
			"isbn": "9782809414554",
			"cover": "http://www.manga-news.com/public/images/vols/city-hunter-32-panini.jpg",
			"releaseDate": "2010/10/13",
			"owned": false,
			"editor": "Panini",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 32,
			"isbn": "9782723467230",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-glenat-32.jpg",
			"releaseDate": "2009/07/01",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Hunter X Hunter",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Yoshihiro Togashi",
			"tomeNumber": 32,
			"isbn": "9782505019343",
			"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-32-kana.jpg",
			"releaseDate": "2013/12/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Sur les traces de Sasuke !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 32,
			"isbn": "9782505001928",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_32.jpg",
			"releaseDate": "2007/10/19",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le Défi",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 33,
			"isbn": "9782723423519",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_33.jpg",
			"releaseDate": "1998/08/18",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 33,
			"isbn": "9782723477123",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-33-glenat.jpg",
			"releaseDate": "2011/01/26",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Mission secrète...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 33,
			"isbn": "9782505002420",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_33.jpg",
			"releaseDate": "2007/12/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le Combat final de Sangoku",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 34,
			"isbn": "9782723423526",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_34.jpg",
			"releaseDate": "1998/09/25",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 34,
			"isbn": "9782723480741",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-34-glenat.jpg",
			"releaseDate": "2011/04/20",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Les retrouvailles...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 34,
			"isbn": "9782505002796",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_34.jpg",
			"releaseDate": "2008/02/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 35,
			"isbn": "9782723484077",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-35-glenat.jpg",
			"releaseDate": "2011/06/29",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Un nouveau duo !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 35,
			"isbn": "9782505002963",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_35.jpg",
			"releaseDate": "2008/04/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 36,
			"isbn": "9782723491129",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-36-glenat.jpg",
			"releaseDate": "2013/01/02",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L'équipe 10",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 36,
			"isbn": "9782505003236",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_36.jpg",
			"releaseDate": "2008/06/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Berserk",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Kentaro Miura",
			"tomeNumber": 37,
			"isbn": "9782723495943",
			"cover": "http://www.manga-news.com/public/images/vols/berserk-37-glenat.jpg",
			"releaseDate": "2014/07/02",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le combat de Shikamaru !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 37,
			"isbn": "9782505003786",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_37.jpg",
			"releaseDate": "2008/07/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "nuit de l 'entraînement...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 38,
			"isbn": "9782505004325",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_38.jpg",
			"releaseDate": "2008/09/19",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Boo",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 39,
			"isbn": "9782723428552",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_39.jpg",
			"releaseDate": "1999/10/24",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Ceux qui font bouger les choses",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 39,
			"isbn": "9782505004172",
			"cover": "http://www.manga-news.com/public/images/vols/naruto_39.jpg",
			"releaseDate": "2008/11/28",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La Fusion",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 40,
			"isbn": "9782723428569",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_40.jpg",
			"releaseDate": "2000/01/21",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "L'art ultime !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 40,
			"isbn": "9782505005285",
			"cover": "http://www.manga-news.com/public/images/vols/naruto40.jpg",
			"releaseDate": "2009/02/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Super Gotenks",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 41,
			"isbn": "9782723428576",
			"cover": "http://www.manga-news.com/public/images/vols/dragonball_41.jpg",
			"releaseDate": "2000/05/24",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le choix de Jiraya !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 41,
			"isbn": "9782505005582",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-41.jpg",
			"releaseDate": "2009/04/17",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La Victoire",
			"mangasName": "Dragon Ball",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Akira Toriyama",
			"tomeNumber": 42,
			"isbn": "9782723428583",
			"cover": "http://www.manga-news.com/public/images/vols/DragonBall42.jpg",
			"releaseDate": "2000/11/11",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Le secret du kaléidoscope hypnotique...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 42,
			"isbn": "9782505005995",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-42.jpg",
			"releaseDate": "2009/07/03",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Celui qui sait",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 43,
			"isbn": "9782505006701",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-43.jpg",
			"releaseDate": "2009/08/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Traditions d'ermite",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 44,
			"isbn": "9782505007111",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-44.jpg",
			"releaseDate": "2009/10/23",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Konoha, Théâtre de guerre!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 45,
			"isbn": "9782505007548",
			"cover": "http://www.manga-news.com/public/images/vols/naruro-kana-45.jpg",
			"releaseDate": "2009/12/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le retour de Naruto !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 46,
			"isbn": "9782505007883",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-46.jpg",
			"releaseDate": "2010/01/15",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le sceau brisé !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 47,
			"isbn": "9782505008699",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-47.jpg",
			"releaseDate": "2010/03/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Hourras au village !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 48,
			"isbn": "9782505008705",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-48-kana.jpg",
			"releaseDate": "2010/05/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le conseil des cinq Kage...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 49,
			"isbn": "9782505008712",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-49-kana.jpg",
			"releaseDate": "2010/07/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Duel à mort dans la prison aqueuse !!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 50,
			"isbn": "9782505009566",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-50-kana.jpg",
			"releaseDate": "2010/09/03",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Sasuke vs danzô...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 51,
			"isbn": "9782505009566",
			"cover": "http://www.manga-news.com/public/images/vols/.naruto-51-kana_m.jpg",
			"releaseDate": "2010/11/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Réalités multiples",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 52,
			"isbn": "9782505010616",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-52-kana.jpg",
			"releaseDate": "2011/03/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "La naissance de Naruto",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 53,
			"isbn": "9782505011156",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-53-kana.jpg",
			"releaseDate": "2011/07/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Un pont pour la paix",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 54,
			"isbn": "9782505012894",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-54-kana.jpg",
			"releaseDate": "2011/11/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Le début de la grande guerre !",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 55,
			"isbn": "9782505014287",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-55-kana.jpg",
			"releaseDate": "2012/07/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "L'équipe asuna de nouveau réunie !",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 56,
			"isbn": "9782505014867",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-56-kana.jpg",
			"releaseDate": "2012/09/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Naruto part en guerre...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 57,
			"isbn": "9782505015529",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-57-kana.jpg",
			"releaseDate": "2012/11/02",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Naruto vs Itachi!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 58,
			"isbn": "9782505017653",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-58-kana.jpg",
			"releaseDate": "2013/03/01",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Côte à côte...!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 59,
			"isbn": "9782505018421",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-59-kana.jpg",
			"releaseDate": "2013/06/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Kurama",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 60,
			"isbn": "9782505018438",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-60-kana.jpg",
			"releaseDate": "2013/09/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "frères unis dans le combat!!",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 61,
			"isbn": "9782505019596",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-61-kana.jpg",
			"releaseDate": "2013/12/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Fissure",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 62,
			"isbn": "9782505060192",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-62-kana.jpg",
			"releaseDate": "2014/03/07",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Monde onirique",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 63,
			"isbn": "9782505060833",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-63-kana.jpg",
			"releaseDate": "2014/07/04",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Jubi",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 64,
			"isbn": "9782505060840",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-64-kana.jpg",
			"releaseDate": "2014/09/05",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 65,
			"isbn": "9782505061267",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-65-kana.jpg",
			"releaseDate": "2014/11/21",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 66,
			"isbn": "9782505061656",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-66-kana.jpg",
			"releaseDate": "2015/03/06",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 67,
			"isbn": "9782505061663",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-67-kana.jpg",
			"releaseDate": "2015/07/03",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "",
			"mangasName": "Naruto",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Masashi Kishimoto",
			"tomeNumber": 68,
			"isbn": "9782505061670",
			"cover": "http://www.manga-news.com/public/images/vols/naruto-68-kana.jpg",
			"releaseDate": "2015/09/11",
			"owned": false,
			"editor": "Kana",
			"version": "fr"
		}, {
			"tomeTitle": "Je serai toujours à tes côtés",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 74,
			"isbn": "9782344006597",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-74-glenat.jpg",
			"releaseDate": "2015/04/01",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Ma gratitude",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 75,
			"isbn": "9782344008393",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-75-glenat.jpg",
			"releaseDate": "2015/07/01",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}, {
			"tomeTitle": "Pousuit ta route",
			"mangasName": "One Piece",
			"user": "K78ciJjtN6FYCMG9p",
			"author": "Eiichiro Oda",
			"tomeNumber": 76,
			"isbn": "9782344008423",
			"cover": "http://www.manga-news.com/public/images/vols/one-piece-76-glenat.jpg",
			"releaseDate": "2015/09/02",
			"owned": false,
			"editor": "Glénat",
			"version": "fr"
		}];
		var mangasData = [{
			"names": {
				"fr": "Ikigami-Préavis de mort"
			},
			"authors": [{
				"firstName": "Motoro",
				"lastName": "Mase"
			}],
			"genre": "Seinen",
			"cover": "http://www.manga-news.com/public/images/series/.logo-Ikigami_m.jpg",
			"tomes": [{
				"releaseDate": "2009/01/29",
				"number": 1,
				"version": "fr",
				"isbn": "9782849655375",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-01.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2009/04/09",
				"number": 2,
				"version": "fr",
				"isbn": "9782849655580",
				"cover": "http://www.manga-news.com/public/images/vols/ikigam02.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2009/07/09",
				"number": 3,
				"version": "fr",
				"isbn": "9782849656273",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-3.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2009/09/24",
				"number": 4,
				"version": "fr",
				"isbn": "9782849656686",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-asuka-4.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2010/01/28",
				"number": 5,
				"version": "fr",
				"isbn": "9782849657249",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-asuka-5.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2010/04/29",
				"number": 6,
				"version": "fr",
				"isbn": "9782849657911",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-kaze-manga-6.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2010/07/01",
				"number": 7,
				"version": "fr",
				"isbn": "9782849658604",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-7-kaze-manga.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2011/03/24",
				"number": 8,
				"version": "fr",
				"isbn": "9782820300614",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-8-kaze.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2012/01/18",
				"number": 9,
				"version": "fr",
				"isbn": "9782820302779",
				"cover": "http://www.manga-news.com/public/images/vols/Ikigami-9-kaze.jpg",
				"editor": "Kaze"
			}, {
				"releaseDate": "2012/06/20",
				"number": 10,
				"version": "fr",
				"isbn": "9782820304506",
				"cover": "http://www.manga-news.com/public/images/vols/ikigami-10-kaze.jpg",
				"editor": "Kaze"
			}]
		}, {
			"names": {
				"fr": "Bakuman"
			},
			"authors": [{
				"firstName": "Takeshi",
				"lastName": "Obata"
			}, {
				"firstName": "Tsugumi",
				"lastName": "Oba"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.bakuman-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2010/07/02",
				"number": 1,
				"version": "fr",
				"isbn": "9782505008262",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-1-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/07/02",
				"number": 2,
				"version": "fr",
				"isbn": "9782505008279",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-jp-02.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/09/17",
				"number": 3,
				"version": "fr",
				"isbn": "9782505009634",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-3-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/11/05",
				"number": 4,
				"version": "fr",
				"isbn": "9782505009887",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-4-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/01/07",
				"number": 5,
				"version": "fr",
				"isbn": "9782505010302",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-5-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/04/01",
				"number": 6,
				"version": "fr",
				"isbn": "9782505010760",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-6-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/07/01",
				"number": 7,
				"version": "fr",
				"isbn": "9782505011699",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-7-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/10/07",
				"number": 8,
				"version": "fr",
				"isbn": "9782505012412",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-8-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/01/06",
				"number": 9,
				"version": "fr",
				"isbn": "9782505049685",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-9-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/04/27",
				"number": 10,
				"version": "fr",
				"isbn": "9782505014379",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-10-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/07/06",
				"number": 11,
				"version": "fr",
				"isbn": "9782505014799",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-11-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/10/19",
				"number": 12,
				"version": "fr",
				"isbn": "9782505015475",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-12-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/01/04",
				"number": 13,
				"version": "fr",
				"isbn": "9782505016847",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-13-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/04/05",
				"number": 14,
				"version": "fr",
				"isbn": "9782505017271",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-14-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/07/05",
				"number": 15,
				"version": "fr",
				"isbn": "9782505017288",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-15-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/10/18",
				"number": 16,
				"version": "fr",
				"isbn": "9782505017295",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-16-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/01/24",
				"number": 17,
				"version": "fr",
				"isbn": "9782505060062",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-17-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/04/04",
				"number": 18,
				"version": "fr",
				"isbn": "9782505060444",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-18.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/07/04",
				"number": 19,
				"version": "fr",
				"isbn": "9782505060451",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-19-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/11/28",
				"number": 20,
				"version": "fr",
				"isbn": "9782505060468",
				"cover": "http://www.manga-news.com/public/images/vols/bakuman-20-kana.jpg",
				"editor": "Kana"
			}]
		}, {
			"names": {
				"fr": "GTO - Paradise Lost"
			},
			"authors": [{
				"firstName": "Tôru",
				"lastName": "Fujisawa"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.GTO-paradise-lost-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2015/09/09",
				"number": 1,
				"version": "fr",
				"isbn": "9782811622725",
				"cover": "http://www.manga-news.com/public/images/vols/gto-lost-paradise-1-pika.jpg",
				"editor": "Pika"
			}]
		}, {
			"names": {
				"fr": "Drifters"
			},
			"authors": [{
				"firstName": "Kohta",
				"lastName": "Hirano"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.drifters-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2011/04/27",
				"number": 1,
				"version": "fr",
				"isbn": "9782759506040",
				"cover": "http://www.manga-news.com/public/images/vols/drifters-1-tonkam.jpg",
				"editor": "Tonkam"
			}, {
				"releaseDate": "2012/04/11",
				"number": 2,
				"version": "fr",
				"isbn": "9782759506057",
				"cover": "http://www.manga-news.com/public/images/vols/drifters-2-tonkam.jpg",
				"editor": "Tonkam"
			}, {
				"releaseDate": "2013/09/25",
				"number": 3,
				"version": "fr",
				"isbn": "9782759506064",
				"cover": "http://www.manga-news.com/public/images/vols/drifters-3-tonkam.jpg",
				"editor": "Tonkam"
			}, {
				"releaseDate": "2015/09/23",
				"number": 4,
				"version": "fr",
				"isbn": "9782756071756",
				"cover": "http://www.manga-news.com/public/images/vols/drifters-4-tonkam.jpg",
				"editor": "Tonkam"
			}]
		}, {
			"names": {
				"fr": "Naruto"
			},
			"authors": [{
				"firstName": "Masashi",
				"lastName": "Kishimoto"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.naruto-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2002/03/09",
				"number": 1,
				"version": "fr",
				"isbn": "9782871294146",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_01.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2002/04/13",
				"number": 2,
				"version": "fr",
				"isbn": "9782871294177",
				"cover": "http://www.manga-news.com/public/images/vols/naruto02.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2002/07/06",
				"number": 3,
				"version": "fr",
				"isbn": "9782871294276",
				"cover": "http://www.manga-news.com/public/images/vols/naruto03.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2002/10/19",
				"number": 4,
				"version": "fr",
				"isbn": "9782871294412",
				"cover": "http://www.manga-news.com/public/images/vols/naruto04.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/01/25",
				"number": 5,
				"version": "fr",
				"isbn": "9782871294917",
				"cover": "http://www.manga-news.com/public/images/vols/naruto05.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/03/01",
				"number": 6,
				"version": "fr",
				"isbn": "9782871295112",
				"cover": "http://www.manga-news.com/public/images/vols/naruto06.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/07/05",
				"number": 7,
				"version": "fr",
				"isbn": "9782871295358",
				"cover": "http://www.manga-news.com/public/images/vols/naruto07.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/10/12",
				"number": 8,
				"version": "fr",
				"isbn": "9782871295525",
				"cover": "http://www.manga-news.com/public/images/vols/naruto08.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/01/08",
				"number": 9,
				"version": "fr",
				"isbn": "9782871295990",
				"cover": "http://www.manga-news.com/public/images/vols/naruto09.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/03/20",
				"number": 10,
				"version": "fr",
				"isbn": "9782871296140",
				"cover": "http://www.manga-news.com/public/images/vols/naruto10.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/05/04",
				"number": 11,
				"version": "fr",
				"isbn": "9782871296249",
				"cover": "http://www.manga-news.com/public/images/vols/naruto11.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/07/05",
				"number": 12,
				"version": "fr",
				"isbn": "9782871296355",
				"cover": "http://www.manga-news.com/public/images/vols/naruto12.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/09/28",
				"number": 13,
				"version": "fr",
				"isbn": "9782871296461",
				"cover": "http://www.manga-news.com/public/images/vols/naruto13.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/11/21",
				"number": 14,
				"version": "fr",
				"isbn": "9782871296577",
				"cover": "http://www.manga-news.com/public/images/vols/naruto14couv.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/01/21",
				"number": 15,
				"version": "fr",
				"isbn": "9782871297048",
				"cover": "http://www.manga-news.com/public/images/vols/naruto15.JPG",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/03/04",
				"number": 16,
				"version": "fr",
				"isbn": "9782871297239",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_16.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/05/06",
				"number": 17,
				"version": "fr",
				"isbn": "9782871297239",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_17.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/07/01",
				"number": 18,
				"version": "fr",
				"isbn": "9782871297970",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_18.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/09/02",
				"number": 19,
				"version": "fr",
				"isbn": "9782871298168",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_19.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/11/04",
				"number": 20,
				"version": "fr",
				"isbn": "9782871298342",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto20_05112005.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/01/20",
				"number": 21,
				"version": "fr",
				"isbn": "9782871298908",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto21_20012006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/03/03",
				"number": 22,
				"version": "fr",
				"isbn": "9782871299110",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto22_10032006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/05/05",
				"number": 23,
				"version": "fr",
				"isbn": "9782871299318",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto23_05052006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/07/07",
				"number": 24,
				"version": "fr",
				"isbn": "9782871299615",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-24-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/09/22",
				"number": 25,
				"version": "fr",
				"isbn": "9782871299776",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto25_02092006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/11/17",
				"number": 26,
				"version": "fr",
				"isbn": "9782871299875",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto26_15112006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/01/19",
				"number": 27,
				"version": "fr",
				"isbn": "9782505000310",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto27_20012007.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/03/02",
				"number": 28,
				"version": "fr",
				"isbn": "9782505000921",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto28_07032007.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/05/04",
				"number": 29,
				"version": "fr",
				"isbn": "9782505000976",
				"cover": "http://www.manga-news.com/public/images/vols/Naruto29_05052007.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/07/06",
				"number": 30,
				"version": "fr",
				"isbn": "9782505001522",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_30.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/09/07",
				"number": 31,
				"version": "fr",
				"isbn": "9782505001676",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_31.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/10/19",
				"number": 32,
				"version": "fr",
				"isbn": "9782505001928",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_32.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/12/07",
				"number": 33,
				"version": "fr",
				"isbn": "9782505002420",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_33.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/02/01",
				"number": 34,
				"version": "fr",
				"isbn": "9782505002796",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_34.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/04/04",
				"number": 35,
				"version": "fr",
				"isbn": "9782505002963",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_35.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/06/06",
				"number": 36,
				"version": "fr",
				"isbn": "9782505003236",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_36.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/07/04",
				"number": 37,
				"version": "fr",
				"isbn": "9782505003786",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_37.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/09/19",
				"number": 38,
				"version": "fr",
				"isbn": "9782505004325",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_38.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/11/28",
				"number": 39,
				"version": "fr",
				"isbn": "9782505004172",
				"cover": "http://www.manga-news.com/public/images/vols/naruto_39.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/02/06",
				"number": 40,
				"version": "fr",
				"isbn": "9782505005285",
				"cover": "http://www.manga-news.com/public/images/vols/naruto40.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/04/17",
				"number": 41,
				"version": "fr",
				"isbn": "9782505005582",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-41.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/07/03",
				"number": 42,
				"version": "fr",
				"isbn": "9782505005995",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-42.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/08/21",
				"number": 43,
				"version": "fr",
				"isbn": "9782505006701",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-43.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/10/23",
				"number": 44,
				"version": "fr",
				"isbn": "9782505007111",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-44.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/12/04",
				"number": 45,
				"version": "fr",
				"isbn": "9782505007548",
				"cover": "http://www.manga-news.com/public/images/vols/naruro-kana-45.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/01/15",
				"number": 46,
				"version": "fr",
				"isbn": "9782505007883",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-46.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/03/05",
				"number": 47,
				"version": "fr",
				"isbn": "9782505008699",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-kana-47.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/05/07",
				"number": 48,
				"version": "fr",
				"isbn": "9782505008705",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-48-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/07/02",
				"number": 49,
				"version": "fr",
				"isbn": "9782505008712",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-49-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/09/03",
				"number": 50,
				"version": "fr",
				"isbn": "9782505009566",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-50-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/11/05",
				"number": 51,
				"version": "fr",
				"isbn": "9782505009566",
				"cover": "http://www.manga-news.com/public/images/vols/.naruto-51-kana_m.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/03/04",
				"number": 52,
				"version": "fr",
				"isbn": "9782505010616",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-52-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/07/01",
				"number": 53,
				"version": "fr",
				"isbn": "9782505011156",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-53-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/11/04",
				"number": 54,
				"version": "fr",
				"isbn": "9782505012894",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-54-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/07/06",
				"number": 55,
				"version": "fr",
				"isbn": "9782505014287",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-55-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/09/07",
				"number": 56,
				"version": "fr",
				"isbn": "9782505014867",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-56-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/11/02",
				"number": 57,
				"version": "fr",
				"isbn": "9782505015529",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-57-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/03/01",
				"number": 58,
				"version": "fr",
				"isbn": "9782505017653",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-58-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/06/21",
				"number": 59,
				"version": "fr",
				"isbn": "9782505018421",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-59-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/09/06",
				"number": 60,
				"version": "fr",
				"isbn": "9782505018438",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-60-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/12/06",
				"number": 61,
				"version": "fr",
				"isbn": "9782505019596",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-61-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/03/07",
				"number": 62,
				"version": "fr",
				"isbn": "9782505060192",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-62-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/07/04",
				"number": 63,
				"version": "fr",
				"isbn": "9782505060833",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-63-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/09/05",
				"number": 64,
				"version": "fr",
				"isbn": "9782505060840",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-64-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/11/21",
				"number": 65,
				"version": "fr",
				"isbn": "9782505061267",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-65-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2015/03/06",
				"number": 66,
				"version": "fr",
				"isbn": "9782505061656",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-66-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2015/07/03",
				"number": 67,
				"version": "fr",
				"isbn": "9782505061663",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-67-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2015/09/11",
				"number": 68,
				"version": "fr",
				"isbn": "9782505061670",
				"cover": "http://www.manga-news.com/public/images/vols/naruto-68-kana.jpg",
				"editor": "Kana"
			}]
		}, {
			"names": {
				"fr": "Soul Eater"
			},
			"authors": [{
				"firstName": "Atsushi",
				"lastName": "Ohkubo"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.logo_souleater_m.jpg",
			"tomes": [{
				"releaseDate": "2009/03/12",
				"number": 1,
				"version": "fr",
				"isbn": "9782351420553",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-01.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/03/12",
				"number": 2,
				"version": "fr",
				"isbn": "9782351420560",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-02.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/05/14",
				"number": 3,
				"version": "fr",
				"isbn": "9782351420577",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-03.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/07/02",
				"number": 4,
				"version": "fr",
				"isbn": "9782351423684",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-4-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/09/10",
				"number": 5,
				"version": "fr",
				"isbn": "9782351423691",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-kurokawa-5.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/11/12",
				"number": 6,
				"version": "fr",
				"isbn": "9782351423707",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-kurokawa-6.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/01/14",
				"number": 7,
				"version": "fr",
				"isbn": "9782351423967",
				"cover": "http://www.manga-news.com/public/images/vols/Soul-eater-kurokawa-7.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/03/11",
				"number": 8,
				"version": "fr",
				"isbn": "9782351423974",
				"cover": "http://www.manga-news.com/public/images/vols/Soul-eater-kurokawa-8.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/05/12",
				"number": 9,
				"version": "fr",
				"isbn": "9782351423981",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-9-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/07/01",
				"number": 10,
				"version": "fr",
				"isbn": "9782351423998",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-10-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/09/09",
				"number": 11,
				"version": "fr",
				"isbn": "9782351424001",
				"cover": "http://www.manga-news.com/public/images/vols/Soul_11-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/11/10",
				"number": 12,
				"version": "fr",
				"isbn": "9782351425749",
				"cover": "http://www.manga-news.com/public/images/vols/Soul_12-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/01/13",
				"number": 13,
				"version": "fr",
				"isbn": "9782351425756",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-13-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/03/10",
				"number": 14,
				"version": "fr",
				"isbn": "9782351425763",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-14-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/05/12",
				"number": 15,
				"version": "fr",
				"isbn": "9782351425770",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-15-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/07/07",
				"number": 16,
				"version": "fr",
				"isbn": "9782351425787",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-16-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/10/13",
				"number": 17,
				"version": "fr",
				"isbn": "9782351426043",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-17-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/12/08",
				"number": 18,
				"version": "fr",
				"isbn": "9782351426906",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-18-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2012/03/08",
				"number": 19,
				"version": "fr",
				"isbn": "9782351426913",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-19-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2012/07/05",
				"number": 20,
				"version": "fr",
				"isbn": "9782351427743",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-20-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2012/10/11",
				"number": 21,
				"version": "fr",
				"isbn": "9782351428290",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-21-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2013/03/04",
				"number": 22,
				"version": "fr",
				"isbn": "9782351428764",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-22-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2013/07/04",
				"number": 23,
				"version": "fr",
				"isbn": "9782351428849",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-23-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2013/11/14",
				"number": 24,
				"version": "fr",
				"isbn": "9782351429303",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-24-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2014/07/03",
				"number": 25,
				"version": "fr",
				"isbn": "9782368520215",
				"cover": "http://www.manga-news.com/public/images/vols/soul-eater-25-kurokawa.jpg",
				"editor": "Kurokawa"
			}]
		}, {
			"names": {
				"fr": "Head Trick"
			},
			"authors": [{
				"lastName": "E.D"
			}, {
				"lastName": "K 'Yat"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.head-trick-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2011/06/03",
				"number": 1,
				"version": "fr",
				"isbn": "9791090476004",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-1-ed-edition.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2011/12/05",
				"number": 2,
				"version": "fr",
				"isbn": "9791090476011",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-ed-2.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2011/12/05",
				"number": 3,
				"version": "Edition",
				"isbn": "9791090476028",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-ed-3.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2012/02/17",
				"number": 4,
				"version": "Edition",
				"isbn": "9791090476035",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-4-ed.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2012/10/03",
				"number": 5,
				"version": "Edition",
				"isbn": "9791090476042",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-5.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2013/06/06",
				"number": 6,
				"version": "fr",
				"isbn": "9791090476059",
				"cover": "http://www.manga-news.com/public/images/vols/Head-trick-6.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2014/05/12",
				"number": 7,
				"version": "fr",
				"isbn": "9791090476066",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-7-ed-edition-normal.jpg",
				"editor": "ED"
			}, {
				"releaseDate": "2015/07/08",
				"number": 8,
				"version": "fr",
				"isbn": "9791090476073",
				"cover": "http://www.manga-news.com/public/images/vols/head-trick-8.jpg",
				"editor": "ED"
			}]
		}, {
			"names": {
				"fr": "GTO-Great Teacher Onizuka"
			},
			"authors": [{
				"firstName": "Tôru",
				"lastName": "Fujisawa"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.gto_logo_m.jpg",
			"tomes": [{
				"releaseDate": "2001/02/20",
				"number": 1,
				"version": "fr",
				"isbn": "9782845991002",
				"cover": "http://www.manga-news.com/public/images/vols/gto1_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/04/03",
				"number": 2,
				"version": "fr",
				"isbn": "9782845991064",
				"cover": "http://www.manga-news.com/public/images/vols/gto2_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/04/24",
				"number": 3,
				"version": "fr",
				"isbn": "9782845991125",
				"cover": "http://www.manga-news.com/public/images/vols/gto3_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/05/15",
				"number": 4,
				"version": "fr",
				"isbn": "9782845991170",
				"cover": "http://www.manga-news.com/public/images/vols/gto4_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/06/26",
				"number": 5,
				"version": "fr",
				"isbn": "9782845991200",
				"cover": "http://www.manga-news.com/public/images/vols/gto5_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/08/21",
				"number": 6,
				"version": "fr",
				"isbn": "9782845991255",
				"cover": "http://www.manga-news.com/public/images/vols/gto6_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/09/18",
				"number": 7,
				"version": "fr",
				"isbn": "9782845991347",
				"cover": "http://www.manga-news.com/public/images/vols/gto7_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/10/23",
				"number": 8,
				"version": "fr",
				"isbn": "9782845991378",
				"cover": "http://www.manga-news.com/public/images/vols/gto8_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/11/13",
				"number": 9,
				"version": "fr",
				"isbn": "9782845991446",
				"cover": "http://www.manga-news.com/public/images/vols/gto9_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2001/12/11",
				"number": 10,
				"version": "fr",
				"isbn": "9782845991477",
				"cover": "http://www.manga-news.com/public/images/vols/gto10_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/01/15",
				"number": 11,
				"version": "fr",
				"isbn": "9782845991545",
				"cover": "http://www.manga-news.com/public/images/vols/gto11_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/02/26",
				"number": 12,
				"version": "fr",
				"isbn": "9782845991569",
				"cover": "http://www.manga-news.com/public/images/vols/gto12_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/03/19",
				"number": 13,
				"version": "fr",
				"isbn": "9782845991606",
				"cover": "http://www.manga-news.com/public/images/vols/gto13_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/04/16",
				"number": 14,
				"version": "fr",
				"isbn": "9782845991651",
				"cover": "http://www.manga-news.com/public/images/vols/gto14_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/05/14",
				"number": 15,
				"version": "fr",
				"isbn": "9782845991705",
				"cover": "http://www.manga-news.com/public/images/vols/gto15_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/06/18",
				"number": 16,
				"version": "fr",
				"isbn": "9782845991767",
				"cover": "http://www.manga-news.com/public/images/vols/gto16_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/08/27",
				"number": 17,
				"version": "fr",
				"isbn": "9782845991811",
				"cover": "http://www.manga-news.com/public/images/vols/gto17_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/09/17",
				"number": 18,
				"version": "fr",
				"isbn": "9782845991866",
				"cover": "http://www.manga-news.com/public/images/vols/gto18_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/10/15",
				"number": 19,
				"version": "fr",
				"isbn": "9782845991897",
				"cover": "http://www.manga-news.com/public/images/vols/gto19_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/11/19",
				"number": 20,
				"version": "fr",
				"isbn": "9782845991958",
				"cover": "http://www.manga-news.com/public/images/vols/gto20_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2002/12/03",
				"number": 21,
				"version": "fr",
				"isbn": "9782845992016",
				"cover": "http://www.manga-news.com/public/images/vols/gto21_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2003/01/14",
				"number": 22,
				"version": "fr",
				"isbn": "9782845992085",
				"cover": "http://www.manga-news.com/public/images/vols/gto22_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2003/02/25",
				"number": 23,
				"version": "fr",
				"isbn": "9782845992139",
				"cover": "http://www.manga-news.com/public/images/vols/gto23_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2003/03/18",
				"number": 24,
				"version": "fr",
				"isbn": "9782845992245",
				"cover": "http://www.manga-news.com/public/images/vols/gto24_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2003/04/22",
				"number": 25,
				"version": "fr",
				"isbn": "9782845992313",
				"cover": "http://www.manga-news.com/public/images/vols/gto25_g.jpg",
				"editor": "Pika"
			}]
		}, {
			"names": {
				"fr": "GTO-Shonan 14 Days"
			},
			"authors": [{
				"firstName": "Tôru",
				"lastName": "Fujisawa"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.shonan-gto-14-days-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2011/09/07",
				"number": 1,
				"version": "fr",
				"isbn": "9782811605308",
				"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-1-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2011/11/02",
				"number": 2,
				"version": "fr",
				"isbn": "9782811605636",
				"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14days-2-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2012/01/04",
				"number": 3,
				"version": "fr",
				"isbn": "9782811606039",
				"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-3-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2012/02/29",
				"number": 4,
				"version": "fr",
				"isbn": "9782811606398",
				"cover": "http://www.manga-news.com/public/images/vols/shonan-gto-14-days-3-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2012/05/02",
				"number": 5,
				"version": "fr",
				"isbn": "9782811606800",
				"cover": "http://www.manga-news.com/public/images/vols/gto-14-days-5-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2012/07/04",
				"number": 6,
				"version": "fr",
				"isbn": "9782811607302",
				"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-6-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2012/09/05",
				"number": 7,
				"version": "fr",
				"isbn": "9782811609481",
				"cover": "http://www.manga-news.com/public/images/vols/gto-14-days-7-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2012/10/31",
				"number": 8,
				"version": "fr",
				"isbn": "9782811609702",
				"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-8-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2013/01/02",
				"number": 9,
				"version": "fr",
				"isbn": "9782811610715",
				"cover": "http://www.manga-news.com/public/images/vols/gto-shonan-14-days-9-pika.jpg",
				"editor": "Pika"
			}]
		}, {
			"names": {
				"fr": "Death Note"
			},
			"authors": [{
				"firstName": "Takeshi",
				"lastName": "Obata"
			}, {
				"firstName": "Tsugumi",
				"lastName": "Oba"
			}],
			"genre": "Shonen",
			"cover": "http://img.kazeo.com/667/66719/L/death-note-logo.jpg",
			"tomes": [{
				"releaseDate": "2007/01/19",
				"number": 1,
				"version": "fr",
				"isbn": "9782505000327",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_01.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/02/02",
				"number": 2,
				"version": "fr",
				"isbn": "9782505000426",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_02.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/04/06",
				"number": 3,
				"version": "fr",
				"isbn": "9782505000792",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_03.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/06/01",
				"number": 4,
				"version": "fr",
				"isbn": "9782505001065",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_04.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/08/24",
				"number": 5,
				"version": "fr",
				"isbn": "9782505001614",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_05.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/10/05",
				"number": 6,
				"version": "fr",
				"isbn": "9782505001812",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_06.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2007/12/07",
				"number": 7,
				"version": "fr",
				"isbn": "9782505001997",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_07.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/02/15",
				"number": 8,
				"version": "fr",
				"isbn": "9782505002697",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_08.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/04/11",
				"number": 9,
				"version": "fr",
				"isbn": "9782505002970",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_09.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/06/06",
				"number": 10,
				"version": "fr",
				"isbn": "9782505003038",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_10.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/07/04",
				"number": 11,
				"version": "fr",
				"isbn": "9782505003694",
				"cover": "http://www.manga-news.com/public/images/vols/deathnote_11.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/10/03",
				"number": 12,
				"version": "fr",
				"isbn": "9782505004295",
				"cover": "http://www.manga-news.com/public/images/vols/death_note_12.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/09/25",
				"number": 13,
				"version": "fr",
				"isbn": "9782505004523",
				"cover": "http://www.manga-news.com/public/images/vols/death-note-13.jpg",
				"editor": "Kana"
			}]
		}, {
			"names": {
				"fr": "Hunter X Hunter"
			},
			"authors": [{
				"firstName": "Yoshihiro",
				"lastName": "Togashi"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.hunterx_logo_m.jpg",
			"tomes": [{
				"releaseDate": "2003/07/15",
				"number": 1,
				"version": "fr",
				"isbn": "9782871292661",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter01_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2000/04/01",
				"number": 2,
				"version": "fr",
				"isbn": "9782871292678",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter02_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2000/06/01",
				"number": 3,
				"version": "fr",
				"isbn": "9782871292685",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter03_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2000/09/01",
				"number": 4,
				"version": "fr",
				"isbn": "9782871292692",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter04_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2000/10/01",
				"number": 5,
				"version": "fr",
				"isbn": "9782871292708",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter05_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2001/01/20",
				"number": 6,
				"version": "fr",
				"isbn": "9782871293217",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter06_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2001/03/17",
				"number": 7,
				"version": "fr",
				"isbn": "9782871293224",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter07_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2001/05/12",
				"number": 8,
				"version": "fr",
				"isbn": "9782871293231",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter08_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2001/07/07",
				"number": 9,
				"version": "fr",
				"isbn": "9782871293248",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter09_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2001/10/06",
				"number": 10,
				"version": "fr",
				"isbn": "9782871293255",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter10_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2002/01/19",
				"number": 11,
				"version": "fr",
				"isbn": "9782871294023",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter11_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2002/04/13",
				"number": 12,
				"version": "fr",
				"isbn": "9782871294153",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter12_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2002/06/06",
				"number": 13,
				"version": "fr",
				"isbn": "9782871294290",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter13_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/01/18",
				"number": 14,
				"version": "fr",
				"isbn": "9782871294429",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter14_09022003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/03/01",
				"number": 15,
				"version": "fr",
				"isbn": "9782871295099",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter15_01032003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2003/07/05",
				"number": 16,
				"version": "fr",
				"isbn": "9782871295365",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter16_12072003.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/05/01",
				"number": 17,
				"version": "fr",
				"isbn": "9782871295624",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter17_08052004.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2004/07/03",
				"number": 18,
				"version": "fr",
				"isbn": "9782871296850",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter18_15072004.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/03/04",
				"number": 19,
				"version": "fr",
				"isbn": "9782871297277",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter19_01032005.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2005/05/20",
				"number": 20,
				"version": "fr",
				"isbn": "9782871297819",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter20_17052005.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/03/17",
				"number": 21,
				"version": "fr",
				"isbn": "9782871298991",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter21_19032006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/06/02",
				"number": 22,
				"version": "fr",
				"isbn": "9782871299172",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter22.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2006/11/17",
				"number": 23,
				"version": "fr",
				"isbn": "9782505000266",
				"cover": "http://www.manga-news.com/public/images/vols/HunterXHunter23_18112006.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2008/07/04",
				"number": 24,
				"version": "fr",
				"isbn": "9782505003564",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter_24.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/01/16",
				"number": 25,
				"version": "fr",
				"isbn": "9782505005230",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter25.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2009/08/21",
				"number": 26,
				"version": "fr",
				"isbn": "9782505006176",
				"cover": "http://www.manga-news.com/public/images/vols/hunterxhunter-kana-26.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/07/02",
				"number": 27,
				"version": "fr",
				"isbn": "9782505009078",
				"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunetr-27-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/06/01",
				"number": 28,
				"version": "fr",
				"isbn": "9782505014706",
				"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-28-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/11/02",
				"number": 29,
				"version": "fr",
				"isbn": "9782505015710",
				"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-29-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/06/21",
				"number": 30,
				"version": "fr",
				"isbn": "9782505018087",
				"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-30-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/09/06",
				"number": 31,
				"version": "fr",
				"isbn": "9782505019336",
				"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-31-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/12/06",
				"number": 32,
				"version": "fr",
				"isbn": "9782505019343",
				"cover": "http://www.manga-news.com/public/images/vols/hunter-x-hunter-32-kana.jpg",
				"editor": "Kana"
			}]
		}, {
			"names": {
				"fr": "L 'Attaque Des Titans"
			},
			"authors": [{
				"firstName": "Hajime",
				"lastName": "Isayama"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.attaque-des-titans-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2013/06/26",
				"number": 1,
				"version": "fr",
				"isbn": "9782811611699",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-1-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2013/06/26",
				"number": 2,
				"version": "fr",
				"isbn": "9782811611705",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-2-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2013/09/04",
				"number": 3,
				"version": "fr",
				"isbn": "9782811612207",
				"cover": "http://www.manga-news.com/public/images/vols/attaque--des-titans-3-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2013/10/30",
				"number": 4,
				"version": "fr",
				"isbn": "9782811612818",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-3-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2014/01/01",
				"number": 5,
				"version": "fr",
				"isbn": "9782811613297",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-5-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2014/03/05",
				"number": 6,
				"version": "fr",
				"isbn": "9782811613860",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-6-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2014/05/02",
				"number": 7,
				"version": "fr",
				"isbn": "9782811614355",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-7-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2014/07/02",
				"number": 8,
				"version": "fr",
				"isbn": "9782811615154",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-8-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2014/09/03",
				"number": 9,
				"version": "fr",
				"isbn": "9782811615628",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-9-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2014/10/29",
				"number": 10,
				"version": "fr",
				"isbn": "9782811615994",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-10-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2015/01/07",
				"number": 11,
				"version": "fr",
				"isbn": "9782811617240",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-11-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2015/03/04",
				"number": 12,
				"version": "fr",
				"isbn": "9782811618360",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-titans-12-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2015/05/06",
				"number": 13,
				"version": "fr",
				"isbn": "9782811618803",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-titans-13-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2015/07/01",
				"number": 14,
				"version": "fr",
				"isbn": "9782811618810",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-titans-14-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2015/09/02",
				"number": 15,
				"version": "fr",
				"isbn": "9782811620943",
				"cover": "http://www.manga-news.com/public/images/vols/attaque-des-titans-15-pika.jpg",
				"editor": "Pika"
			}]
		}, {
			"names": {
				"fr": "Dr. Slump"
			},
			"authors": [{
				"firstName": "Akira",
				"lastName": "Toriyama"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.Dr-Slump-deluxe-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2009/12/02",
				"number": 1,
				"version": "fr",
				"isbn": "9782723472272",
				"cover": "http://www.manga-news.com/public/images/vols/Dr-Slump-ultimate-1.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/01/13",
				"number": 2,
				"version": "fr",
				"isbn": "9782723472289",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-edition-glenat-2.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/03/24",
				"number": 3,
				"version": "fr",
				"isbn": "9782723472296",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-edition-glenat-3.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/05/19",
				"number": 4,
				"version": "fr",
				"isbn": "9782723474665",
				"cover": "http://www.manga-news.com/public/images/vols/Dr-slump-deluxe-4-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/07/21",
				"number": 5,
				"version": "fr",
				"isbn": "9782723474672",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-5-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/09/22",
				"number": 6,
				"version": "fr",
				"isbn": "9782723474689",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-6-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/11/24",
				"number": 7,
				"version": "fr",
				"isbn": "9782723474696",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-7-glenat.png",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/01/26",
				"number": 8,
				"version": "fr",
				"isbn": "9782723478809",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-8-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/03/16",
				"number": 9,
				"version": "fr",
				"isbn": "9782723478816",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-9-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/05/18",
				"number": 10,
				"version": "fr",
				"isbn": "9782723478823",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-10-10-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/07/20",
				"number": 11,
				"version": "fr",
				"isbn": "9782723478830",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-11-perfect-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/09/21",
				"number": 12,
				"version": "fr",
				"isbn": "9782723478847",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-12-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/11/30",
				"number": 13,
				"version": "fr",
				"isbn": "9782723482660",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-13-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/02/22",
				"number": 14,
				"version": "fr",
				"isbn": "9782723486743",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-14-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/04/18",
				"number": 15,
				"version": "fr",
				"isbn": "9782723486750",
				"cover": "http://www.manga-news.com/public/images/vols/dr-slump-perfect-15-glenat.jpg",
				"editor": "Glénat"
			}]
		}, {
			"names": {
				"fr": "20th Century Boys"
			},
			"authors": [{
				"firstName": "Naoki",
				"lastName": "Urasawa"
			}],
			"genre": "Seinen",
			"cover": "http://www.manga-news.com/public/images/series/.20th_logo_m.jpg",
			"tomes": [{
				"releaseDate": "2002/03/28",
				"number": 1,
				"version": "fr",
				"isbn": "9782845380790",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_01.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2002/05/03",
				"number": 2,
				"version": "fr",
				"isbn": "9782845380998",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_02.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2002/07/05",
				"number": 3,
				"version": "fr",
				"isbn": "9782845381148",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_03.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2002/09/19",
				"number": 4,
				"version": "fr",
				"isbn": "9782845381315",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_04.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2003/01/17",
				"number": 5,
				"version": "fr",
				"isbn": "9782845381742",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_05.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2003/03/07",
				"number": 6,
				"version": "fr",
				"isbn": "9782845381995",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_06.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2003/05/09",
				"number": 7,
				"version": "fr",
				"isbn": "9782845382107",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_07.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2003/07/11",
				"number": 8,
				"version": "fr",
				"isbn": "9782845382299",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_08.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2003/09/26",
				"number": 9,
				"version": "fr",
				"isbn": "9782845382503",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_09.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2003/11/21",
				"number": 10,
				"version": "fr",
				"isbn": "9782845382718",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_10.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2004/02/14",
				"number": 11,
				"version": "fr",
				"isbn": "9782845383029",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_11.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2004/05/27",
				"number": 12,
				"version": "fr",
				"isbn": "9782845383357",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_12.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2004/08/19",
				"number": 13,
				"version": "fr",
				"isbn": "9782845383746",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_13.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2004/11/25",
				"number": 14,
				"version": "fr",
				"isbn": "9782845384149",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_14.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2005/02/10",
				"number": 15,
				"version": "fr",
				"isbn": "9782845384590",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_15.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2005/05/12",
				"number": 16,
				"version": "fr",
				"isbn": "9782845385016",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_16.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2005/08/25",
				"number": 17,
				"version": "fr",
				"isbn": "9782845385399",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_17.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2005/11/10",
				"number": 18,
				"version": "fr",
				"isbn": "9782845386181",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_18.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/09/02",
				"number": 19,
				"version": "fr",
				"isbn": "9782845386549",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_19.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/09/28",
				"number": 20,
				"version": "fr",
				"isbn": "9782845387973",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_20.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/03/08",
				"number": 21,
				"version": "fr",
				"isbn": "9782845389403",
				"cover": "http://www.manga-news.com/public/images/vols/20th_century_21.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/07/12",
				"number": 22,
				"version": "fr",
				"isbn": "9782809400373",
				"cover": "http://www.manga-news.com/public/images/vols/20th-century-boys-22-panini.jpg",
				"editor": "Panini"
			}]
		}, {
			"names": {
				"fr": "FullMetal Alchemist"
			},
			"authors": [{
				"firstName": "Hiromu",
				"lastName": "Arakawa"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.fma_logo_m.jpg",
			"tomes": [{
				"releaseDate": "2005/09/08",
				"number": 1,
				"version": "fr",
				"isbn": "9782351420171",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal_01.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2005/09/08",
				"number": 2,
				"version": "fr",
				"isbn": "9782351420188",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal_02.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2005/11/10",
				"number": 3,
				"version": "fr",
				"isbn": "9782351420195",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal_03.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2006/01/12",
				"number": 4,
				"version": "fr",
				"isbn": "9782351420416",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal_04.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2006/03/09",
				"number": 5,
				"version": "fr",
				"isbn": "9782351420454",
				"cover": "http://www.manga-news.com/public/images/vols/fma_05.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2006/05/11",
				"number": 6,
				"version": "fr",
				"isbn": "9782351420461",
				"cover": "http://www.manga-news.com/public/images/vols/fma_06.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2006/07/13",
				"number": 7,
				"version": "fr",
				"isbn": "9782351420478",
				"cover": "http://www.manga-news.com/public/images/vols/fma_07.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2006/09/14",
				"number": 8,
				"version": "fr",
				"isbn": "9782351420485",
				"cover": "http://www.manga-news.com/public/images/vols/fma_08.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2006/11/09",
				"number": 9,
				"version": "fr",
				"isbn": "9782351420492",
				"cover": "http://www.manga-news.com/public/images/vols/fma_09.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2007/01/11",
				"number": 10,
				"version": "fr",
				"isbn": "9782351421475",
				"cover": "http://www.manga-news.com/public/images/vols/fma_10.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2007/03/08",
				"number": 11,
				"version": "fr",
				"isbn": "9782351421512",
				"cover": "http://www.manga-news.com/public/images/vols/fma_11.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2007/05/10",
				"number": 12,
				"version": "fr",
				"isbn": "9782351421567",
				"cover": "http://www.manga-news.com/public/images/vols/fma_12.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2007/07/12",
				"number": 13,
				"version": "fr",
				"isbn": "9782351421574",
				"cover": "http://www.manga-news.com/public/images/vols/fma_13.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2007/09/13",
				"number": 14,
				"version": "fr",
				"isbn": "9782351421581",
				"cover": "http://www.manga-news.com/public/images/vols/fma_14.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2007/11/08",
				"number": 15,
				"version": "fr",
				"isbn": "9782351421598",
				"cover": "http://www.manga-news.com/public/images/vols/fma_15.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2008/03/13",
				"number": 16,
				"version": "fr",
				"isbn": "9782351422656",
				"cover": "http://www.manga-news.com/public/images/vols/fma_16.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2008/05/15",
				"number": 17,
				"version": "fr",
				"isbn": "9782351423189",
				"cover": "http://www.manga-news.com/public/images/vols/fma_17.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2008/09/11",
				"number": 18,
				"version": "fr",
				"isbn": "9782351423257",
				"cover": "http://www.manga-news.com/public/images/vols/fma_18.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2008/09/11",
				"number": 19,
				"version": "fr",
				"isbn": "9782351423356",
				"cover": "http://www.manga-news.com/public/images/vols/fma_19.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/04/09",
				"number": 20,
				"version": "fr",
				"isbn": "9782351424117",
				"cover": "http://www.manga-news.com/public/images/vols/fma-20.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/07/02",
				"number": 21,
				"version": "fr",
				"isbn": "9782351424285",
				"cover": "http://www.manga-news.com/public/images/vols/fma-21.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2009/11/12",
				"number": 22,
				"version": "fr",
				"isbn": "9782351424483",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-kurokawa-22.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/04/08",
				"number": 23,
				"version": "fr",
				"isbn": "9782351425077",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-kurokawa-23.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2010/09/09",
				"number": 24,
				"version": "fr",
				"isbn": "9782351425497",
				"cover": "http://www.manga-news.com/public/images/vols/FMA_24-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/01/13",
				"number": 25,
				"version": "fr",
				"isbn": "9782351425732",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-25-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/04/14",
				"number": 26,
				"version": "fr",
				"isbn": "9782351426319",
				"cover": "http://www.manga-news.com/public/images/vols/full-metal-alchemist-26-kurokawa.jpg",
				"editor": "Kurokawa"
			}, {
				"releaseDate": "2011/07/07",
				"number": 27,
				"version": "fr",
				"isbn": "9782351426517",
				"cover": "http://www.manga-news.com/public/images/vols/fullmetal-alchemist-27-kurokawa.jpg",
				"editor": "Kurokawa"
			}]
		}, {
			"names": {
				"fr": "Akira"
			},
			"authors": [{
				"firstName": "Katsuhiro",
				"lastName": "Otomo"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.akira_logo_m.jpg",
			"tomes": [{
				"releaseDate": "1999/04/20",
				"number": 1,
				"version": "fr",
				"isbn": "9782723427371",
				"cover": "http://www.manga-news.com/public/images/vols/akira_01.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1999/07/22",
				"number": 2,
				"version": "fr",
				"isbn": "9782723427999",
				"cover": "http://www.manga-news.com/public/images/vols/akira_02.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1999/09/25",
				"number": 3,
				"version": "fr",
				"isbn": "9782723428217",
				"cover": "http://www.manga-news.com/public/images/vols/akira_03.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/01/17",
				"number": 4,
				"version": "fr",
				"isbn": "9782723428248",
				"cover": "http://www.manga-news.com/public/images/vols/akira_04.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/05/21",
				"number": 5,
				"version": "fr",
				"isbn": "9782723428255",
				"cover": "http://www.manga-news.com/public/images/vols/akira_05.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/09/20",
				"number": 6,
				"version": "fr",
				"isbn": "9782723428262",
				"cover": "http://www.manga-news.com/public/images/vols/akira_06.jpg",
				"editor": "Glénat"
			}]
		}, {
			"names": {
				"fr": "XXX Holic"
			},
			"authors": [{
				"lastName": "CLAMP"
			}],
			"genre": "Seinen",
			"cover": "http://www.manga-news.com/public/images/series/.xxx-holic-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2004/11/16",
				"number": 1,
				"version": "fr",
				"isbn": "9782845993594",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic1_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2005/01/18",
				"number": 2,
				"version": "fr",
				"isbn": "9782845993969",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic2_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2005/03/15",
				"number": 3,
				"version": "fr",
				"isbn": "9782845994157",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic3_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2005/05/17",
				"number": 4,
				"version": "fr",
				"isbn": "9782845994393",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic4_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2005/08/16",
				"number": 5,
				"version": "fr",
				"isbn": "9782845994669",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic5_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2007/12/05",
				"number": 6,
				"version": "fr",
				"isbn": "9782845994973",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic6_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2006/04/18",
				"number": 7,
				"version": "fr",
				"isbn": "9782845995857",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic7_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2006/12/06",
				"number": 8,
				"version": "fr",
				"isbn": "9782845996472",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic8_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2007/05/16",
				"number": 9,
				"version": "fr",
				"isbn": "9782845997233",
				"cover": "http://www.manga-news.com/public/images/vols/xxxholic9_g.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2007/10/17",
				"number": 10,
				"version": "fr",
				"isbn": "9782845997813",
				"cover": "http://www.manga-news.com/public/images/vols/xxx_holic_10.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2008/04/23",
				"number": 11,
				"version": "fr",
				"isbn": "9782845998339",
				"cover": "http://www.manga-news.com/public/images/vols/xxx_holic_11.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2008/10/08",
				"number": 12,
				"version": "fr",
				"isbn": "9782845999398",
				"cover": "http://www.manga-news.com/public/images/vols/xxx_holic_12.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2009/04/08",
				"number": 13,
				"version": "fr",
				"isbn": "9782811600402",
				"cover": "http://www.manga-news.com/public/images/vols/Holic13.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2010/01/06",
				"number": 14,
				"version": "fr",
				"isbn": "9782811601652",
				"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-pika-14.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2010/06/30",
				"number": 15,
				"version": "fr",
				"isbn": "9782811603182",
				"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-15-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2010/10/20",
				"number": 16,
				"version": "fr",
				"isbn": "9782811603700",
				"cover": "http://www.manga-news.com/public/images/vols/XXXHolic16-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2011/01/19",
				"number": 17,
				"version": "fr",
				"isbn": "9782811604158",
				"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-17-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2011/06/15",
				"number": 18,
				"version": "fr",
				"isbn": "9782811604967",
				"cover": "http://www.manga-news.com/public/images/vols/XXX-HOLIC-18-pika.jpg",
				"editor": "Pika"
			}, {
				"releaseDate": "2011/10/19",
				"number": 19,
				"version": "fr",
				"isbn": "9782811605582",
				"cover": "http://www.manga-news.com/public/images/vols/xxx-holic-19-pika.jpg",
				"editor": "Pika"
			}]
		}, {
			"names": {
				"fr": "City Hunter"
			},
			"authors": [{
				"firstName": "Tsukasa",
				"lastName": "Hojo"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.citu_hunter_ultime_logo_m.jpg",
			"tomes": [{
				"releaseDate": "2005/10/27",
				"number": 1,
				"version": "fr",
				"isbn": "9782845385542",
				"cover": "http://www.manga-news.com/public/images/vols/citu_hunter_ultime_01.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2005/12/01",
				"number": 2,
				"version": "fr",
				"isbn": "9782845385948",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_02-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/02/09",
				"number": 3,
				"version": "fr",
				"isbn": "9782845386495",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_03-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/04/13",
				"number": 4,
				"version": "fr",
				"isbn": "9782845386952",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_04-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/06/08",
				"number": 5,
				"version": "fr",
				"isbn": "9782845387393",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_05-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/08/24",
				"number": 6,
				"version": "fr",
				"isbn": "9782845387744",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_06-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/10/12",
				"number": 7,
				"version": "fr",
				"isbn": "9782845388239",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_07-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2006/12/07",
				"number": 8,
				"version": "fr",
				"isbn": "9782845388598",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_08-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/02/08",
				"number": 9,
				"version": "fr",
				"isbn": "9782845389434",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_09-2.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/04/12",
				"number": 10,
				"version": "fr",
				"isbn": "9782845389656",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_10.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/06/14",
				"number": 11,
				"version": "fr",
				"isbn": "9782809400106",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_11.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/08/23",
				"number": 12,
				"version": "fr",
				"isbn": "9782809400649",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_12.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/10/11",
				"number": 13,
				"version": "fr",
				"isbn": "9782809401134",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_13.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2007/12/06",
				"number": 14,
				"version": "fr",
				"isbn": "9782809401615",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_14.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2008/02/14",
				"number": 15,
				"version": "fr",
				"isbn": "9782809402117",
				"cover": "http://www.manga-news.com/public/images/vols/citu_hunter_ultime_15.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2008/04/24",
				"number": 16,
				"version": "fr",
				"isbn": "9782809402896",
				"cover": "http://www.manga-news.com/public/images/vols/citu_hunter_ultime_16.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2008/06/12",
				"number": 17,
				"version": "fr",
				"isbn": "9782809403374",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_deluxe_17.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2008/08/21",
				"number": 18,
				"version": "fr",
				"isbn": "9782809403787",
				"cover": "http://www.manga-news.com/public/images/vols/city_hunter_ultime_18.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2008/10/23",
				"number": 19,
				"version": "fr",
				"isbn": "9782809404234",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-19.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2008/12/04",
				"number": 20,
				"version": "fr",
				"isbn": "9782809404586",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-20.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/02/11",
				"number": 21,
				"version": "fr",
				"isbn": "9782809406092",
				"cover": "http://www.manga-news.com/public/images/vols/cityhunter21_f.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/04/08",
				"number": 22,
				"version": "fr",
				"isbn": "9782809407105",
				"cover": "http://www.manga-news.com/public/images/vols/chunter22_f.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/06/10",
				"number": 23,
				"version": "fr",
				"isbn": "9782809408041",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-ultime-23.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/08/26",
				"number": 24,
				"version": "fr",
				"isbn": "9782809408997",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-24-panini.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/09/16",
				"number": 25,
				"version": "fr",
				"isbn": "9782809409185",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-ultimate-panini-25.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/10/14",
				"number": 26,
				"version": "fr",
				"isbn": "9782809409352",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-panini-26.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2009/12/02",
				"number": 27,
				"version": "fr",
				"isbn": "9782809410068",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-ultime-panini-27.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2010/02/17",
				"number": 28,
				"version": "fr",
				"isbn": "9782809411331",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-panini-28.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2010/04/07",
				"number": 29,
				"version": "fr",
				"isbn": "9782809412642",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-panini-29.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2010/06/09",
				"number": 30,
				"version": "fr",
				"isbn": "9782809413755",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-deluxe-30-panini.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2010/08/25",
				"number": 31,
				"version": "fr",
				"isbn": "9782809414431",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-31-panini.jpg",
				"editor": "Panini"
			}, {
				"releaseDate": "2010/10/13",
				"number": 32,
				"version": "fr",
				"isbn": "9782809414554",
				"cover": "http://www.manga-news.com/public/images/vols/city-hunter-32-panini.jpg",
				"editor": "Panini"
			}]
		}, {
			"names": {
				"fr": "A Silent Voice"
			},
			"authors": [{
				"firstName": "Yoshitoki",
				"lastName": "Oima"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.silent-voice-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2015/01/22",
				"number": 1,
				"version": "fr",
				"isbn": "9782355927713",
				"cover": "http://www.manga-news.com/public/images/vols/a-silent-voice-1-ki-oon.jpg",
				"editor": "Ki-oon"
			}, {
				"releaseDate": "2015/03/12",
				"number": 2,
				"version": "fr",
				"isbn": "9782355927942",
				"cover": "http://www.manga-news.com/public/images/vols/a-silent-voice-2-ki-oon.jpg",
				"editor": "KI-oon"
			}, {
				"releaseDate": "2015/05/15",
				"number": 3,
				"version": "fr",
				"isbn": "9782355928222",
				"cover": "http://www.manga-news.com/public/images/vols/silent-voice-3-ki-oon.jpg",
				"editor": "Ki-oon"
			}, {
				"releaseDate": "2015/07/02",
				"number": 4,
				"version": "fr",
				"isbn": "9782355928390",
				"cover": "http://www.manga-news.com/public/images/vols/silent-voice-4-ki-oon.jpg",
				"editor": "Ki-oon"
			}, {
				"releaseDate": "2015/10/08",
				"number": 5,
				"version": "fr",
				"isbn": "9782355928659",
				"cover": "http://www.manga-news.com/public/images/vols/silent-voice-5-ki-oon.jpg",
				"editor": "Ki-oon"
			}]
		}, {
			"names": {
				"fr": "One Piece"
			},
			"authors": [{
				"firstName": "Eiichiro",
				"lastName": "Oda"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.logo-One-Piece_m.jpg",
			"tomes": [{
				"releaseDate": "2000/09/20",
				"number": 1,
				"version": "fr",
				"isbn": "9782723488525",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-edition-originale-1-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/11/26",
				"number": 2,
				"version": "fr",
				"isbn": "9782723489898",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-edition-originale-2-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2001/01/24",
				"number": 3,
				"version": "fr",
				"isbn": "9782723434805",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_03.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2001/03/21",
				"number": 4,
				"version": "fr",
				"isbn": "9782723434812",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_04.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2001/05/14",
				"number": 5,
				"version": "fr",
				"isbn": "9782723434829",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_05.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2001/07/19",
				"number": 6,
				"version": "fr",
				"isbn": "9782723435604",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_06.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2001/09/18",
				"number": 7,
				"version": "fr",
				"isbn": "9782723436229",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_07.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2001/11/24",
				"number": 8,
				"version": "fr",
				"isbn": "9782723436236",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_08.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2002/02/15",
				"number": 9,
				"version": "fr",
				"isbn": "9782723436243",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_09.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2002/04/19",
				"number": 10,
				"version": "fr",
				"isbn": "9782723436250",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_10.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2002/07/27",
				"number": 11,
				"version": "fr",
				"isbn": "9782723436267",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_11.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2002/08/17",
				"number": 12,
				"version": "fr",
				"isbn": "9782723439343",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_12.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2002/10/16",
				"number": 13,
				"version": "fr",
				"isbn": "9782723440103",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_13.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2003/01/16",
				"number": 14,
				"version": "fr",
				"isbn": "9782723441537",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_14.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2003/03/26",
				"number": 15,
				"version": "fr",
				"isbn": "9782723442138",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_15.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2003/05/16",
				"number": 16,
				"version": "fr",
				"isbn": "9782723442404",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_16.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2003/09/26",
				"number": 17,
				"version": "fr",
				"isbn": "9782723440868",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_17.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2003/11/19",
				"number": 18,
				"version": "fr",
				"isbn": "9782723443845",
				"cover": "http://www.manga-news.com/public/images/vols/onepiece_18.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/01/08",
				"number": 19,
				"version": "fr",
				"isbn": "9782723444040",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_19.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/03/06",
				"number": 20,
				"version": "fr",
				"isbn": "9782723445832",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_20.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/05/12",
				"number": 21,
				"version": "fr",
				"isbn": "9782723445849",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_21.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/07/15",
				"number": 22,
				"version": "fr",
				"isbn": "9782723445856",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_22.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/09/15",
				"number": 23,
				"version": "fr",
				"isbn": "9782723447065",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_23.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/11/06",
				"number": 24,
				"version": "fr",
				"isbn": "9782723447072",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_24.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/02/02",
				"number": 25,
				"version": "fr",
				"isbn": "9782723448291",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_25.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/04/06",
				"number": 26,
				"version": "fr",
				"isbn": "9782723448307",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_26.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/06/01",
				"number": 27,
				"version": "fr",
				"isbn": "9782723448314",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_27.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/08/31",
				"number": 28,
				"version": "fr",
				"isbn": "9782723448321",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_28.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/10/05",
				"number": 29,
				"version": "fr",
				"isbn": "9782723448338",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-29-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/01/04",
				"number": 30,
				"version": "fr",
				"isbn": "9782723448345",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_30.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/03/01",
				"number": 31,
				"version": "fr",
				"isbn": "9782723453684",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_31.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/03/03",
				"number": 32,
				"version": "fr",
				"isbn": "9782723453691",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_32.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/07/11",
				"number": 33,
				"version": "fr",
				"isbn": "9782723453707",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_33.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/09/05",
				"number": 34,
				"version": "fr",
				"isbn": "9782723453714",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_34.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/11/08",
				"number": 35,
				"version": "fr",
				"isbn": "9782723453721",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_35.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/02/14",
				"number": 36,
				"version": "fr",
				"isbn": "9782723453738",
				"cover": "http://www.manga-news.com/public/images/vols/one_peice_36.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/04/04",
				"number": 37,
				"version": "fr",
				"isbn": "9782723458054",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_37.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/06/06",
				"number": 38,
				"version": "fr",
				"isbn": "9782723458009",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_38.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/08/22",
				"number": 39,
				"version": "fr",
				"isbn": "9782723458160",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_39.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/11/14",
				"number": 40,
				"version": "fr",
				"isbn": "9782723458214",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_40.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/01/23",
				"number": 41,
				"version": "fr",
				"isbn": "9782723460590",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_41.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/03/19",
				"number": 42,
				"version": "fr",
				"isbn": "9782723460606",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_42.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/05/21",
				"number": 43,
				"version": "fr",
				"isbn": "9782723463355",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_43.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/07/09",
				"number": 44,
				"version": "fr",
				"isbn": "9782723464246",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_44.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/09/10",
				"number": 45,
				"version": "fr",
				"isbn": "9782723464567",
				"cover": "http://www.manga-news.com/public/images/vols/one_piece_45.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/11/18",
				"number": 46,
				"version": "fr",
				"isbn": "9782723464611",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-46.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/01/06",
				"number": 47,
				"version": "fr",
				"isbn": "9782723465137",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-47.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/03/25",
				"number": 48,
				"version": "fr",
				"isbn": "9782723466257",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-48.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/05/20",
				"number": 49,
				"version": "fr",
				"isbn": "9782723468794",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-49.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/07/01",
				"number": 50,
				"version": "fr",
				"isbn": "9782723470346",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-glenat-50.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/09/09",
				"number": 51,
				"version": "fr",
				"isbn": "9782723471916",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-glenat-51.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/01/13",
				"number": 52,
				"version": "fr",
				"isbn": "9782723472265",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-glenat-52.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/04/07",
				"number": 53,
				"version": "fr",
				"isbn": "9782723474979",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-53-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/06/30",
				"number": 54,
				"version": "fr",
				"isbn": "9782723474986",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-54-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2010/10/06",
				"number": 55,
				"version": "fr",
				"isbn": "9782723474993",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-55-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/01/05",
				"number": 56,
				"version": "fr",
				"isbn": "9782723478991",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-56-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/04/06",
				"number": 57,
				"version": "fr",
				"isbn": "9782723482318",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-57-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/09/07",
				"number": 58,
				"version": "fr",
				"isbn": "9782723483506",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-58-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/11/30",
				"number": 59,
				"version": "fr",
				"isbn": "9782723483513",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-59-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/01/04",
				"number": 60,
				"version": "fr",
				"isbn": "9782723486675",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-60-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/03/07",
				"number": 61,
				"version": "fr",
				"isbn": "9782723486682",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-61--glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/05/23",
				"number": 62,
				"version": "fr",
				"isbn": "9782723487689",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-62-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/07/04",
				"number": 63,
				"version": "fr",
				"isbn": "9782723487696",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-63-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2012/10/03",
				"number": 64,
				"version": "fr",
				"isbn": "9782723487702",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-64-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2013/01/02",
				"number": 65,
				"version": "fr",
				"isbn": "9782723493062",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-65-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2013/04/03",
				"number": 66,
				"version": "fr",
				"isbn": "9782723493260",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-66-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2013/07/03",
				"number": 67,
				"version": "fr",
				"isbn": "9782723495738",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-67-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2013/10/09",
				"number": 68,
				"version": "fr",
				"isbn": "9782723496766",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-68-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2014/01/02",
				"number": 69,
				"version": "fr",
				"isbn": "9782723498234",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-edition-originale-69-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2014/04/02",
				"number": 70,
				"version": "fr",
				"isbn": "9782723499330",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-70-gelant.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2014/07/02",
				"number": 71,
				"version": "fr",
				"isbn": "978272349934",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-71-fr.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2014/10/01",
				"number": 72,
				"version": "fr",
				"isbn": "9782344004319",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-72-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2015/01/07",
				"number": 73,
				"version": "fr",
				"isbn": "9782344006450",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-73-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2015/04/01",
				"number": 74,
				"version": "fr",
				"isbn": "9782344006597",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-74-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2015/07/01",
				"number": 75,
				"version": "fr",
				"isbn": "9782344008393",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-75-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2015/09/02",
				"number": 76,
				"version": "fr",
				"isbn": "9782344008423",
				"cover": "http://www.manga-news.com/public/images/vols/one-piece-76-glenat.jpg",
				"editor": "Glénat"
			}]
		}, {
			"names": {
				"fr": "Prison School"
			},
			"authors": [{
				"firstName": "Akira",
				"lastName": "Hiramoto"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.prison-school-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2014/07/16",
				"number": 1,
				"version": "fr",
				"isbn": "9782302040960",
				"cover": "http://www.manga-news.com/public/images/vols/prison-school-1-soleil.jpg",
				"editor": "Soleil"
			}, {
				"releaseDate": "2014/10/22",
				"number": 2,
				"version": "fr",
				"isbn": "9782302041073",
				"cover": "http://www.manga-news.com/public/images/vols/prison-school-2-soleil.jpg",
				"editor": "Soleil"
			}, {
				"releaseDate": "2015/01/21",
				"number": 3,
				"version": "fr",
				"isbn": "9782302043602",
				"cover": "http://www.manga-news.com/public/images/vols/prison-school-3-soleil.jpg",
				"editor": "Soleil"
			}, {
				"releaseDate": "2015/04/22",
				"number": 4,
				"version": "fr",
				"isbn": "9782302045088",
				"cover": "http://www.manga-news.com/public/images/vols/prison-school-4-soleil.jpg",
				"editor": "Soleil"
			}, {
				"releaseDate": "2015/07/01",
				"number": 5,
				"version": "fr",
				"isbn": "9782302046092",
				"cover": "http://www.manga-news.com/public/images/vols/prison-school-5-soleil.jpg",
				"editor": "Soleil"
			}]
		}, {
			"names": {
				"fr": "Berserk"
			},
			"authors": [{
				"firstName": "Kentaro",
				"lastName": "Miura"
			}],
			"genre": "Seinen",
			"cover": "http://www.manga-news.com/public/images/series/.berserk-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2004/10/6",
				"number": 1,
				"version": "fr",
				"isbn": "9782723448123",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_01.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/10/20",
				"number": 2,
				"version": "fr",
				"isbn": "9782723448147",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_02-2.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2004/11/27",
				"number": 3,
				"version": "fr",
				"isbn": "9782723449021",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_03-2.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/02/02",
				"number": 4,
				"version": "fr",
				"isbn": "9782723449038",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_04-2.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/02/23",
				"number": 5,
				"version": "fr",
				"isbn": "9782723449045",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_05-2.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/03/16",
				"number": 6,
				"version": "fr",
				"isbn": "9782723449052",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_2ed_06.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/04/06",
				"number": 7,
				"version": "fr",
				"isbn": "9782723450973",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_07.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/06/15",
				"number": 8,
				"version": "fr",
				"isbn": "9782723450980",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_08.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/06/24",
				"number": 9,
				"version": "fr",
				"isbn": "9782723450997",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_09.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2005/10/19",
				"number": 10,
				"version": "fr",
				"isbn": "9782723451000",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_10.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/01/18",
				"number": 11,
				"version": "fr",
				"isbn": "9782723451017",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_11.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/03/15",
				"number": 12,
				"version": "fr",
				"isbn": "9782723451024",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_12.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/05/05",
				"number": 13,
				"version": "fr",
				"isbn": "9782723454124",
				"cover": "http://ecx.images-amazon.com/images/I/51xHrLe3kOL._SX356_BO1,204,203,200_.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/07/11",
				"number": 14,
				"version": "fr",
				"isbn": "9782723454377",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_14.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/09/05",
				"number": 15,
				"version": "fr",
				"isbn": "9782723454384",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_15.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2006/11/08",
				"number": 16,
				"version": "fr",
				"isbn": "9782723454391",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_16.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/01/03",
				"number": 17,
				"version": "fr",
				"isbn": "9782723454407",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_17.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/03/07",
				"number": 18,
				"version": "fr",
				"isbn": "9782723454414",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_18.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/06/06",
				"number": 19,
				"version": "fr",
				"isbn": "9782723457989",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_19.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/07/11",
				"number": 20,
				"version": "fr",
				"isbn": "9782723458108",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_20.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/09/19",
				"number": 21,
				"version": "fr",
				"isbn": "9782723458191",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_21.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2007/11/28",
				"number": 22,
				"version": "fr",
				"isbn": "9782723458283",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_22.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/01/30",
				"number": 23,
				"version": "fr",
				"isbn": "9782723459631",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_23.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/03/19",
				"number": 24,
				"version": "fr",
				"isbn": "9782723459648",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_24.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/06/04",
				"number": 25,
				"version": "fr",
				"isbn": "9782723459617",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_25.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/07/09",
				"number": 26,
				"version": "fr",
				"isbn": "9782723459624",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_26.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/09/24",
				"number": 27,
				"version": "fr",
				"isbn": "9782723464727",
				"cover": "http://www.manga-news.com/public/images/vols/berserk_27.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2008/11/18",
				"number": 28,
				"version": "fr",
				"isbn": "9782723464734",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-28.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/01/27",
				"number": 29,
				"version": "fr",
				"isbn": "9782723464741",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-29.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/03/11",
				"number": 30,
				"version": "fr",
				"isbn": "9782723464758",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-30.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/05/20",
				"number": 31,
				"version": "fr",
				"isbn": "9782723467223",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-31.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2009/07/01",
				"number": 32,
				"version": "fr",
				"isbn": "9782723467230",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-glenat-32.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/01/26",
				"number": 33,
				"version": "fr",
				"isbn": "9782723477123",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-33-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/04/20",
				"number": 34,
				"version": "fr",
				"isbn": "9782723480741",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-34-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2011/06/29",
				"number": 35,
				"version": "fr",
				"isbn": "9782723484077",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-35-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2013/01/02",
				"number": 36,
				"version": "fr",
				"isbn": "9782723491129",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-36-glenat.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2014/07/02",
				"number": 37,
				"version": "fr",
				"isbn": "9782723495943",
				"cover": "http://www.manga-news.com/public/images/vols/berserk-37-glenat.jpg",
				"editor": "Glénat"
			}]
		}, {
			"names": {
				"fr": "I Am A Hero"
			},
			"authors": [{
				"firstName": "Kengo",
				"lastName": "Hanazawa"
			}],
			"genre": "Seinen",
			"cover": "http://www.manga-news.com/public/images/series/.i-am-a-hero-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2012/04/27",
				"number": 1,
				"version": "fr",
				"isbn": "9782505014409",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-1-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/04/27",
				"number": 2,
				"version": "fr",
				"isbn": "9782505014416",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-2-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/06/01",
				"number": 3,
				"version": "fr",
				"isbn": "9782505014638",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-3-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/08/24",
				"number": 4,
				"version": "fr",
				"isbn": "9782505015239",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-4-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/10/05",
				"number": 5,
				"version": "fr",
				"isbn": "9782505015512",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-5-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/12/07",
				"number": 6,
				"version": "fr",
				"isbn": "9782505015826",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-hero-6-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/04/19",
				"number": 7,
				"version": "fr",
				"isbn": "9782505018094",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-7-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/09/06",
				"number": 8,
				"version": "fr",
				"isbn": "9782505018100",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-8-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2013/12/06",
				"number": 9,
				"version": "fr",
				"isbn": "9782505018117",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-9-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/04/04",
				"number": 10,
				"version": "fr",
				"isbn": "9782505060147",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-10-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/08/22",
				"number": 11,
				"version": "fr",
				"isbn": "9782505060734",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-tome-11-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2014/12/05",
				"number": 12,
				"version": "fr",
				"isbn": "9782505060741",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-12-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2015/04/17",
				"number": 13,
				"version": "fr",
				"isbn": "9782505062929",
				"cover": "http://www.manga-news.com/public/images/vols/iam-hero-13-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2015/08/21",
				"number": 14,
				"version": "fr",
				"isbn": "9782505062936",
				"cover": "http://www.manga-news.com/public/images/vols/i-am-a-hero-14-kana.jpg",
				"editor": "Kana"
			}]
		}, {
			"names": {
				"fr": "Monster"
			},
			"authors": [{
				"firstName": "Naoki",
				"lastName": "Urasawa"
			}],
			"genre": "Seinen",
			"cover": "http://www.manga-news.com/public/images/series/.monster-deluxe-logo_m.jpg",
			"tomes": [{
				"releaseDate": "2010/11/05",
				"number": 1,
				"version": "fr",
				"isbn": "9782505009993",
				"cover": "http://www.manga-news.com/public/images/series/monster-deluxe-1-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2010/11/05",
				"number": 2,
				"version": "fr",
				"isbn": "9782505010005",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-2-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/02/04",
				"number": 3,
				"version": "fr",
				"isbn": "9782505010593",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-3-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/05/06",
				"number": 4,
				"version": "fr",
				"isbn": "9782505010968",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-4-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/08/26",
				"number": 5,
				"version": "fr",
				"isbn": "9782505012139",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-5-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2011/12/02",
				"number": 6,
				"version": "fr",
				"isbn": "9782505012641",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-6-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/01/20",
				"number": 7,
				"version": "fr",
				"isbn": "9782505013983",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-7-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/04/27",
				"number": 8,
				"version": "fr",
				"isbn": "9782505014928",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-8-kana.jpg",
				"editor": "Kana"
			}, {
				"releaseDate": "2012/08/24",
				"number": 9,
				"version": "fr",
				"isbn": "9782505015260",
				"cover": "http://www.manga-news.com/public/images/vols/monster-deluxe-9-kana.jpg",
				"editor": "Kana"
			}]
		}, {
			"names": {
				"fr": "Dragon Ball"
			},
			"authors": [{
				"firstName": "Akira",
				"lastName": "Toriyama"
			}],
			"genre": "Shonen",
			"cover": "http://www.manga-news.com/public/images/series/.dragon-ball-logo-glenat_m.jpg",
			"tomes": [{
				"releaseDate": "1993/05/24",
				"number": 1,
				"version": "fr",
				"isbn": "9782876952058",
				"cover": "http://www.manga-news.com/public/images/vols/DragonBall1.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1993/06/17",
				"number": 2,
				"version": "fr",
				"isbn": "9782876952065",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_02.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1993/09/22",
				"number": 3,
				"version": "fr",
				"isbn": "9782876952072",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_03.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1993/11/26",
				"number": 4,
				"version": "fr",
				"isbn": "9782876952102",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_04.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/01/25",
				"number": 5,
				"version": "fr",
				"isbn": "9782876952119",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_05.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/03/28",
				"number": 6,
				"version": "fr",
				"isbn": "9782876952126",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_06.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/05/26",
				"number": 7,
				"version": "fr",
				"isbn": "9782876952171",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_07.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/06/23",
				"number": 8,
				"version": "fr",
				"isbn": "9782876952188",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_08.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/07/19",
				"number": 9,
				"version": "fr",
				"isbn": "9782876952195",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_09.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/10/21",
				"number": 10,
				"version": "fr",
				"isbn": "9782876952201",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_10.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1994/11/25",
				"number": 11,
				"version": "fr",
				"isbn": "9782876952218",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_11.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/01/23",
				"number": 12,
				"version": "fr",
				"isbn": "9782723418553",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_12.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/03/24",
				"number": 13,
				"version": "fr",
				"isbn": "9782723418560",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_13.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/05/22",
				"number": 14,
				"version": "fr",
				"isbn": "9782723418577",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_14.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/07/26",
				"number": 15,
				"version": "fr",
				"isbn": "9782723418584",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_15.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/08/27",
				"number": 16,
				"version": "fr",
				"isbn": "9782723418591",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_16.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/09/21",
				"number": 17,
				"version": "fr",
				"isbn": "9782723418607",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_17.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1995/11/24",
				"number": 18,
				"version": "fr",
				"isbn": "9782723418614",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_18.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1996/02/14",
				"number": 19,
				"version": "fr",
				"isbn": "9782723419024",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_19.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1996/04/26",
				"number": 20,
				"version": "fr",
				"isbn": "9782723419239",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_20.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1996/06/24",
				"number": 21,
				"version": "fr",
				"isbn": "9782723418645",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_21.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1996/08/25",
				"number": 22,
				"version": "fr",
				"isbn": "9782723418652",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_22.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1996/10/29",
				"number": 23,
				"version": "fr",
				"isbn": "9782723418669",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_23.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1997/01/26",
				"number": 24,
				"version": "fr",
				"isbn": "9782723418676",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_24.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1997/03/26",
				"number": 25,
				"version": "fr",
				"isbn": "9782723422246",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_25.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1997/05/29",
				"number": 26,
				"version": "fr",
				"isbn": "9782723422253",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_26.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1997/06/21",
				"number": 27,
				"version": "fr",
				"isbn": "9782723422260",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_27.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1997/08/19",
				"number": 28,
				"version": "fr",
				"isbn": "9782723423465",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_28.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1997/10/17",
				"number": 29,
				"version": "fr",
				"isbn": "9782723423472",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_29.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1998/02/18",
				"number": 30,
				"version": "fr",
				"isbn": "9782723423489",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_30.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1998/04/16",
				"number": 31,
				"version": "fr",
				"isbn": "9782723423496",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_31.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1998/06/22",
				"number": 32,
				"version": "fr",
				"isbn": "9782723423502",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_32.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1998/08/18",
				"number": 33,
				"version": "fr",
				"isbn": "9782723423519",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_33.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1998/09/25",
				"number": 34,
				"version": "fr",
				"isbn": "9782723423526",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_34.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1998/11/21",
				"number": 35,
				"version": "fr",
				"isbn": "9782723423533",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_35.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1999/02/15",
				"number": 36,
				"version": "fr",
				"isbn": "9782723423540",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_36.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1999/04/26",
				"number": 37,
				"version": "fr",
				"isbn": "9782723427920",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_37.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1999/06/28",
				"number": 38,
				"version": "fr",
				"isbn": "9782723428057",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_38.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "1999/10/24",
				"number": 39,
				"version": "fr",
				"isbn": "9782723428552",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_39.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/01/21",
				"number": 40,
				"version": "fr",
				"isbn": "9782723428569",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_40.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/05/24",
				"number": 41,
				"version": "fr",
				"isbn": "9782723428576",
				"cover": "http://www.manga-news.com/public/images/vols/dragonball_41.jpg",
				"editor": "Glénat"
			}, {
				"releaseDate": "2000/11/11",
				"number": 42,
				"version": "fr",
				"isbn": "9782723428583",
				"cover": "http://www.manga-news.com/public/images/vols/DragonBall42.jpg",
				"editor": "Glénat"
			}]
		}];
		console.log("Start dumbData import");
		for (var i = 0; i < data.length; i++) {
			data[i].user = userId;
			Meteor.call('mangasInsert', data[i], function(error) {
				if (error) {
					return console.log(error.message, error.invalidKeys, data[i]);
				}
			});
		}
		for (var m = 0; m < mangasData.length; m++) {
			Meteor.call('addCompleteMangas', mangasData[m], function(error) {
				if (error) {
					return console.log(error.message, error.invalidKeys, mangasData[m]);
				}
			});
		}
		console.log("End dumbData import");
	}
});