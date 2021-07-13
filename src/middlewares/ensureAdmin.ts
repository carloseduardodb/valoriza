import { Request, Response, NextFunction } from "express";
import { UserIsAdminService } from "../services/UserIsAdminService";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const isAdmin = await new UserIsAdminService().execute(user_id);

  if (isAdmin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
