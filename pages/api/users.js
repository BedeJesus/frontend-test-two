export default async (req, res) => {

  const result = await fetch(`https://random-data-api.com/api/v2/users?size=50`)
  const json = await result.json()

  res.status(200).json({
    users: json
  })


}
