import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
    IGN: {
        type: mongoose.Schema.Types.String, // In-game name of the player
        required: true,
    },
    UID: {
        type: mongoose.Schema.Types.String, // Unique Identifier for the player
        required: true,
        unique: true,
    },
    country: {
        type: mongoose.Schema.Types.String, // Country of the player
        required: true,
    },
    device: {
        type: mongoose.Schema.Types.String, // Device the player uses (e.g., PC, Mobile)
       
    },
    gender: {
        type: mongoose.Schema.Types.String, // Gender of the player
         
    },
    teamName: {
        type: mongoose.Schema.Types.String, // The name of the team the player is part of
        required: true,
    },
    game: {
        type: mongoose.Schema.Types.String, //Game Category
        required: true,
    }
});

export const Player = mongoose.model('Player', PlayerSchema);
