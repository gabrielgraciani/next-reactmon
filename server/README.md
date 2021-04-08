# Reactmon API

* [Request & Response Examples](#request--response-examples)

## Request & Response Examples

### API Resources

  - [GET /pokemons](#get-pokemons)
  - [GET /pokemons/[id]](#get-pokemonsid)
  - [POST /pokemons](#post-pokemons)

### GET /pokemons

Example: http://localhost:3333/pokemons

Response body:

    [
      {
        "id": "1a915b26-ab88-429f-9570-7f9bffb5ec35",
        "name": "Aerodactyl",
        "weight": "59.0",
        "height": "1.80",
        "main_type": "Rock",
        "types": [
          "Rock",
          "Flying"
        ],
        "weakness": [
          "Water",
          "Electric",
          "Ice",
          "Rock",
          "Steel"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
      {
        "id": "0d64d682-8fa9-4375-986e-0b924cff662f",
        "name": "Alakazam",
        "weight": "48.0",
        "height": "1.50",
        "main_type": "Psychic",
        "types": [
          "Psychic"
        ],
        "weakness": [
          "Bug",
          "Ghost",
          "Dark"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
      {
        "id": "727cb4d8-7c9f-49a4-a32a-0357015ec017",
        "name": "Arbok",
        "weight": "65.0",
        "height": "3.51",
        "main_type": "Poison",
        "types": [
          "Poison"
        ],
        "weakness": [
          "Ground",
          "Psychic"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
      {
        "id": "deff5614-0dd9-4e07-b464-0294b07a6e38",
        "name": "Arcanine",
        "weight": "155.0",
        "height": "1.91",
        "main_type": "Fire",
        "types": [
          "Fire"
        ],
        "weakness": [
          "Water",
          "Ground",
          "Rock"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
    ]

### GET /pokemons/[id]

Example: http://localhost:3333/pokemons/1a915b26-ab88-429f-9570-7f9bffb5ec35

Response body:

    {
      "id": "1a915b26-ab88-429f-9570-7f9bffb5ec35",
      "name": "Aerodactyl",
      "weight": "59.0",
      "height": "1.80",
      "main_type": "Rock",
      "types": [
        "Rock",
        "Flying"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Ice",
        "Rock",
        "Steel"
      ],
      "image": null,
      "created_at": "2021-04-08T19:47:02.983Z"
    },



### POST /pokemons

Example: Create – POST  http://localhost:3333/pokemons/

Request body:

    [
        {
            "name": "Abra",
            "weight": "30",
            "height": "0.8",
            "types": "['Psychic']",
            "weakness": "['Bug', 'Ghost', 'Dark']",
            "image": FILE TYPE,
        }
    ] 