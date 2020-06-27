export const pictures = {
  image: [
    'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
    'https://avatars0.githubusercontent.com/u/18321205?s=460&u=0d722bf802dd00bb3c001b8ca9dd76327b1d4199&v=4',
    'https://avatars0.githubusercontent.com/u/36532924?s=460&u=2c4f8fb725ab5b1e691c4ec17a316412052cf990&v=4',
    'https://avatars1.githubusercontent.com/u/41696447?s=460&v=4',
  ],

  getRandomPicture() {
    const rand = Math.floor(Math.random() * Math.floor(this.image.length));

    return this.image[rand];
  },
};
