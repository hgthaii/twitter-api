import { MongoClient, Db, Collection } from 'mongodb'
import User from '~/models/schemas/User.schema'
import responseHandlers from '~/handlers/response.handlers'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import dotenv from 'dotenv'
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.pkh5g80.mongodb.net/?retryWrites=true&w=majority`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('MongoDB is connected!')
    } catch (error) {
      console.dir
      throw error
    }
  }

  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }

  get rftk(): Collection<RefreshToken> {
    return this.db.collection(process.env.DB_RFTK_COLLECTION as string)
  }
}

// Create object from class
const databaseService = new DatabaseService()

export default databaseService
