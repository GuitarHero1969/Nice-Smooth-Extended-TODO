
$(document).ready(function(){

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
    
        var name = document.getElementById("txtName").value;
        var idElement = 'btnPrepend';
        var idRemove = 'liRemove';
        var idDoSomthing = 'liShowModal';

        var html = `
            <ul>
                <li>${name}</li>
                <li><span id="${idRemove}"><i class="fa fa-trash"></i></span><span id="${idDoSomthing}"><i class='fa fa-angle-right'></i></span>Go To Potions Class</li>
            </ul>
            <input type="button" value="Prepend" id="${idElement}" />
        `;
        // insert html into DOM 
        insertHTML('form', html);

        // add event listener(s) after insert 
        addEvent(idElement);
        addEvent2(idRemove);
        addEvent3(idDoSomthing);
    });
    
    const insertHTML = (tag = 'form', html, position = 'afterend', index = 0) => {
        document.getElementsByTagName(tag)[index].insertAdjacentHTML(position, html);
    }
    
    const addEvent = (id, event = 'click') => {
        document.getElementById(id).addEventListener(event, function() {

            var idLI = 'prependedDataLi';

            insertHTML('ul', `<li id="${idLI}">Text added with Element.insertAdjacentHTML()</li>`, 'afterbegin');
            addNestedEvent(idLI);

            // insertHTML('ul', '<li>Prepending data</li>', 'afterbegin');
        });

        const addNestedEvent = (id, event = 'click') => {
            document.getElementById(id).addEventListener(event, function(ev) {
                console.log('Prepended data was clicked! ');
                ev.stopPropagation();
            })
        }
    }

    const addEvent2 = (id, event = 'click') => {
        document.getElementById(id).addEventListener(event, function(ev) {

            $(this).parent().fadeOut(500, function() {
                $(this).remove();
            });
            ev.stopPropagation();
        });
    }

    const addEvent3 = (id, event = 'click') => {
        document.getElementById(id).addEventListener(event, (ev) => {
            ModalPopUp();
            ev.stopPropagation();
        });
    }

    function ModalPopUp() {

        const evntArr = [];

        const myModal = 'myModal';
        const cls = 'close';

        const html = `
        <!-- The Modal -->
        <div id="${myModal}" class="modal">
        
          <!-- Modal content -->
          <div class="modal-content">
              <div class="modal-heading">Modal Heading <span class="${cls}">&times;</span></div>
            
            <p>Some text in the Modal..</p>
            <p>Input Fields
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
            </p>
          </div>
        
        </div>
        `;

        insertHTML('form', html);

        // define event listener(s)
        openModal(myModal);
        closeModal(cls);
    };

    const openModal = (id, event = 'click') => {

        $('#' + id).css('display', 'block');
        $('.modal-content p:nth-of-type(2) input:nth-of-type(1)').focus();
    };

    const closeModal = (modalClass, event = 'click') => {
        document.getElementsByClassName(modalClass)[0].addEventListener(event, () => {
            $('#myModal').remove();
        });
    };
});
