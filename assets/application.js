// initialize your js when the document is ready

$(document).ready(function() {

    $(document).on('change', '#variant-id', function() {
        // write a function to get the active value of the selected box
        let 
            variant_id = this.value, // get the selected image id
            variant_image = $('.single-product-image[data-variant="' + variant_id + '"]');  // grabs the div with the specific class that has the selected variant id

        variant_image.show().siblings(':visible').hide(); // show selected image and hide any active visible sibling images
    })

});