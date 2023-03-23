export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  title: string;
}

export interface Element {
  type: "Trailer" | "Clip" | "Opening Credits";
}

export interface Product {
  default_price: {
    id: string;
    unit_amount: number;
  };
  id: string;
  images: string[];
  metadata: {
    adv: string;
  };
  name: string;
}

export interface Subscription {
  current_period_start: number;
  id: string;
  current_period_end: number;
  plan: {
    active: boolean;
    amount: number;
    nickname: string;
  };
  default_payment_method: {
    card: {
      brand: string;
      exp_month: number;
      exp_year: number;
      last4: number;
    };
  };
  customer: {
    email: string;
    metadata: {
      user_id:string
    }
  };
}


export interface Mylist {
  userId:string
  product:IMovie
}