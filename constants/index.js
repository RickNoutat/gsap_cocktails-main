const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "À propos",
 },
 {
	id: "work",
	title: "L'Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Bouteille",
	price: "10 €",
 },
 {
	name: "Caten Malbec",
	country: "AU",
	detail: "Bouteille",
	price: "49 €",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "20 €",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "29 €",
 },
];

const mockTailLists = [
 {
	name: "Fleur Tropicale",
	country: "FR",
	detail: "Bouteille",
	price: "10 €",
 },
 {
	name: "Fruit de la Passion",
	country: "FR",
	detail: "Bouteille",
	price: "49 €",
 },
 {
	name: "Éclat d'Agrumes",
	country: "CA",
	detail: "750 ml",
	price: "20 €",
 },
 {
	name: "Pétillant Lavande",
	country: "FR",
	detail: "600 ml",
	price: "29 €",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Mélanges parfaitement équilibrés",
 "Garnitures soignées à la perfection",
 "Fraîcheur glacée à chaque verre",
 "Secoué et remué avec expertise",
];

const goodLists = [
 "Ingrédients soigneusement sélectionnés",
 "Techniques signature maison",
 "L'art du bartending en action",
 "Saveurs fraîchement muddlées",
];

const storeInfo = {
 heading: "Où nous trouver",
 address: "12, Rue du Faubourg Saint-Antoine, 75011 Paris",
 contact: {
	phone: "+33 1 42 78 36 90",
	email: "hello@mojitobar.fr",
 },
};

const openingHours = [
 { day: "Lun–Jeu", time: "11h00 – 00h00" },
 { day: "Ven", time: "11h00 – 02h00" },
 { day: "Sam", time: "9h00 – 02h00" },
 { day: "Dim", time: "9h00 – 01h00" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Mojito Classique",
	image: "/images/drink1.png",
	title: "Des ingrédients simples, une saveur audacieuse",
	description:
	 "Préparé avec du rhum blanc, du jus de citron vert et de la menthe fraîche, le Mojito Classique est rafraîchissant et plein de caractère. Parfait pour les soirées d'été.",
 },
 {
	id: 2,
	name: "Mojito Framboise",
	image: "/images/drink2.png",
	title: "Un classique acidulé qui ne déçoit jamais",
	description:
	 "Le Mojito Framboise marie la douceur des framboises fraîches au pétillant du rhum et à la fraîcheur de la menthe. Secoué, frappé ou sur glace — toujours fruité et désaltérant.",
 },
 {
	id: 3,
	name: "Brise Violette",
	image: "/images/drink3.png",
	title: "Des ingrédients simples, une saveur audacieuse",
	description:
	 "Élaboré avec une liqueur de violette, du citron et une pointe de gin, ce cocktail offre une expérience florale et élégante. Ajoutez un bord givré pour parfaire la dégustation.",
 },
 {
	id: 4,
	name: "Mojito Curaçao",
	image: "/images/drink4.png",
	title: "Préparé avec soin, versé avec passion",
	description:
	 "Chaque cocktail est élaboré avec des ingrédients frais et une passion pour la perfection, que vous soyez là pour célébrer ou simplement vous détendre.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
