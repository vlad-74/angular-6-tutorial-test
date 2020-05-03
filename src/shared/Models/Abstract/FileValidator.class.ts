export abstract class FileValidator {
  public extensions = {
    video: '.mp4, video/mp4',
    image: '.jpeg, .png, image/png, image/jpeg'
  };

  validateVideo(type) {
    return ~this.extensions.video.indexOf(type);
  }

  validatePhoto(type) {
    return ~this.extensions.image.indexOf(type);
  }
}
