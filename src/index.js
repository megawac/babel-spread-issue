export default function({types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        let { node } = path;
        if (node.callee.name === 'foo') {
          node.callee = t.identifier('foo');
        }
        console.log(node.arguments);
      }
    }
  };
}
