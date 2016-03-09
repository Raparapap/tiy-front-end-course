Fix ReferenceError: askForAddress error:

deliverProduct();

function deliverProduct() {
  var address = askForAddress();
}

function takeOrder() {
  function askForAddress() {
    var address = {
      houseNumber: '20',
      street: 'Bond Street',
      city: 'London',
      country: 'United Kingdom'
    };

    return address;
  }
}


SOLUTION: 
              deliverProduct();

              function deliverProduct() {
                var address = takeOrder();
                return address;
              }

              function takeOrder() {
                  var address = {
                    houseNumber: '20',
                    street: 'Bond Street',
                    city: 'London',
                    country: 'United Kingdom'
                  };

                  return address;
                }


              console.log(deliverProduct());
