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

export const categories = [
  {
    name: 'Science',
    value: 'science',
  },
  {
    name: 'Technology',
    value: 'technology',
  },
  {
    name: 'Food',
    value: 'food',
  },
  {
    name: 'Health',
    value: 'health',
  },
  {
    name: 'Agriculture',
    value: 'agriculture',
  },
];

export const profession = {
  job: [
    'Professor',
    'Software Engineer',
    'Doctor',
    'Surgeon',
    'Chef',
    'UI/UX Engineer',
    'Researcher',
    'Dentist',
  ],

  getRandomJob() {
    const rand = Math.floor(Math.random() * Math.floor(this.job.length));

    return this.job[rand];
  },
};

export const notifications = {
  institutionMessage: [
    ' has accepted your Appointment.',
    ' has rejected your Appointment.',
    ' has a session near your place.',
    ' has available time tomorrow.',
  ],

  tutorMessage: [
    ' has started following you.',
    ' has requested your Appointment.',
    ' has visited your profile.',
    ' has subscribed you.',
  ],

  getRandomInstitutionMessage() {
    const rand = Math.floor(
      Math.random() * Math.floor(this.institutionMessage.length)
    );

    return this.institutionMessage[rand];
  },

  getRandomTutorMessage() {
    const rand = Math.floor(
      Math.random() * Math.floor(this.tutorMessage.length)
    );

    return this.tutorMessage[rand];
  },
};

export const persons = {
  name: [
    'Ram Poudel',
    'Sita Jha',
    'Einstein',
    'I.Newton',
    'Bill Gates',
    'Raj Kapoor',
    'Akasky Rai',
    'Pasang Dorje',
    'Bikash Gurung',
  ],

  getRandomName() {
    const rand = Math.floor(Math.random() * Math.floor(this.name.length));

    return this.name[rand];
  },
};

export const getRandomNumber = (limit: number) => {
  return Math.floor(Math.random() * Math.floor(limit));
};
