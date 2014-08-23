ffServices.factory('Rankings', function(){
    var formats = [ {label: 'Standard', value: 'standard'},
                    {label: 'PPR', value: 'ppr'},
                    {label: '0.5 PPR', value: 'half'} ];

    var positions = ['RB', 'WR', 'QB', 'TE'];

    return {
      formats: formats,
      positions: positions
    };
  });
