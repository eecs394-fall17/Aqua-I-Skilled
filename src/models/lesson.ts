export class Lesson {
  id: string;
  user: string;
  price: string;
  time: string;
  duration: string;
  place: string;
  dist: string;

  constructor(uid, time, dur, place, dist, price) {
    this.user = uid;
    this.time = time;
    this.duration = dur;
    this.place = place;
    this.dist = dist;
    this.price = price;
  }

  toObj() {
    return {
      id: this.id,
      user: this.user,
      time: this.time,
      duration: this.duration,
      place: this.place,
      dist: this.dist,
      price: this.price
    }
  }
}