import mongoose, {Schema} from "mongoose"

const subscriptionSchema=new Schema({
    sunscriber:{
        type:Schema.Types.ObjectId,  //one who is sucribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId, //"who is subscriber"
        ref:"User"
    }
},{timestamps:"true"})

export const Subscription =mongoose.model("Subscription",subscriptionSchema)