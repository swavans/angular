
import { Component } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent {

  // TODO: add data model
  contact: Contact = {
    firstName: 'Sascha',
    lastName: 'Worms'
  };
  contacts: Contact[] = [];


  constructor() {
    // TODO: do the initialization if necessary
  }
  warning: Boolean = true;
  reset() {
    this.warning = true;
  }

  save() {
    if (this.isValid()) {
      this.contacts.push(Object.assign({}, this.contact));
    } else { console.log('invalid'); }
    this.clear();
  }

  clear() {
    this.contact.firstName = null;
    this.contact.lastName = null;
    this.warning = false;
  }

  isValid() {
    return this.contact.firstName && this.contact.lastName;
  }

  random() {
    this.contact.firstName = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    this.contact.lastName = this.nouns[Math.floor(Math.random() * this.nouns.length)];
    this.save();
  }


  adjectives: string[] = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful",   "bellicose", "bilious", "boorish", "calamitous",   "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless",     "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome",     "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant",      "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate",       "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious",        "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent",         "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];

  nouns: string[] = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake",   "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles",    "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus",    "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker",     "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer",     "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant",      "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler",       "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
}
