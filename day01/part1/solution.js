module.exports = input => input
  .reduceRight((acc, next) => [ acc[ 0 ] + (acc[ 1 ] === next ? next : 0), next ], [ 0, input[ 0 ] ])
  .shift();
