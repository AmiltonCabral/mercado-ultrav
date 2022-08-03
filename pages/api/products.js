// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      planets:
      [
        {
          "id": 1,
          "name": "Sun",
          "price": 1000000
        },
        {
          "id": 2,
          "name": "Earth",
          "price": 500000
        },
        {
          "id": 3,
          "name": "Earth",
          "price": 500000
        },
        {
          "id": 4,
          "name": "Earth",
          "price": 500000
        },
        {
          "id": 5,
          "name": "Earth",
          "price": 500000
        },
      ]
    }
  )
}
