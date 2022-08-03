// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
  {
    "id": 1,
    "name": "Sun",
    "price": 1000000,
    "image": "sun"
  },
*/
export default function handler(req, res) {
  res.status(200).json(
    {
      planets:
      [
        {
          "id": 2,
          "name": "Earth",
          "price": 500000,
          "image": "earth"
        },
        {
          "id": 3,
          "name": "Mars",
          "price": 500000,
          "image": "mars"
        },
        {
          "id": 4,
          "name": "Mercury",
          "price": 500000,
          "image": "mercury"
        },
        {
          "id": 5,
          "name": "Neptune",
          "price": 500000,
          "image": "neptune"
        },
        {
          "id": 6,
          "name": "Saturn",
          "price": 500000,
          "image": "saturn"
        },
        {
          "id": 7,
          "name": "Uranus",
          "price": 500000,
          "image": "uranus"
        },
        {
          "id": 8,
          "name": "Venus",
          "price": 500000,
          "image": "venus"
        },
        {
          "id": 9,
          "name": "Moon",
          "price": 500000,
          "image": "moon"
        },
      ]
    }
  )
}
