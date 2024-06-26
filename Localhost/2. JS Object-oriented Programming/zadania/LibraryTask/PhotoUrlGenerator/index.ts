export class PhotoUrlGenerator {
  static getPhotoUrl(): string {
    const randomId = Math.floor(Math.random() * 51);
    const randomUrlPhoto = `https://picsum.photos/${randomId}/237/200/300`;

    return randomUrlPhoto;
  }
}
