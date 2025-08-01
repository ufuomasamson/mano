declare namespace NodeJS {
  interface ProcessEnv {
    // Appwrite Core Setup
    NEXT_PUBLIC_APPWRITE_ENDPOINT: string;
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: string;
    NEXT_PUBLIC_APPWRITE_DATABASE_ID: string;
    NEXT_PUBLIC_APPWRITE_BUCKET_ID: string;

    // Collections
    NEXT_PUBLIC_COLLECTION_FLIGHTS: string;
    NEXT_PUBLIC_COLLECTION_AIRLINES: string;
    NEXT_PUBLIC_COLLECTION_BOOKINGS: string;
    NEXT_PUBLIC_COLLECTION_CRYPTO_WALLETS: string;
    NEXT_PUBLIC_COLLECTION_CURRENCIES: string;
    NEXT_PUBLIC_COLLECTION_LOCATIONS: string;
    NEXT_PUBLIC_COLLECTION_PAYMENT_GATEWAYS: string;
    NEXT_PUBLIC_COLLECTION_PAYMENTS: string;
    NEXT_PUBLIC_COLLECTION_USER_PREFERENCES: string;
    NEXT_PUBLIC_COLLECTION_USERS: string;
  }
}
