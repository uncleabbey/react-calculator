import React, {useState, useEffect} from 'react'

const Test = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
   fetch("https://rest-nice-api.herokuapp.com/customer/all", {
  "method": "GET",
  "headers": {}
})
.then(res => res.json())
.then(data => {
  console.log(data);
  setUser(data)
})
.catch(err => {
  console.log(err);
});
  }, [])
  return (
    <div>
      {user.map(({_id, name, email}) => {
        return (
        <div key={_id}>
            <p>{name}: {email}</p>
        </div>)
      })}
    </div>
  )
}

export default Test
