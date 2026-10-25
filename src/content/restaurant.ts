export type Status = 'confirmed' | 'pending'

export interface RestaurantInfo {
  name: string
  tagline: string
  type: 'pure-vegetarian'
  address: {
    line1: string
    locality: string
    city: string
    state: string
    postalCode: string
    country: string
    fullDisplay: string
  }
  phone: {
    display: string
    e164: string
  }
  hours: {
    status: Status
    displayText: string
  }
  mapsUrl: string
  instagramUrl: string
  servesCuisine: string[]
}

export const RESTAURANT: RestaurantInfo = {
  name: 'Hestiia Restaurant',
  tagline: 'Pure Vegetarian Dining · Shyam Nagar, Kanpur',
  type: 'pure-vegetarian',
  address: {
    line1: '1-B, Ram Puram',
    locality: 'Shyam Nagar',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    postalCode: '208013',
    country: 'IN',
    fullDisplay: '1-B, Ram Puram, Shyam Nagar, Kanpur, Uttar Pradesh 208013',
  },
  phone: {
    display: '+91 78808 40622',
    e164: '+917880840622',
  },
  hours: {
    status: 'pending',
    displayText: 'Hours to be confirmed — please call ahead',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hestiia+Restaurant+Shyam+Nagar+Kanpur',
  instagramUrl: 'https://www.instagram.com/hestiiarestaurant/',
  servesCuisine: ['North Indian', 'Chinese', 'Fast Food & Snacks', 'Desserts & Beverages'],
}
