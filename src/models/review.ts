export class Review {
  id: string;
  review: string;
  rating: string;

  constructor(rev, rat) {
    this.review = rev;
    this.rating = rat;
  }

  toObj() {
    return {
      id: this.id,
      review: this.review,
      rating: this.rating
    }
  }
}
