export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    bio?: Bio;
    // Add other fields if available
  }
  
  export interface Bio {
    id: number;
    biodata: string;
  }
  