// Photos are stored in public/assets/photos (sources and licences in CREDITS.txt there).
const photo = (name) => `/assets/photos/${name}.jpg`;

export const slides = [
  { id: 'kenya', tone: '#8a4529', src: photo('hero-kenya'), placeholder: 'Maasai Mara at sunset', place: 'Maasai Mara, Kenya', title: 'The Great Migration', line: 'Private conservancy camps, dawn game drives and sundowners on the open savannah.' },
  { id: 'indonesia', tone: '#1d5b66', src: photo('hero-indonesia'), placeholder: 'Raja Ampat islands', place: 'Raja Ampat, Indonesia', title: 'Islands of Raja Ampat', line: 'Limestone karsts and turquoise lagoons, explored by private boat.' },
  { id: 'kerala', tone: '#3f6b3a', src: photo('hero-kerala'), placeholder: 'Wooden boats on the Kerala backwaters at sunrise', place: 'Western Ghats & Vembanad, Kerala', title: 'The Spice Frontier & Backwaters', line: 'Misty colonial tea trails in the Western Ghats, then silent skiff voyages across Vembanad.' },
  { id: 'northeast', tone: '#2f5a44', src: photo('hero-northeast'), placeholder: 'Dzukou Valley, Northeast India', place: 'Nagaland & Manipur, Northeast India', title: 'Dzükou Valley', line: 'Rolling green hills, living root bridges and quiet homestays across the Northeast.' },
];

export const itineraries = [
  { id: 'kenya', src: photo('itin-kenya'), placeholder: 'Maasai Mara landscape', kicker: '8 Nights · Kenya', title: 'Safari in the Maasai Mara', body: 'Nairobi, then private conservancy camps in the Mara with game drives, bush walks and a balloon flight at sunrise.' },
  { id: 'indonesia', src: photo('itin-indonesia'), placeholder: 'Mount Bromo at sunrise', kicker: '10 Nights · Indonesia', title: 'Java Volcanoes to Raja Ampat', body: 'Sunrise over Mount Bromo, then days at sea among the islands of Raja Ampat.' },
  { id: 'kerala', src: photo('itin-kerala'), placeholder: 'A houseboat on the Alleppey backwaters', kicker: '6 Nights · Kerala', title: 'The Spice Frontier & Backwaters', body: 'Misty colonial tea trails in the Western Ghats, followed by silent skiff voyages through secluded Vembanad waters.' },
  { id: 'northeast', src: photo('itin-northeast'), placeholder: 'Living root bridges, Meghalaya', kicker: '9 Nights · Meghalaya & Nagaland', title: 'Hills of the Northeast', body: 'Shillong, the living root bridges of Cherrapunji and the Dzükou Valley trek.' },
];

export const stays = [
  { id: 'amanpuri', src: photo('stay-amanpuri'), placeholder: 'Amanpuri pavilion', place: 'Phuket, Thailand', name: 'Amanpuri', body: 'Pavilions set in a coconut grove above Pansea Beach on the Andaman Sea.' },
  { id: 'al-maha', src: photo('stay-al-maha'), placeholder: 'Al Maha dunes', place: 'Dubai Desert Conservation Reserve', name: 'Al Maha, a Luxury Collection Desert Resort', body: 'Private pool suites facing open dunes, with oryx and gazelle roaming the reserve.' },
  { id: 'mandapa', src: photo('stay-mandapa'), placeholder: 'Mandapa river villas', place: 'Ubud, Bali, Indonesia', name: 'Mandapa, a Ritz-Carlton Reserve', body: 'Riverside villas among terraced rice paddies in the Ayung River valley.' },
];
