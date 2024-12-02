import { http } from "viem";
import {baseSepolia} from "wagmi/chains";



export const chainArray = [baseSepolia];
export const transportsObject = {
  
  [baseSepolia.id]: http(),
 
};
