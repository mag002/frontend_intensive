function generateAutoComplete(id, settings) {
    const countryData = [
        {
            "id": 0,
            "label": "Australia",
            "value": "australia"
        },
        {
            "id": 1,
            "label": "Austria",
            "value": "austria"
        },
        {
            "id": 2,
            "label": "Cambodia",
            "value": "cambodia"
        },
        {
            "id": 3,
            "label": "UK",
            "value": "uk"
        },
        {
            "id": 4,
            "label": "Vietnam",
            "value": "vietnam"
        }
    ]
    let selectedItems = [];


    $(id).append(`
             <div class="auto-complete">
                <div class="search-container">
                    <div class="selected-items">
                    </div>
                    <input type="text" value="" />
                </div>
                <div class="results">
                    <ul>

                    </ul>
                </div>
            </div>
                `)
    // VARIABLE
    let userInput = '';

    const resultsHTML = $(id + ' .results');
    const selectedItemsHTML = $(id + ' .selected-items')
    const resultsContainerHTML = $(id + ' .results ul');
    // First time
    generateResultsList(countryData);
    resultsHTML.hide();

    // FUNCTION DECLARATION

    function generateItem({ label, id }) {
        return `
                <div class="selected-item" data-id=${id}>
                    ${label}
                    <button class="delete-item">
                        <svg class="CK__Icon--medium Pill__FatCross-sc-eiw3o3-0 hQjktV" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.854 2.854a.5.5 0 0 0-.708-.708L8 7.293 2.854 2.146a.5.5 0 0 0-.708.708L7.293 8l-5.147 5.146a.5.5 0 0 0 .708.708L8 8.707l5.146 5.147a.5.5 0 0 0 .708-.708L8.707 8l5.147-5.146Z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </div> 
                `
    }
    function generateSelectedItem() {
        if (!settings.multiple) {

            return;
        }
        selectedItemsHTML.html("")
        selectedItems.forEach(selectedItem => { //id,1,2,3,4
            const selectedCountry = countryData.find(item => item.id == selectedItem); // {id:1,label:'',value:''}
            console.log('selectedCountry', selectedCountry)
            const itemHTML = generateItem(selectedCountry);
            selectedItemsHTML.append(itemHTML)
        })
        $(id + ' .selected-items .delete-item').on('click', function (e) {
            const deleteItemId = $(this).parent().data('id');
            selectedItems = selectedItems.filter(id => id != deleteItemId);
            generateSelectedItem();
            rerenderResultList();
        })
        // $('close icon').click....
    }

    function rerenderResultList() {
        const filteredData = countryData.filter(({ id, label }) => label.toLowerCase().includes(userInput.toLowerCase()) && !selectedItems.includes(id))
        // Clear current suggestions
        resultsContainerHTML.html("");
        // Generate new results
        generateResultsList(filteredData);
        console.log('resultsHTML', resultsHTML)

    }
    function generateResultsList(data) {
        console.log("RUN generateResultsList", countryData)
        if (!data.length) { // data.length === 0
            resultsContainerHTML.append(`<li>No result found</li>`);
            return;
        }
        data.forEach(dataItem => {
            let itemLabel = dataItem.label;
            if (userInput) {
                const userRegex = new RegExp(userInput, "i");
                const index = itemLabel.toLowerCase().indexOf(userInput.toLowerCase())
                const length = userInput.length;
                itemLabel = itemLabel.replace(userRegex, `<b>${itemLabel.slice(index, index + length)}</b>`)
            }
            const listItem = `<li data-id="${dataItem.id}">${itemLabel}</li>`; // <li> Australia </li> === 'aus'
            resultsContainerHTML.append(listItem)
        });
        $(id + ' .results li').on('click', function (event) {
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            selectedItems.push($(this).data('id'));
            userInput = "";
            $(id + ' .auto-complete input').val("");

            generateSelectedItem();
            resultsHTML.hide();
            if (!settings.multiple) {
                settings.onClick($(this).data('id'))

            }
            // rerenderResultList()
        })
    }

    $(id + ' .auto-complete input').on('keyup', function (e) {

        userInput = e.target.value;
        if (userInput.length >= 1) {
            // Filter data with current Input
            // Start with/ Endwith
            // rule:ANY
            // Destructuring
            rerenderResultList();

            // search handling logic
            // "Australia".toLowerCase().includes("AUS".toLowerCase())
            // regex
            //
            resultsHTML.show();

        } else {
            resultsHTML.hide();

        }
    })

}