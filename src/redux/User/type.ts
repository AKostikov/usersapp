export interface User {
  gender: string;
  name: {
      title: string;
      first: string;
      last: string;
  };
  location: {
      street: {
          number: number;
          name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: string;
      coordinates: {
          latitude: string;
          longitude: string;
      };
      timezone: {
          offset: string;
          description: string;
      };
  };
  email: string;
  login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
  };
  dob: {
      date: string;
      age: number;
  };
  registered: {
      date: string;
      age: number;
  };
  phone: string;
  cell: string;
  id: {
      name: string;
      value: string;
  };
  picture: {
      large: string;
      medium: string;
      thumbnail: string;
  };
  nat: string;
};

export interface Statistics {
    count : number;
    count11to20 : number;
    count21to30 : number;
    count31to40 : number;
    count41to50 : number;
    count51 : number;
    countMale : number;
    countFemale : number;
  }