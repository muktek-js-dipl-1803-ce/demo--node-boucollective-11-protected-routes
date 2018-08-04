
const vendorSeedData = [
  { name: 'Peridot', premium_user: true, image_link: 'http://www.creativehunt.co/wp-content/uploads/2016/02/Church.png', year_established: 2014},
  { name: 'St. John Knits', premium_user: false, image_link: 'http://www.creativehunt.co/wp-content/uploads/2016/02/Submarine.png', year_established: 2000 },
  { name: 'Wild Bloom', premium_user: false, image_link: 'http://www.creativehunt.co/wp-content/uploads/2016/02/Tornado-Simple.png', year_established: 1983}
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors').del()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert(vendorSeedData);
    });
};
