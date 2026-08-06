function handleCostKeydown(event) {
        if (event.key === 'Enter') {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value);

        if (cost > 1) {
          cost = cost * 15/100;
        } 

        document.querySelector('.js-total-cost')
          .innerHTML = `ETB: ${cost}.00 Birr`
      }