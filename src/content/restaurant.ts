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
  email: string
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
  // TODO: Source menu footer shows 6392693457 but repo has +917880840622. Confirm primary phone with client.
  phone: {
    display: '+91 78808 40622',
    e164: '+917880840622',
  },
  email: 'info@hestiia.com',
  hours: {
    status: 'confirmed',
    // TODO: Confirm exact operating hours with client (set to daily 11:00 AM to 11:00 PM per source)
    displayText: 'Daily 11:00 AM – 11:00 PM',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hestiia+Restaurant+Shyam+Nagar+Kanpur',
  instagramUrl: 'https://www.instagram.com/hestiiarestaurant/',
  servesCuisine: ['North Indian', 'Chinese', 'Fast Food & Snacks', 'Desserts & Beverages'],
}

