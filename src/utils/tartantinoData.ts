type DataTypes = {
  primary: string;
  secondary: number;
};

type SeriesTypes = {
  label: string;
  data: DataTypes[];
};

const deathCount: SeriesTypes[] = [
  {
    label: "Deaths",
    data: [
      {
        primary: "Reservoir Dogs",
        secondary: 11
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Pulp Fiction",
        secondary: 7
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Jackie Brown",
        secondary: 4
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Kill Bill Vol. 1",
        secondary: 62
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Kill Bill Vol. 2",
        secondary: 13
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Death Proof",
        secondary: 6
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Inglorious Basterds",
        secondary: 396
      }
    ]
  },
  {
    label: "Deaths",
    data: [
      {
        primary: "Django Unchained",
        secondary: 64
      }
    ]
  }
];

const shareOfCharacters: SeriesTypes[] = [
  {
    label: "Women",
    data: [
      {
        primary: "Once Upon a Time in Hollywood",
        secondary: 45
      },
      {
        primary: "The Hateful Eight",
        secondary: 23
      },
      {
        primary: "Django Unchained",
        secondary: 35
      },
      {
        primary: "Inglorious Basterds",
        secondary: 20
      },
      {
        primary: "Death Proof",
        secondary: 62
      },
      {
        primary: "Kill Bill Vol. 1",
        secondary: 58
      },
      {
        primary: "Kill Bill Vol. 2",
        secondary: 37
      },
      {
        primary: "Jackie Brown",
        secondary: 58
      },
      {
        primary: "Pulp Fiction",
        secondary: 38
      },
      {
        primary: "Reservoir Dogs",
        secondary: 18
      }
    ]
  },
  {
    label: "Men",
    data: [
      {
        primary: "Once Upon a Time in Hollywood",
        secondary: 55
      },
      {
        primary: "The Hateful Eight",
        secondary: 77
      },
      {
        primary: "Django Unchained",
        secondary: 65
      },
      {
        primary: "Inglorious Basterds",
        secondary: 80
      },
      {
        primary: "Death Proof",
        secondary: 38
      },
      {
        primary: "Kill Bill Vol. 1",
        secondary: 42
      },
      {
        primary: "Kill Bill Vol. 2",
        secondary: 63
      },
      {
        primary: "Jackie Brown",
        secondary: 42
      },
      {
        primary: "Pulp Fiction",
        secondary: 62
      },
      {
        primary: "Reservoir Dogs",
        secondary: 82
      }
    ]
  }
];

const cursedWords: SeriesTypes[] = [
  {
    label: "Fucks",
    data: [
      {
        primary: "Reservoir Dogs",
        secondary: 75
      },
      {
        primary: "Pulp Fiction",
        secondary: 55
      },
      {
        primary: "Jackie Brown",
        secondary: 50
      },
      {
        primary: "Kill Bill Vol. 1",
        secondary: 40
      },
      {
        primary: "Kill Bill Vol. 2",
        secondary: 40
      },
      {
        primary: "Inglorious Basterds",
        secondary: 40
      }
    ]
  },
  {
    label: "Shits",
    data: [
      {
        primary: "Reservoir Dogs",
        secondary: 12.5
      },
      {
        primary: "Pulp Fiction",
        secondary: 17
      },
      {
        primary: "Jackie Brown",
        secondary: 20
      },
      {
        primary: "Kill Bill Vol. 1",
        secondary: 20
      },
      {
        primary: "Kill Bill Vol. 2",
        secondary: 10
      },
      {
        primary: "Inglorious Basterds",
        secondary: 5
      }
    ]
  },
  {
    label: "PG-13",
    data: [
      {
        primary: "Reservoir Dogs",
        secondary: 12.5
      },
      {
        primary: "Pulp Fiction",
        secondary: 28
      },
      {
        primary: "Jackie Brown",
        secondary: 30
      },
      {
        primary: "Kill Bill Vol. 1",
        secondary: 40
      },
      {
        primary: "Kill Bill Vol. 2",
        secondary: 50
      },
      {
        primary: "Inglorious Basterds",
        secondary: 55
      }
    ]
  }
];

const moviesRank: SeriesTypes[] = [
  {
    label: "IMDB",
    data: [
      {
        primary: "Reservoir Dogs (1992)",
        secondary: 8.3
      },
      {
        primary: "Pulp Fiction (1994)",
        secondary: 8.3
      },
      {
        primary: "Jackie Brown (1997)",
        secondary: 7.5
      },
      {
        primary: "Kill Bill Vol. 1 (2003)",
        secondary: 7.5
      },
      {
        primary: "Kill Bill Vol. 2 (2004)",
        secondary: 8
      },
      {
        primary: "Death Proof (2007)",
        secondary: 7
      },
      {
        primary: "Inglorious Baterds (2009)",
        secondary: 8.3
      },
      {
        primary: "Django Unchained (2012)",
        secondary: 8.4
      },
      {
        primary: "The Hateful Eight (2015)",
        secondary: 7.8
      },
      {
        primary: "Once Upon a Time in Hollywood (2019)",
        secondary: 7.6
      }
    ]
  },
  {
    label: "Rotten Tomatoes",
    data: [
      {
        primary: "Reservoir Dogs (1992)",
        secondary: 9
      },
      {
        primary: "Pulp Fiction (1994)",
        secondary: 9.2
      },
      {
        primary: "Jackie Brown (1997)",
        secondary: 8.7
      },
      {
        primary: "Kill Bill Vol. 1 (2003)",
        secondary: 8.5
      },
      {
        primary: "Kill Bill Vol. 2 (2004)",
        secondary: 8.4
      },
      {
        primary: "Death Proof (2007)",
        secondary: 6.6
      },
      {
        primary: "Inglorious Baterds (2009)",
        secondary: 8.9
      },
      {
        primary: "Django Unchained (2012)",
        secondary: 8.7
      },
      {
        primary: "The Hateful Eight (2015)",
        secondary: 7.4
      },
      {
        primary: "Once Upon a Time in Hollywood (2019)",
        secondary: 8.5
      }
    ]
  }
];

export { deathCount, shareOfCharacters, cursedWords, moviesRank };
