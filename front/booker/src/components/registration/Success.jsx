const Success = ({values}) => {
  return (
    <div className="confirmation-container">
      <h2>You successfully sent request for registration as {values.type} on The Booker!</h2>
      <p>Wait for administrator to approve your request and you are ready to go!</p>
    </div>
  )
}

export default Success