/* eslint-disable no-undef */
const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '9G56ICKP8M',
  '78901e81a81e9111fc4b70ebe3c103a0'
);

const search = instantsearch({
  indexName: 'dev_poc',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search condition or disease...',
    searchAsYouType: true,
    showReset: true,
    showSubmit: true,
    showLoadingIndicator: true,
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div class="results">
        <!--  <img src="{{image}}" align="left" alt="{{name}}" /> -->
          <div class="column">
            <h2 class="data-point"><a class="data-point" href="https://sanguinebio.com/research-area/autoimmune-and-inflammatory/" target="_blank"> {{condition}} </a> </h2> <p class="label"><i class="fas fa-notes-medical"></i> Condition </p> 
            <!--  <h2> {{#helpers.highlight}}{ "attribute": "condition"}{{/helpers.highlight}} </h2> <p class="label"><i class="fas fa-notes-medical"></i>Patient Condition </p> -->
          </div>
          <div class="column">
            <h2 class="data-point"> {{no_of_patients}} </h2> <p class="label"><i class="fas fa-users"></i> Patient Community </p> 
          </div>  
          <div class="column">
            <h2 class="data-point"> {{no_of_studies}} </h2> <p class="label"><i class="fas fa-vial"></i> Unique Studies </p> 
          </div>
          </div> 
          <div class="hit-description">
          </div>
      `,
    },
  }),
]);

search.start();

// $('.ais-SearchBox-submit').click(() => {
//   $('#hits').show('slow');
// });

// To-Do: add auto complete in search box
// Add images
// Add CTA button
