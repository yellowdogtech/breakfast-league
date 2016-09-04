import { Owner } from '../models/owner';

export class DataService {
    // owners:  Owner[] = Owner[
    //     {
    //         id: 1,
    //         name: "Travis",
    //         teams: [
    //             {
    //                 id: 1,
    //                 name: "Pittsburgh Steelers",
    //                 pick: 1,
    //                 vegas: 10.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 2,
    //                 name: "Green Bay Packers",
    //                 pick: 2,
    //                 vegas: 10.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 3,
    //                 name: "Jacksonville Jaguars",
    //                 pick: 3,
    //                 vegas: 7.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 4,
    //                 name: "Atlanta Falcons",
    //                 pick: 4,
    //                 vegas: 7.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 5,
    //                 name: "Indianapolis Colts",
    //                 pick: 5,
    //                 vegas: 9.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 6,
    //                 name: "N.Y. Jets",
    //                 pick: 6,
    //                 vegas: 8,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 7,
    //                 name: "N.Y. Giants",
    //                 pick: 7,
    //                 vegas: 8,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 8,
    //                 name: "New Orleans Saints",
    //                 pick: 8,
    //                 vegas: 7,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 9,
    //                 name: "Miami Dolphins",
    //                 pick: 9,
    //                 vegas: 7,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 10,
    //                 name: "L.A. Rams",
    //                 pick: 10,
    //                 vegas: 7,
    //                 wins: 7.5,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "Boortz",
    //         teams: [
    //             {
    //                 id: 11,
    //                 name: "Arizona Cardinals",
    //                 pick: 1,
    //                 vegas: 9.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 12,
    //                 name: "New England Patriots",
    //                 pick: 2,
    //                 vegas: 10.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 13,
    //                 name: "Minnesota Vikings",
    //                 pick: 3,
    //                 vegas: 9.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 14,
    //                 name: "Denver Broncos",
    //                 pick: 4,
    //                 vegas: 9,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 15,
    //                 name: "Washington Redskins",
    //                 pick: 5,
    //                 vegas: 7.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 16,
    //                 name: "Houston Texans",
    //                 pick: 6,
    //                 vegas: 8.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 17,
    //                 name: "Detroit Lions",
    //                 pick: 7,
    //                 vegas: 7.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 18,
    //                 name: "San Diego Chargers",
    //                 pick: 8,
    //                 vegas: 7,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 19,
    //                 name: "Miami Dolphins",
    //                 pick: 9,
    //                 vegas: 7,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 20,
    //                 name: "Chicago Bears",
    //                 pick: 10,
    //                 vegas: 7.5,
    //                 wins: 7.5,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             }
    //         ]
    //     },
    //     {
    //         id: 3,
    //         name: "DB",
    //         teams: [
    //             {
    //                 id: 21,
    //                 name: "Seattle Seahawks",
    //                 pick: 1,
    //                 vegas: 10.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 22,
    //                 name: "Carolina Panthers",
    //                 pick: 2,
    //                 vegas: 10.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 23,
    //                 name: "Kansas City Chiefs",
    //                 pick: 3,
    //                 vegas: 9.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 24,
    //                 name: "Oakland Raiders",
    //                 pick: 4,
    //                 vegas: 8.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 25,
    //                 name: "Dallas Cowboys",
    //                 pick: 5,
    //                 vegas: 9.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 26,
    //                 name: "Tampa Bay Bucaneers",
    //                 pick: 6,
    //                 vegas: 7.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 27,
    //                 name: "Baltimore Ravens",
    //                 pick: 7,
    //                 vegas: 8.5,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 28,
    //                 name: "Buffalo Bills",
    //                 pick: 8,
    //                 vegas: 8,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 29,
    //                 name: "Philadelphia Eagles",
    //                 pick: 9,
    //                 vegas: 7,
    //                 wins: 0,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             },
    //             {
    //                 id: 30,
    //                 name: "Tenessee Titans",
    //                 pick: 10,
    //                 vegas: 7.5,
    //                 wins: 5.5,
    //                 playoff_wins: 0,
    //                 conference_wins: 0,
    //                 superbowl_wins: 0
    //             }
    //         ]
    //     }
    // ]
}
