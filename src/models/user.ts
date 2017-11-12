export class User {
  id: string;
  name: string;
  email: string;
  image: string;
  teacherDesc: string;

  constructor(name, email, img, desc) {
    this.name = name;
    this.email = email;
    this.image = img;
    this.teacherDesc = desc;
  }

  toObj() {
    return {
      name: this.name,
      email: this.email,
      image: this.image,
      teacherDesc: this.teacherDesc
    }
  }
}