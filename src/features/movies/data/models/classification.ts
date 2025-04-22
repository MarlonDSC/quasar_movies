import { ContentRating } from "../../../../core/types";;

export interface Classification {
    rating: ContentRating;
    advisoryContent: string[];
  }