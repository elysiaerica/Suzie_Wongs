import {
  type User,
  type InsertUser,
  type Enquiry,
  type InsertEnquiry,
  type ContactMessage,
  type InsertContactMessage,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  createContactMessage(msg: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private enquiries: Map<string, Enquiry>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.enquiries = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const id = randomUUID();
    const enquiry: Enquiry = {
      ...insertEnquiry,
      id,
      budget: insertEnquiry.budget ?? null,
      createdAt: new Date(),
    };
    this.enquiries.set(id, enquiry);
    return enquiry;
  }

  async createContactMessage(insertMsg: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const msg: ContactMessage = {
      ...insertMsg,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, msg);
    return msg;
  }
}

export const storage = new MemStorage();
