function handleCostKeydown(event) {
        if (event.key === 'Enter') {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value);

        if (cost < 601) {
          cost = cost * 0;
        } else if (cost < 1651) {
          cost = cost * 10/100 - 60;
        } else if (cost < 3201) {
          cost = cost * 15/100 - 142.5;
        } else if (cost < 5251) {
          cost = cost * 20/100 - 302.5;
        } else if (cost < 7801) {
          cost = cost * 25/100 - 565;
        } else if (cost < 10901) {
          cost = cost * 30/100 - 955;
        } else if (cost > 10900) {
          cost = cost * 35/100 - 1500;
        }

        document.querySelector('.js-total-cost')
          .innerHTML = `Income Tax: ${cost}.00 Birr`

      
          const inputPention = document.querySelector('.js-cost-input');
          let pention = Number(inputPention.value);

          if (pention < 601) {
            pention = pention * 0;
          } else if (pention > 601) {
            pention = pention * 7/100;
          }

          document.querySelector('.js-total-pention')
            .innerHTML = `Pention: ${pention}.00 Birr`

        const inputTotal = document.querySelector('.js-cost-input');
        let total = cost + pention;
          document.querySelector('.js-total-payment')
            .innerHTML = `Total: ${total}.00 Birr`
        }