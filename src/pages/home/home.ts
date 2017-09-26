import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Ten Cards
  cards = [
    {
      imgPath: "broadway.jpg",
      title: "Broadway",
      location: "Manhattan, New York",
      desc: "There are many Broadways all over the world (including several in New York alone), but Manhattan’s is the one that inspired the song, as well as played host to many musicals in its heyday.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "laRambla.jpg",
      title: "La Rambla",
      location: "Barcelona, Spain",
      desc: "This central Barcelona street connects the city’s famed Christopher Columbus monument with Placa de Catalunya. Hard to believe La Rambla is less than a mile long, but its lush, tree-lined and café-laden pedestrian zone is arguably the most popular stretch for people watching in the city, if not the country.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "pch.jpg",
      title: "Pacific Coast Highway",
      location: "California",
      desc: "Otherwise known as California State Route 1, this 655-mile highway isn’t the fastest way to get from one end of California to the other, but it’s hands-down the most beautiful. Initially constructed to connect the gorgeously rugged Big Sur region of central California to the rest of the state, the highway opened in the late 1930s and has been the vehicle for iconic west coast road trips ever since.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "bourbonStreet.jpg",
      title: "Bourbon Street",
      location: "New Orleans, Louisiana",
      desc: "This pedestrian-friendly stretch of the Big Easy has an apt reputation as the city’s booziest, thanks to its late-night bars, burlesques and bead-wearing Mardi Gras partiers.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "abbeyRoad.jpg",
      title: "Abbey Road",
      location: "London, England",
      desc: "The Beatles popularized this north London road with the release of the eponymous album in 1969. The street, known for little else, continues to attract the attention of Beatles devotees wishing to reenact the iconic album cover photograph by crossing the street.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "lombardStreet.jpeg",
      title: "Lombard Street",
      location: "San Fransisco, California",
      desc: "In a city known for its incredibly steep hills, this so-called “crookedest” street in the world was designed with eight hairpin turns as a way to break the hill’s steep slope.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "michiganAvenue.jpg",
      title: "Michigan Avenue",
      location: "Chicago, Illinois",
      desc: "Michigan Avenue and its subset, the Magnificent Mile, begin where the city curves east into Lake Michigan, carving out Chicago’s busiest shopping corridor. Running parallel with the lake, the street continues south and—after hopping a bridge over the Chicago River—serves as the primary entry point to the city’s front yard: Millennium Park.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "wallStreet.jpg",
      title: "Wall Street",
      location: "Manhattan, New York",
      desc: "The wealthiest street in the world.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "hollywoodBoulevard.jpg",
      title: "Hollywood Boulevard",
      location: "Hollywood, California",
      desc: "There are many famous streets in the City of Angels, but this is the one sprinkled with the stars: approximately 2,500 of them, sunken into the sidewalk in homage to famous entertainers of note.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "champs-elysees.jpg",
      title: "Champs-Elysees",
      location: "",
      desc: "When Louis XIV called for this lengthy stretch of fields west of the Tuileries Gardens to be developed into a proper tree-lined avenue, he couldn’t have known how tony its modern iteration would eventually become. Officially named the Champs-Élysées in the early 18th century, this long and wide avenue was quickly embraced as ground zero for wealthy merchandising. And its proximity to the Grand and Petit Palais and the Arc de Triomphe has secured its place as the most popular parade route in Paris.",
      favorited: false,
      saved: false
    }
  ];

  arrayLength = this.cards.length;

  constructor(public navCtrl: NavController) {

  }

  //Type Here

  //Make the favorite button work
  clickFav(card) {
    let index = this.cards.indexOf(card);

    if (index > -1){
      if(card.favorited) {
        this.cards[index].favorited = false;
      } else {
        this.cards[index].favorited = true;
      }
    }
  }

  //Make the bookmark button work
  clickSave(card) {
    let index = this.cards.indexOf(card);

    if (index > -1){
      if(card.saved) {
        this.cards[index].saved = false;
      } else {
        this.cards[index].saved = true;
      }
    }
  }

  //Delete the chosen card
  deleteItem(card){
    let index = this.cards.indexOf(card);
    this.cards.splice(index, 1)
    this.arrayLength = this.cards.length;
  }

}
