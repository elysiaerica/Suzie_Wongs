import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/enquiries", async (req, res) => {
    try {
      const data = insertEnquirySchema.parse(req.body);
      const enquiry = await storage.createEnquiry(data);
      res.json({ success: true, id: enquiry.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: err.errors });
      }
      console.error("Enquiry error:", err);
      res.status(500).json({ error: "Failed to submit enquiry" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const msg = await storage.createContactMessage(data);
      res.json({ success: true, id: msg.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: err.errors });
      }
      console.error("Contact error:", err);
      res.status(500).json({ error: "Failed to submit message" });
    }
  });

  return httpServer;
}
