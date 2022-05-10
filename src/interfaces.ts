interface Highlight {
  start: number;
  length: number;
}

export interface AutocompleteResult {
  type: string;
  text: {
    primary: string;
    secondary: string;
    highlight: Highlight[];
  };
  geo: {
    name: string;
    center: {
      latitude: number;
      longitude: number;
    };
    bounds: {
      ne: {
        latitude: number;
        longitude: number;
      };
      sw: {
        latitude: number;
        longitude: number;
      };
    };
    cc: string;
    type: string;
  };
}

interface Category {
  id: number;
  name: string;
  icon: {
    prefix: string;
    suffix: string;
  };
}

export interface Location {
  address?: string;
  address_extended?: string;
  locality?: string;
  dma?: string;
  region?: string;
  postcode?: string;
  country?: string;
  admin_region?: string;
  post_town?: string;
  neighborhood?: string[];
  po_box?: string;
  cross_street?: string;
  formatted_address?: string;
  census_block?: string;
}

export interface Photo {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications?: string[];
}

interface ShopHours {
  close: string;
  day: number;
  open: string;
}

interface SeasonalHours {
  closed: boolean;
  end_date: string;
  start_date: string;
  hours: ShopHours[];
}

interface ShopHourDetails {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: ShopHours[];
  seasonal: SeasonalHours[];
}

export interface CoffeeShopListResult {
  fsq_id: string;
  categories: Category[];
  name: string;
  photos: Photo[];
  price: number;
  rating: number;
  location: Location;
}

export interface CoffeeShop {
  categories: Category[];
  name: string;
  photos: Photo[];
  price: number;
  rating: number;
  location: Location;
  description: string;
  website: string;
  tel: string;
  hours: ShopHourDetails;
}

export interface LoaderProps {
  size?: number | undefined;
  loaderWidth?: number | undefined;
  className?: string | undefined;
  margin?: string | undefined;
}

export interface SearchPageProps {
  setPlaceId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface GlobalState {
  app: {
    coffeeShopList: CoffeeShopListResult[];
    locality: string;
    homeScrollPos: number;
  };
}
