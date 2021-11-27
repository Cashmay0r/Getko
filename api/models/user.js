import {
  model,
  Schema,
  models
} from 'mongoose'

let userSchema = new Schema({
  first_name: {
    type: String,
    default: null
  },
  last_name: {
    type: String,
    default: null
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  token: {
    type: String
  }
})

export default models['user'] || model('user', userSchema)
