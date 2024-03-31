


// JavaScript functions for filtering  
// function change() {
//     var destination = document.querySelectorAll(".list_destination input[type='checkbox']:checked");
//     var filters = {
//         destinations: getClassofCheckedCheckboxes(destination),
//     };
//     filterResults(filters);
// }

// function getClassofCheckedCheckboxes(checkbox) {
//     var classes = [];
//     if (checkbox && checkbox.length > 0) {
//         for (var i = 0; i < checkbox.length; i++) {
//             var cb = checkbox[i];
//             classes.push(cb.parentNode.parentNode.textContent.trim());
//         }
//     }
//     return classes;
// }

// function filterResults(filters) {
//     var images = document.querySelectorAll(".filtered_images > div");
//     images.forEach(function(image) {
//         var isVisible = false;
//         filters.destinations.forEach(function(destination) {
//             if (image.id.toLowerCase().includes(destination.toLowerCase())) {
//                 isVisible = true;
//             }
//         });
//         image.style.display = isVisible ? "block" : "none";
//     });
// }



// Search Bar


// function searchDestinations() {
//     var input, filter, destinations, li, a, txtValue;

//     input = document.querySelector('.search_text');
//     filter = input.value.toUpperCase();

//     destinations = document.querySelectorAll('.list_destination li');

 
//     destinations.forEach(function(destination) {
//         a = destination.querySelector('a'); 
//         txtValue = a.textContent || a.innerText;
        
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             destination.style.display = '';
//         } else {
//             destination.style.display = 'none';
//         }
//     });
// }




// function searchDestinations() {
    // Get the input value and convert it to lowercase
//     var input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get the list of destinations
//     var destinations = document.querySelectorAll('.list_destination li');
    
    // Loop through each destination
//     destinations.forEach(function(destination) {
//         var label = destination.innerText.toLowerCase();
        
        // Check if the input matches the destination label
//         if (label.includes(input)) {
//             destination.style.display = 'block'; // Show the destination
//         } else {
//             destination.style.display = 'none'; // Hide the destination
//         }
//     });
// }


// function searchDestinations() {
    // Get the input value and convert it to lowercase
//     var query = document.getElementById('searchInput').value.toLowerCase();
    
    // Get the list of destination checkboxes
//     var checkboxes = document.querySelectorAll('.list_destination .checkbox');
    
    // Loop through each checkbox
//     checkboxes.forEach(function(checkbox) {
//         var label = checkbox.value.toLowerCase(); // Get the destination label
        
        // Check if the input matches the destination label
//         if (label.includes(query)) {
//             checkbox.parentNode.style.display = 'block'; // Show the checkbox label
//         } else {
//             checkbox.parentNode.style.display = 'none'; // Hide the checkbox label
//         }
//     });
// }

// const filterTitle = document.querySelectorAll('.destination_filters');
// const allDestinations= documents.querySelectorAll('.all');

// for(let i =0; i<categoryTitle.length; i++){
//     filterTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
// }

// function filterPosts(item){
//     changeActivePosition(item);
//     for(let i = 0; i<allDestinations.length;i++){
//         if(allDestinations[i].classList.contains(item.attribute.id.value)){
//             allDestinations[i].style.display="block";
//         }
//         else{
//             allDestinations[i].style.display="none";
//         }
//     }
// }

// function changeActivePosition(activeItem){
//     for(let i=0;i<filterTitle.length;i++){
//         filterTitle[i].classList.remove('active');
//     }
//     activeItem.classList.add('active');
// };



function filterImages() {
    var checkboxes = document.querySelectorAll('.destination_checkbox');
    var checkedValues = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    });

    var images = document.querySelectorAll('.filtered_images > div');
    if (checkedValues.length === 0) {
        images.forEach(function(image) {
            image.style.display = 'block';
        });
    } else {
        images.forEach(function(image) {
            if (checkedValues.includes(image.id)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }
}