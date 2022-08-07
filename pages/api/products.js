// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      products:
      [
        {
          "id": 1,
          "name": "Sun",
          "price": 9999999999999,
          "image": "sun"
        },
        {
          "id": 2,
          "name": "Mercury",
          "price": 500000,
          "image": "mercury"
        },
        {
          "id": 3,
          "name": "Venus",
          "price": 500000.00,
          "image": "venus"
        },
        {
          "id": 4,
          "name": "Earth",
          "price": 7500000000,
          "image": "earth"
        },
        {
          "id": 5,
          "name": "Mars",
          "price": 3000000000,
          "image": "mars"
        },
        {
          "id": 6,
          "name": "Jupiter",
          "price": 3000000000,
          "image": "jupiter"
        },
        {
          "id": 7,
          "name": "Saturn",
          "price": 500000.00,
          "image": "saturn"
        },
        {
          "id": 8,
          "name": "Uranus",
          "price": 500000.00,
          "image": "uranus"
        },
        {
          "id": 9,
          "name": "Neptune",
          "price": 500000.00,
          "image": "neptune"
        },
        {
          "id": 10,
          "name": "Moon",
          "price": 500000.00,
          "image": "moon"
        },
      ]
    }
  )
}
