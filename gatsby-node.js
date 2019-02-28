// exports.onCreateNode = ({
//     node,
//     getNode,
//     loadNodeContent,
//     actions,
//   }) => {
//     const { frontmatter } = node
//     if (frontmatter) {
//       const { image } = frontmatter
//       if (image) {
//         if (image.indexOf('/image') === 0) {
//           frontmatter.thumbnail = path.relative(
//             path.dirname(node.fileAbsolutePath),
//             path.join(__dirname, '/static/', image)
//           )
//         }
//       }
//     }
//   }