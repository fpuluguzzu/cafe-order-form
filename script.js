

$(document).ready(function () {
    $('#orderButton').click(function () {

        let customerName = $('input[name=customer_name]').val();
        let coffeeType = $('input[name=coffee_type]:checked').val();
        let extras = [];
        $('input[name=extras]:checked').each(function () {
            extras.push($(this).val());

        });

        //console.log(customerName, coffeeType, extras);

        let total_cost = 0

        //add cost of coffee type
        if (coffeeType === 'turkish') {
            total_cost = total_cost + 3;
        } else if (coffeeType === 'american') {
            total_cost += 5;
        } else if (coffeeType === 'ice_latte') {
            total_cost += 7;
        }

        // add cost of extras
        for (let i = 0; i < extras.length; i++) {
            let extraItem = extras[i];

            if (extraItem === 'extra_coffee') {
                total_cost += 1.5;
            } else if (extraItem === 'whipped_cream') {
                total_cost += 2;
            } else if (extraItem === 'extra_caramel') {
                total_cost += 3;

            }
        }

        // Create Order Summary

        let summary = `Customer name = ${customerName} <br> Total cost = $${total_cost}`;


        // Display summary
        $('#summary').html(summary);
    });
});



