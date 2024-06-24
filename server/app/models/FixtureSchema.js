import mongoose from "mongoose";

const FixturesSchema = new mongoose.Schema({
  fixture: {
    id: {
      type: Number,
      required: true,
    },
    referee: {
      type: String,
      required: false,
      default: null,
    },
    timezone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    },
    periods: {
      first: {
        type: Number,
        required: false,
        default: null,
      },
      second: {
        type: Number,
        required: false,
        default: null,
      },
    },
    venue: {
      id: {
        type: Number,
        required: false,
        default: null,
      },
      name: {
        type: String,
        required: false,
        default: null,
      },
      city: {
        type: String,
        required: false,
        default: null,
      },
    },
    status: {
      long: {
        type: String,
        required: true,
      },
      short: {
        type: String,
        required: true,
      },
      elapsed: {
        type: Number,
        required: false,
        default: null,
      },
    },
  },
  league: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    round: {
      type: String,
      required: true,
    },
  },
  teams: {
    home: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      logo: {
        type: String,
        required: true,
      },
      winner: {
        type: Boolean,
        required: false,
        default: null,
      },
    },
    away: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      logo: {
        type: String,
        required: true,
      },
      winner: {
        type: Boolean,
        required: false,
        default: null,
      },
    },
  },
  goals: {
    home: {
      type: Number,
      required: false,
      default: null,
    },
    away: {
      type: Number,
      required: false,
      default: null,
    },
  },
  score: {
    halftime: {
      home: {
        type: Number,
        required: false,
        default: null,
      },
      away: {
        type: Number,
        required: false,
        default: null,
      },
    },
    fulltime: {
      home: {
        type: Number,
        required: false,
        default: null,
      },
      away: {
        type: Number,
        required: false,
        default: null,
      },
    },
    extratime: {
      home: {
        type: Number,
        required: false,
        default: null,
      },
      away: {
        type: Number,
        required: false,
        default: null,
      },
    },
    penalty: {
      home: {
        type: Number,
        required: false,
        default: null,
      },
      away: {
        type: Number,
        required: false,
        default: null,
      },
    },
  },
});

export default mongoose.model("Fixtures", FixturesSchema);
