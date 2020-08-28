$(document).ready(function(){

    
	/* When click add user */
	$("body").on("click", "#user_add", function () {
		$("#addNewUser").text("Add User");
		$("#user_name").focus();
		$("#btn_save").text("Add User");
		$("#validationform").trigger('reset');
	});

	/* Update Order Status */
	$("body").on("click", ".update_status", function (e) {
        e.preventDefault();
        var order_id = $(this).data("id");
        $("#order_id").val(order_id)
        var shipping_status = $("#shipping_status");
        $.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
        });
        
		$.ajax({
			method:'POST',
			url: $("meta[name='url']").attr("content") + "/dashboard/view_status",
			data: {
        		order_id: order_id,
			},
			dataType: "json",
			success: function (res) {
               console.log(res.shipping_status[0].shipping_status)
                shipping_status.val(res.shipping_status[0].shipping_status);   
			},
			error: function (data) {
				console.log("Error:", data);
			},
		});
    });

    $('body').on('submit' ,'#statusForm', function(e){
        e.preventDefault();
        var status_modal = $("#status_modal");
        var order_id = $("#order_id").val()
        var shipping_status = $("#shipping_status").val();
        var updateval = $('.update_status');
        var rowId = $(`#order_id_${order_id} td:nth-child(4)`);

        var alertBtn = $('.alert-success');
        $.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			method:'POST',
			url: $("meta[name='url']").attr("content") + "/dashboard/update_status",
			data: {
        		order_id: order_id,
                shipping_status: shipping_status
			},
			dataType: "json",
			success: function (res) {
                // console.log(res);

                if(res.status==1){
                    status_modal.modal('hide');
                    rowId.text(res.status_name[0].status_name);
                    alertBtn.css('display', 'block');
                    alertBtn.text(res.message)
                    setInterval(() => {
                        alertBtn.css('display', 'none');
                    }, 7000);
                }else{
                    alert(res.message)
                }
                
			},
			error: function (data) {
				console.log("Error:", data);
			},
		});
    })


    $("body").on("click", ".view_details", function () {
		
        var order_id = $(this).data("id");
        console.log(order_id);
        $("#order_item_details").html('');
        $("#order_invoice_items").html('');
        $("#order_invoice_details").html('');
        $("#order_invoice_header").html('');
        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
        
            method: 'POST',
            url: $("meta[name='url']").attr("content") + "/dashboard/order_details/",
            data: {
                order_id: order_id,
            },
            dataType: "json",
            success: function (res) {
                console.log(res)
                var products = res.products;
                var html = '';
                var subtotal =0;
                var total = 0;
                var serl = 1;
                var invoiceDetailHeader= '';
                var invoiceDetail ='';
                for(var i in products){
                    html +=`
                    <tr>
                        <td class="center">${serl++}</td>
                        <td class="left strong">${products[i].product_name}</td>
                        <td class="right">${products[i].unit_price}</td>
                        <td class="center">${products[i].quantity}</td>
                        <td class="right">${products[i].unit_price*products[i].quantity}</td>
                    </tr>
                    `;
                    subtotal += products[i].unit_price*products[i].quantity;
                    total    += products[i].unit_price*products[i].quantity;
                }
                html += `
                <tr>
                    <td class="center"></td>
                    <td class="left strong"></td>
                    <td class="right"></td>
                    <td class="center"></td>
                    <td class="right"></td>
                </tr>
                <tr>
                    <td class="center"></td>
                    <td class="left "></td>
                    <th class="right strong">Sub Total</th>
                    <td class="center"></td>
                    <th class="right">${subtotal}</th>
                </tr>
                <tr>
                    <td class="center"></td>
                    <td class="left "></td>
                    <th class="right strong">Discount</th>
                    <td class="center"></td>
                    <th class="right"></th>
                </tr>
                <tr>
                    <td class="center"></td>
                    <td class="left "></td>
                    <th class="right strong">Vat</th>
                    <td class="center"></td>
                    <th class="right"></th>
                </tr>
                <tr>
                    <td class="center"></td>
                    <td class="left "></td>
                    <th class="right strong">Total</th>
                    <td class="center"></td>
                    <th class="right strong">${total}</th>
                </tr>
                `;
                $("#order_item_details").html(html);
                $("#order_invoice_items").html(html);
                 /////////////////////////////////
                // Order Invoice Details  Header
                ////////////////////////////////
                if(res.invoiceHeader.length>0){
                    invoiceDetailHeader+=`
                    <div class="float-left"><h3>OGANI-Ecommerce Management System</h3></div>
                <div class="float-right"> <h3 class="mb-0">Invoice No: ${res.invoiceHeader[0].invoice_id}
                </h3> Date: ${res.invoiceHeader[0].order_date}</div>
                `;
                }
                
                $("#order_invoice_header").html(invoiceDetailHeader);
                /////////////////////////////////
                // Order Invoice Details 
                ////////////////////////////////

                invoiceDetail +=`
                <div class="col-sm-6">
                    <h5 class="mb-3">From:</h5>                                            
                    <h3 class="text-dark mb-1">Azizul Hasan</h3>
                
                    <div>University of Dhaka</div>
                    <div>Email: hasan@gmail.com</div>
                    <div>Phone: 01855987652</div>
                </div>
                <div class="col-sm-6">
                    <h5 class="mb-3">To:</h5>
                    <h3 class="text-dark mb-1">${res.shippingDetail[0].name}</h3>                                            
                    <div>${res.shippingDetail[0].address}</div>
                    <div>${res.shippingDetail[0].zip_code}</div>
                    <div>Email: ${res.shippingDetail[0].email}</div>
                    <div>Phone: ${res.shippingDetail[0].contact}</div>
                </div>
                `;
                $("#order_invoice_details").html(invoiceDetail);
                
            },
            error: function (data) {
                console.log("Error:", data);
            },
        });
		
    });
    

   


	

})