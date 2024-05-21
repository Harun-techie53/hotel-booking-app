export interface IUser {
  email: string;
  name: string;
  _id: string;
  joinedAt: Date;
}

export interface IToast {
  message: string;
  type: "SUCCESS" | "ERROR";
}

export interface IMyHotel {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: { id: string; public_id: string; url: string }[];
  lastUpdated: Date;
}

export interface ISearchParam {
  destination: string;
  adultCount: number;
  childCount: number;
  checkIn: Date;
  checkOut: Date;
}
