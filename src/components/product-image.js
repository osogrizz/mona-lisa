// import React from 'react'
// import PropTypes from 'prop-types'
// import Img from 'gatsby-image'

// const ProductImage = ({ imageInfo }) => {
//   // const imageStyle = { borderRadius: '5px' }
//   const { alt='', childImageSharp, image } = imageInfo

//   if (!!image && !!image.childImageSharp) {
//     return (
//       <Img fluid={image.childImageSharp.fluid} alt={alt} />
//     )
//   }

//   if (!!childImageSharp) {
//     return <Img fluid={childImageSharp.fluid} alt={alt} />
//   }

//   if (!!image && typeof image === 'string')
//     return <img src={image}  />

//   return null
// }

// ProductImage.propTypes = {
//   imageInfo: PropTypes.shape({
//     // alt: PropTypes.string,
//     childImageSharp: PropTypes.object,
//     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
//     style: PropTypes.object,
//   }).isRequired,
// }

// export default ProductImage