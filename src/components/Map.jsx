
const Map = ({data}) => {
  return (
    <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125052.35569523928!2d${data.location.lon}4!3d${data.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1720585275623!5m2!1ses-419!2spe`}
      width="350"
      height="350"
      allowFullScreen=""
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

  )
}

export default Map