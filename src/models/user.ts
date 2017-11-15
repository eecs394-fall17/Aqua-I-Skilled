export class User {
  id: string;
  name: string;
  email: string;
  image: string;
  teacherDesc: string;
  rating: string;

  constructor(name, email, img, desc, rating) {
    this.name = name;
    this.email = email;
    this.image = img;
    this.teacherDesc = desc;
    this.rating = rating;
  }

  toObj() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      image: this.image,
      teacherDesc: this.teacherDesc,
      rating: this.rating,
    }
  }
}