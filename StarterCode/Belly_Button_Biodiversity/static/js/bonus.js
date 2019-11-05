  // @TODO: Build a guage Chart
  var url = "/samples/" + sample;
    
  d3.json(url).then(function(response) {
    var otu_ids = response.otu_ids;
    var sample_values = response.sample_values;
    var otu_labels = response.otu_labels;
    console.log(response);
    
    
    fig = go.Figure(go.Indicator(
    mode = "gauge+number",
    value = 270,
    domain = {'x': [0, 1], 'y': [0, 1]},
    title = {'text': "Speed"}))

        fig.show()

