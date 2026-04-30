export interface ProductCardProps {
  /** Path or URL to the .glb file */
  modelSrc: string;
  /** Product name displayed in the background */
  productName?: string;
  /** Product description shown below the model */
  description?: string;
  /** Background color for the model container */
  backgroundColor?: string;
  /** Text color for the background product name */
  nameColor?: string;
  /** Optional poster image shown while model loads */
  poster?: string;
  /** Optional available sizes for the product */
  availableSizes?: string[];
}