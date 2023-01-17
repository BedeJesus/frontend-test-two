export default async (req, res) => {

  const result = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const json = await result.json()

  res.status(200).json({
    comments: json
  })


}
