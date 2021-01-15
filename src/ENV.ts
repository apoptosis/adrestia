export const ENV = {
    prefixes: ["<@798607454819581962> ", "a! "],
    statuses: {
        arr:   ["a! help"],
        delay: 15000
    },
	//            ldle                 zulu                 yangneo
    admins:    [ `127697568166576128`,`293462954240638977`,`768920646750306354`],
    reactions: {
        upvote:   [`799244567584964608`],
        downvote: [`799244812435849267`]
    },
    reactionMap: {
        MESSAGE_REACTION_ADD:    +1,
        MESSAGE_REACTION_REMOVE: -1
    }
}

interface ENV {
    prefixes: Array<String>,
    statuses: {
        arr:   Array<String>,
        delay: Number
    },
    admins:   Array<String>,
    reactions: {
        upvote:   Array<String>,
        downvote: Array<String>
    }
}