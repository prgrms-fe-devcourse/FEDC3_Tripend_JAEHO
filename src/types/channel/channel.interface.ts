export interface Channel {
  _id: string;
  name: string;
  description: string;
}

export interface Channels {
  eastEurope: Channel[];
  westEurope: Channel[];
  southEurope: Channel[];
  northEurope: Channel[];
}
