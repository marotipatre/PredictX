import jwt, { JwtPayload } from 'jsonwebtoken';

export const verifyToken = (token: string): JwtPayload => {
  try {

    return jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string) as JwtPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
