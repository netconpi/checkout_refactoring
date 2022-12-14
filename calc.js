let prices = {
    'min_cost': 2800,
    'appartment': {
        'regular': 60,
        'general': 110,
        'after_rem': 130, 
        'vip': 500,
    },
    'home': {
        'regular': 60,
        'general': 110,
        'after_rem': 130, 
        'vip': 500,
        'general_wood': 140,
        'after_rem_wood': 160, 
    },
    'office': {
        'regular': 60,
        'general': 110,
        'after_rem': 130, 
        'contract': 0,
    },
    'commercial': {
        'regular': 60,
        'general': 110,
        'after_rem': 130, 
        'contract': 0,
    },
    'mks_cost': 50,
    'win_1': 300,
    'win_2': 600,
    'win_3': 900,
    'win_4': 2400,
    'win_5': 1200,
    'win_6': 1600,
    'win_1_rem': 350,
    'win_2_rem': 700,
    'win_3_rem': 1050,
    'win_4_rem': 2800,
    'win_5_rem': 1400,
    'win_6_rem': 1700,
    'win_sqrs': 250,
    'win_sqrs_rem': 300,
    'fun_1': 2600,
    'fun_2': 3600,
    'fun_3': 4800,
    'fun_4': 6000,
    'fun_5': 500,
    'fun_6': 1000,
    'fun_7': 1200,
    'fun_8': 1500,
    'fun_9': 1200,
    'fun_10': 1200,
    'fun_11': 1250,
    'fun_12': 200,
    'shtori': 1500,
    'shower': 800,
    'light': 500,
    'friger': 800,
    'svch': 500,
    'owen': 500,
    'glazhka': 1600,
    'high_tower': 5000,
    'vaccum': 500,
    'stairs': 800,
};

let active_win = 1;
let active_ct = 'appartm';
let final_price = 0;
let shower_state = 1;


window.addEventListener('click', (e) => {
    // BASIC_VARIABLES
    let room_type = document.getElementById('room_type_select');
    let clean_type = document.getElementById('clean_type_select');
    let sqrs = document.getElementById('place_squares');
    let mkd = document.getElementById('out_msk_range');
    let fun_1 = document.getElementById('fun_type_1');
    let fun_2 = document.getElementById('fun_type_2');
    let fun_3 = document.getElementById('fun_type_3');
    let fun_4 = document.getElementById('fun_type_4');
    let fun_5 = document.getElementById('fun_type_5');
    let fun_6 = document.getElementById('fun_type_6');
    let fun_7 = document.getElementById('fun_type_7');
    let fun_8 = document.getElementById('fun_type_8');
    let fun_9 = document.getElementById('fun_type_9');
    let fun_10 = document.getElementById('fun_type_10');
    let fun_11 = document.getElementById('fun_type_11');
    let fun_12 = document.getElementById('fun_type_12');
    let add_1 = document.getElementById('add_type_shtori');
    let add_2 = document.getElementById('add_type_glazhka');
    // let add_3 = document.getElementById('add_type_shower');
    let add_4 = document.getElementById('add_type_light');
    let add_5 = document.getElementById('add_type_friger');
    let add_6 = document.getElementById('add_type_svch');
    let add_7 = document.getElementById('add_type_owen');
    let tower = document.getElementById('high_tower');
    let vaccum = document.getElementById('vaccum');
    let stairs = document.getElementById('stairs');

    // OUTPUT SOURCE 
    let price = document.getElementById('payment');
    // PRICE CHANGE
    // STABLE VALUES
    final_price = prices['fun_1'] * fun_1.innerHTML
    + prices['fun_2'] * fun_2.innerHTML
    + prices['fun_3'] * fun_3.innerHTML
    + prices['fun_4'] * fun_4.innerHTML
    + prices['fun_5'] * fun_5.innerHTML
    + prices['fun_6'] * fun_6.innerHTML
    + prices['fun_7'] * fun_7.innerHTML
    + prices['fun_8'] * fun_8.innerHTML
    + prices['fun_9'] * fun_9.innerHTML
    + prices['fun_10'] * fun_10.innerHTML
    + prices['fun_11'] * fun_11.innerHTML
    + prices['fun_12'] * fun_12.innerHTML
    + prices['shtori'] * add_1.innerHTML
    // + prices['shower'] * add_3.innerHTML
    + prices['light'] * add_4.innerHTML
    + prices['friger'] * add_5.innerHTML
    + prices['svch'] * add_6.innerHTML
    + prices['owen'] * add_7.innerHTML
    + prices['glazhka'] * add_2.innerHTML
    + prices['high_tower']
    + prices['vaccum']
    + prices['stairs'];

    // SHOWER ADD
    if (shower_state == 1) {
        let add_3 = document.getElementById('add_type_shower');
        
        final_price += prices['shower'] * add_3.innerHTML
    };


    // WINDOWS CLEAN CALC
    if (active_win == 1) {

        let win_type1 = document.getElementById('win_type_1');
        let win_type2 = document.getElementById('win_type_2');
        let win_type3 = document.getElementById('win_type_3');
        let win_type4 = document.getElementById('win_type_4');
        let win_type5 = document.getElementById('win_type_5');
        let win_type6 = document.getElementById('win_type_6');

        if (clean_type.value == 'after_rem') {
            final_price += prices['win_1_rem'] * win_type1.innerHTML
            + prices['win_2_rem'] * win_type2.innerHTML
            + prices['win_3_rem'] * win_type3.innerHTML
            + prices['win_4_rem'] * win_type4.innerHTML
            + prices['win_5_rem'] * win_type5.innerHTML
            + prices['win_6_rem'] * win_type6.innerHTML;
        } else {
            final_price += prices['win_1'] * win_type1.innerHTML
            + prices['win_2'] * win_type2.innerHTML
            + prices['win_3'] * win_type3.innerHTML
            + prices['win_4'] * win_type4.innerHTML
            + prices['win_5'] * win_type5.innerHTML
            + prices['win_6'] * win_type6.innerHTML;
        };

    } else if (active_win == 0) {
        let win_sqrs = document.getElementById('win_sqrs');

        if (clean_type.value == 'after_rem') {
            final_price += prices['win_sqrs_rem'] * win_sqrs.value;
        } else {
            final_price += prices['win_sqrs'] * win_sqrs.value;
        };
    }

    // Out moscow calc
    if (mkd.value == '?????? ????????????') {
        final_price = final_price;
    } else {
        final_price += prices['mks_cost'] * mkd.value;
    }

    // SQRS price 
    if (room_type.value == 'appartm') {
        final_price += prices['appartment'][clean_type.value] * sqrs.value;
    } else if (room_type.value == 'house') {
        final_price += prices['home'][clean_type.value] * sqrs.value;
    } else if (room_type.value == 'wood_house') {
        if (clean_type.value == 'after_rem') {
            let clean_type_merge = clean_type.value + '_wood'
            final_price += prices['home'][clean_type_merge] * sqrs.value;
        } else if (clean_type.value == 'general') {
            let clean_type_merge = clean_type.value + '_wood'
            final_price += prices['home'][clean_type_merge] * sqrs.value;
        } else {
            final_price += prices['home'][clean_type.value] * sqrs.value;
        };
    } else if (room_type.value == 'office') {
        final_price += prices['office'][clean_type.value] * sqrs.value;
    } else if (room_type.value == 'commer_space') {
        final_price += prices['commercial'][clean_type.value] * sqrs.value;
    };

    // Tower delivery
    if (tower.checked) {
        final_price += prices['high_tower'];
    } else {
        final_price -= prices['high_tower'];
    }

    // Vaccum delivery
    if (vaccum.checked) {
        final_price += prices['vaccum'];
    } else {
        final_price -= prices['vaccum'];
    }

    // Stairs delivery
    if (stairs.checked) {
        final_price += prices['stairs'];
    } else {
        final_price -= prices['stairs'];
    }


    if (room_type.value != active_ct) {
        let clean_type_selector = document.getElementById('clean_type_select');
        if (room_type.value == 'office' || room_type.value == 'commer_space') {
            // alert('coommer');
            clean_type_selector.innerHTML = `
            <option value="regular" class="styled_info_box_content" selected>????????????????????????????</option>
            <option value="general" class="styled_info_box_content">??????????????????????</option>
            <option value="after_rem" class="styled_info_box_content">?????????? ??????????????</option>
            <option value="contract" class="styled_info_box_content">????????????????</option>
            `;
        } else {
            clean_type_selector.innerHTML = `
            <option value="regular" class="styled_info_box_content" selected>????????????????????????????</option>
            <option value="general" class="styled_info_box_content">??????????????????????</option>
            <option value="after_rem" class="styled_info_box_content">?????????? ??????????????</option>
            <option value="vip" class="styled_info_box_content">Vip-????????????</option>
            `;
        };
        active_ct = room_type.value;
    };

    // Check min price 
    if (parseInt(final_price) > prices['min_cost']) {
        price.innerHTML = final_price + "???";
    } else {
        if (clean_type.value == 'contract') {
            price.innerHTML = "??????????????";
        }
    }

    // Undraw elements 

    if (clean_type.value == 'after_rem' && shower_state == 1) {
        let parent_representer = document.getElementById('additional_representer');
        let child = document.getElementById('shower_repres');
        parent_representer.removeChild(child);
        shower_state = 0;
    } else if (clean_type.value == 'after_rem' && shower_state == 0) {
        let parent_representer = document.getElementById('additional_representer');
        parent_representer.innerHTML = `
        <div class="checkout_additional_element">
            <p class="checkout_additional_elem_text">
                ??????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_shtori')">
                <p class="controls_checkout_amount_inverted" id="add_type_shtori">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_shtori')">
            </div>
        </div>

        <div class="checkout_additional_element">
            <p class="checkout_additional_elem_text">
                ????????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_glazhka')">
                <p class="controls_checkout_amount_inverted" id="add_type_glazhka">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_glazhka')">
            </div>
        </div>

        <div class="checkout_additional_element" id="shower_repres">
            <p class="checkout_additional_elem_text">
                ?????????????? ????????????/??????????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_shower')">
                <p class="controls_checkout_amount_inverted" id="add_type_shower">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_shower')">
            </div>
        </div>

        <div class="checkout_additional_element">
            <p class="checkout_additional_elem_text">
                ?????????????????????????? ??????????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_light')">
                <p class="controls_checkout_amount_inverted" id="add_type_light">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_light')">
            </div>
        </div>

        <div class="checkout_additional_element">
            <p class="checkout_additional_elem_text">
                ??????????????????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_friger')">
                <p class="controls_checkout_amount_inverted" id="add_type_friger">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_friger')">
            </div>
        </div>

        <div class="checkout_additional_element">
            <p class="checkout_additional_elem_text">
                ?????????????????????????? ????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_svch')">
                <p class="controls_checkout_amount_inverted" id="add_type_svch">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_svch')">
            </div>
        </div>

        <div class="checkout_additional_element">
            <p class="checkout_additional_elem_text">
                ?????????????? ????????
            </p>
            <div class="controls_checkout">
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_owen')">
                <p class="controls_checkout_amount_inverted" id="add_type_owen">0</p>
                <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_owen')">
            </div>
        </div>
        `;
    }

});

function change_value(tt, obj) {
    let obj_js = document.getElementById(obj);
    now_value = parseInt(obj_js.innerHTML);
    if (tt == 1) {
        now_value += 1;
    } else if (tt == 0) {
        now_value -= 1;
    }

    obj_js.innerHTML = now_value;
}

function change_cust_win() {
    let win_stan = document.getElementById('win_stan')
    win_stan.classList.remove('select_mode_active_border')
    let win_stan_text = document.getElementById('win_stan_text')
    win_stan_text.classList.remove('select_mode_active')

    let win_cust = document.getElementById('win_cust')
    win_cust.classList.add('select_mode_active_border')
    let win_cust_text = document.getElementById('win_cust_text')
    win_cust_text.classList.add('select_mode_active')

    let change_me_win = document.getElementById('change_me_win')
    change_me_win.innerHTML = `
    <div class="checkout_main_infobox_1 styled_info_box tworrow_width">
        <p class="styled_info_box_title">
            ?????????????? ???????? m^2
        </p>
        <input type="text" value="0" id="win_sqrs" class="small_input">
    </div>
    `;
    active_win = 0;
}

function change_stan_win() {
    let win_stan = document.getElementById('win_stan')
    win_stan.classList.add('select_mode_active_border')
    let win_stan_text = document.getElementById('win_stan_text')
    win_stan_text.classList.add('select_mode_active')

    let win_cust = document.getElementById('win_cust')
    win_cust.classList.remove('select_mode_active_border')
    let win_cust_text = document.getElementById('win_cust_text')
    win_cust_text.classList.remove('select_mode_active')

    let change_me_win = document.getElementById('change_me_win')
    change_me_win.innerHTML = `
    <div class="checkout_picture_select_element" id="window_1">
        <p class="checkout_picture_select_element_text">
            ???????????????????????????? ?????????????????????? ????????
        </p>

        <div class="controls_checkout">
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_1')">
            <p class="controls_checkout_amount" id="win_type_1">0</p>
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_1')">
        </div>

    </div>

    <div class="checkout_picture_select_element" id="window_2">
        <p class="checkout_picture_select_element_text">
            ???????????????????????????? ?????????????????????? ????????
        </p>

        <div class="controls_checkout">
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt=""  onclick="change_value(0, 'win_type_2')">
            <p class="controls_checkout_amount" id="win_type_2">0</p>
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_2')">
        </div>

    </div>

    <div class="checkout_picture_select_element" id="window_3">
        <p class="checkout_picture_select_element_text">
            ???????????????????????????? ?????????????????????? ????????
        </p>

        <div class="controls_checkout">
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_3')">
            <p class="controls_checkout_amount" id="win_type_3">0</p>
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_3')">
        </div>

    </div>

    <div class="checkout_picture_select_element" id="window_4">
        <p class="checkout_picture_select_element_text">
            ?????????? ???????????? ?? ????????????????
        </p>

        <div class="controls_checkout">
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_4')">
            <p class="controls_checkout_amount" id="win_type_4">0</p>
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_4')">
        </div>

    </div>

    <div class="checkout_picture_select_element" id="window_5">
        <p class="checkout_picture_select_element_text">
            ?????????? ???????????????? ??????????
        </p>

        <div class="controls_checkout">
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt=""  onclick="change_value(0, 'win_type_5')">
            <p class="controls_checkout_amount" id="win_type_5">0</p>
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_5')">
        </div>

    </div>

    <div class="checkout_picture_select_element" id="window_6">
        <p class="checkout_picture_select_element_text">
            ?????????????????? ????????????????????
        </p>

        <div class="controls_checkout">
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_6')">
            <p class="controls_checkout_amount" id="win_type_6">0</p>
            <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_6')">
        </div>

    </div>
    `;

    active_win = 1;
}

const token = '5764042547:AAHI7WGKVSQt-PDQpHQZeAeXwVNYMVggt9U';
const chatId = '1399076796';

function send_form() {
  
    let room_type = document.getElementById('room_type_select');
    let clean_type = document.getElementById('clean_type_select');
    let sqrs = document.getElementById('place_squares');
    let mkd = document.getElementById('out_msk_range');
    let fun_1 = document.getElementById('fun_type_1');
    let fun_2 = document.getElementById('fun_type_2');
    let fun_3 = document.getElementById('fun_type_3');
    let fun_4 = document.getElementById('fun_type_4');
    let fun_5 = document.getElementById('fun_type_5');
    let fun_6 = document.getElementById('fun_type_6');
    let fun_7 = document.getElementById('fun_type_7');
    let fun_8 = document.getElementById('fun_type_8');
    let fun_9 = document.getElementById('fun_type_9');
    let fun_10 = document.getElementById('fun_type_10');
    let fun_11 = document.getElementById('fun_type_11');
    let fun_12 = document.getElementById('fun_type_12');
    let add_1 = document.getElementById('add_type_shtori');
    let add_2 = document.getElementById('add_type_glazhka');
    let add_4 = document.getElementById('add_type_light');
    let add_5 = document.getElementById('add_type_friger');
    let add_6 = document.getElementById('add_type_svch');
    let add_7 = document.getElementById('add_type_owen');
    let tower = document.getElementById('high_tower');
    let vaccum = document.getElementById('vaccum');
    let stairs = document.getElementById('stairs');
    let name = document.getElementById('name_order');
    let phone = document.getElementById('phone_order_');
  
    if (parseInt(final_price) < 2800) {
        final_price = 2800;
    }

  	let message = `???????? ????????????: ${final_price}`;
    message += `
?????? ${name.value}
?????????? ${phone.value}
???????????? ????????????:
    ?????? ?????????????????? ${room_type.value}
    ?????? ???????????? ${clean_type.value}
    ?????????????? ?????????????????? ${sqrs.value}
    ???? ???????? ${mkd.value}
    ?????????? 2 ???????????????????? ?????????? ${fun_1.innerHTML}
    ?????????? 3 ???????????????????? ?????????? ${fun_2.innerHTML}
    ?????????? 4 ???????????????????? ?????????? ${fun_3.innerHTML}
    ?????????? 5 ???????????????????? ?????????? ${fun_4.innerHTML}
    ???????? ${fun_5.innerHTML}
    ???????????? ${fun_6.innerHTML}
    ?????? ${fun_7.innerHTML}
    ???????????????? ?????????????? ?????????????? ${fun_8.innerHTML}
    ???????????????? ?????????????? ?????????? ${fun_9.innerHTML}
    ?????????? ?????????????????????????? ${fun_10.innerHTML}
    ?????????? ?????????????????????? ${fun_11.innerHTML}
    ???????????????? ${fun_12.innerHTML}
    ?????????? ${add_1.innerHTML}
    ???????????? ${add_2.innerHTML}
    ?????????????????????????? ?????????????? ${add_4.innerHTML}
    ?????????????????????? ${add_5.innerHTML}
    ?????????????????????????? ???????? ${add_6.innerHTML}
    ?????????????? ???????? ${add_7.innerHTML}
    ???????????????? ??????????-???????? ${tower.checked}
    ???????????????? ???????????????? ${vaccum.checked}
    ???????????????? ?????????????????? ${stairs.checked}
    `;

    if (shower_state == 1) {
        let add_3 = document.getElementById('add_type_shower');
        message += `?????????????? ????????????/?????????????? ${add_3.innerHTML}`;
    }

    if (active_win == 1) {
        let win_type1 = document.getElementById('win_type_1');
        let win_type2 = document.getElementById('win_type_2');
        let win_type3 = document.getElementById('win_type_3');
        let win_type4 = document.getElementById('win_type_4');
        let win_type5 = document.getElementById('win_type_5');
        let win_type6 = document.getElementById('win_type_6');

        message += `
    ???????????????????????????? ?????????????????????? ???????? ${win_type1.innerHTML}
    ???????????????????????????? ?????????????????????? ???????? ${win_type2.innerHTML}
    ???????????????????????????? ?????????????????????? ???????? ${win_type3.innerHTML}
    ?????????? ???????????? ?? ???????????????? ${win_type4.innerHTML}
    ?????????? ???????????????? ?????????? ${win_type5.innerHTML}
    ?????????????????? ???????????????????? ${win_type6.innerHTML}
        `;
    } else if (active_win == 0) {
        let win_sqrs = document.getElementById('win_sqrs');
        message += `?????????????? ???????????????????? ${win_sqrs.value}`;
    }

    if (name.value != '' && phone.value != '') {
        $.ajax({
            type: 'POST',
            url: `https://api.telegram.org/bot${token}/sendMessage`,
            data: {
                chat_id: chatId,
                text: message,
                parse_mode: 'html',
            },
            success: function (res) {
                console.debug(res);
                $('#response').text('Message sent');
                checkout_success();
            },
            error: function (error) {
                console.error(error);
                alert("error failed");
            }
        });
    } else {
        if (name.value == '') {
            let name_box = document.getElementById('phio_box_input');
            name_box.classList.add('cc_warn_border');
        }
        if (phone.value == '') {
            let name_box = document.getElementById('phone_box_input');
            name_box.classList.add('cc_warn_border');
        }
    };

}

// ?????????? ???????????????????? ????????
function checkout_success() {
	$('.checkout_overlay').fadeIn();
    setTimeout(function () {
        window.location.href = "https://cleanon.ru/";
    }, 5000);
};

// ???????????????? ???????? ???? ????????
$(document).mouseup( function (e) { 
	var popup = $('.checkout_popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.checkout_overlay').fadeOut();
	}
});

// Just HTML because WP fu sh
function draw_calc() {
    let calc_block = document.getElementById('main_calc_body');
    calc_block.innerHTML = `
        <div class="checkout_main_uslugi">

            <!-- MAIN INFORMATION -->

            <div class="checkout_main_infobox_1 styled_info_box">
                <p class="styled_info_box_title">
                    ?????? ?????????????????? 
                </p>
                <select name="room_type" id="room_type_select" class="styled_info_box_content">
                    <option value="appartm" class="styled_info_box_content" selected>????????????????</option>
                    <option value="house" class="styled_info_box_content">?????????????? ?????? ??????</option>
                    <option value="wood_house" class="styled_info_box_content">???????????????????? ??????</option>
                    <option value="office" class="styled_info_box_content">????????</option>
                    <option value="commer_space" class="styled_info_box_content">???????????????????????? ??????????????????</option>
                  </select>
            </div>

            <div class="checkout_main_infobox_1 styled_info_box">
                <p class="styled_info_box_title">
                    ?????? ????????????
                </p>
                <select name="room_type" id="clean_type_select" class="styled_info_box_content">
                    <option value="regular" class="styled_info_box_content" selected>????????????????????????????</option>
                    <option value="general" class="styled_info_box_content">??????????????????????</option>
                    <option value="after_rem" class="styled_info_box_content">?????????? ??????????????</option>
                    <option value="vip" class="styled_info_box_content">Vip-????????????</option>
                  </select>
            </div>


            <div class="input_boxes_2_perrow">

                <div class="checkout_main_infobox_1 styled_info_box tworrow_width">
                    <p class="styled_info_box_title">
                        ?????????????? ?????????????????? 
                    </p>
                    <input type="text" value="30" id="place_squares" class="small_input">
                </div>

                <div class="checkout_main_infobox_1 styled_info_box tworrow_width">
                    <p class="styled_info_box_title">
                        ?????????? ???? ????????
                    </p>
                    <input type="text" value="?????? ????????????" id="out_msk_range" class="small_input">
                </div>

            </div>

			<div class="section_title_line">
                <h1 class="checkout_section_title">
                    ???????????????????? ????????????
                </h1>
            </div>

            <div class="checkout_main_infobox_1 styled_info_box" id="phio_box_input">
                <p class="styled_info_box_title">
                    ??????
                </p>
                <input type="text" value="" id="name_order" class="small_input">
            </div>

            <div class="checkout_main_infobox_1 styled_info_box" id="phone_box_input">
                <p class="styled_info_box_title">
                    ?????????? ????????????????
                </p>
                <input type="text" value="" id="phone_order_" class="small_input">
            </div>

            <!-- Windows screen -->
            <div class="section_title_line">
                <h1 class="checkout_section_title">
                    ?????????? ????????
                </h1>
            </div>

            <div class="input_boxes_2_perrow" id="window_type">

                <div class="checkout_main_infobox_1 styled_info_box tworrow_width select_mode_active_border" id="win_stan" onclick="change_stan_win()">
                    <p class="styled_info_box_title select_mode select_mode_active" id="win_stan_text">
                        ?????????????????????? ????????
                    </p>
                </div>

                <div class="checkout_main_infobox_1 styled_info_box tworrow_width" id="win_cust" onclick="change_cust_win()">
                    <p class="styled_info_box_title select_mode" id="win_cust_text">
                        ?????????????????????????? ????????
                    </p>
                </div>

            </div>

            <div class="checkout_picture_select" id="change_me_win">

                <div class="checkout_picture_select_element" id="window_1">
                    <p class="checkout_picture_select_element_text">
                        ???????????????????????????? ?????????????????????? ????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_1')">
                        <p class="controls_checkout_amount" id="win_type_1">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_1')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_2">
                    <p class="checkout_picture_select_element_text">
                        ???????????????????????????? ?????????????????????? ????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt=""  onclick="change_value(0, 'win_type_2')">
                        <p class="controls_checkout_amount" id="win_type_2">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_2')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_3">
                    <p class="checkout_picture_select_element_text">
                        ???????????????????????????? ?????????????????????? ????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_3')">
                        <p class="controls_checkout_amount" id="win_type_3">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_3')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_4">
                    <p class="checkout_picture_select_element_text">
                        ?????????? ???????????? ?? ????????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_4')">
                        <p class="controls_checkout_amount" id="win_type_4">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_4')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_5">
                    <p class="checkout_picture_select_element_text">
                        ?????????? ???????????????? ??????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt=""  onclick="change_value(0, 'win_type_5')">
                        <p class="controls_checkout_amount" id="win_type_5">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_5')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_6">
                    <p class="checkout_picture_select_element_text">
                        ?????????????????? ????????????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'win_type_6')">
                        <p class="controls_checkout_amount" id="win_type_6">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'win_type_6')">
                    </div>

                </div>

            </div>

            <!-- Furniture block -->

            <div class="section_title_line">
                <h1 class="checkout_section_title">
                    ?????????????????? ????????????
                </h1>
            </div>

            <div class="checkout_picture_select">

                <div class="checkout_picture_select_element" id="window_7">
                    <p class="checkout_picture_select_element_text">
                        ?????????? 2 ???????????????????? ??????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_1')">
                        <p class="controls_checkout_amount" id="fun_type_1">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_1')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_8">
                    <p class="checkout_picture_select_element_text">
                        ?????????? 3 ???????????????????? ??????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_2')">
                        <p class="controls_checkout_amount" id="fun_type_2">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_2')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_9">
                    <p class="checkout_picture_select_element_text">
                        ?????????? 4 ???????????????????? ??????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_3')">
                        <p class="controls_checkout_amount" id="fun_type_3">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_3')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_10">
                    <p class="checkout_picture_select_element_text">
                        ?????????? 5 ???????????????????? ????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_4')">
                        <p class="controls_checkout_amount" id="fun_type_4">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_4')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_11">
                    <p class="checkout_picture_select_element_text">
                        ????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_5')">
                        <p class="controls_checkout_amount" id="fun_type_5">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_5')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_12">
                    <p class="checkout_picture_select_element_text">
                        ????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_6')">
                        <p class="controls_checkout_amount" id="fun_type_6">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_6')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_13">
                    <p class="checkout_picture_select_element_text">
                        ??????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_7')">
                        <p class="controls_checkout_amount" id="fun_type_7">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_7')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_14">
                    <p class="checkout_picture_select_element_text">
                        ???????????????? ?????????????? ??????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_8')">
                        <p class="controls_checkout_amount" id="fun_type_8">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_8')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_15">
                    <p class="checkout_picture_select_element_text">
                        ???????????????? ?????????????? ??????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_9')">
                        <p class="controls_checkout_amount" id="fun_type_9">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_9')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_16">
                    <p class="checkout_picture_select_element_text">
                        ?????????? ??????????????????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_10')">
                        <p class="controls_checkout_amount" id="fun_type_10">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_10')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_17">
                    <p class="checkout_picture_select_element_text">
                        ?????????? ??????????????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_11')">
                        <p class="controls_checkout_amount" id="fun_type_11">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_11')">
                    </div>

                </div>

                <div class="checkout_picture_select_element" id="window_18">
                    <p class="checkout_picture_select_element_text">
                        ????????????????
                    </p>

                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'fun_type_12')">
                        <p class="controls_checkout_amount" id="fun_type_12">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'fun_type_12')">
                    </div>

                </div>
            
            </div>

            <div class="section_title_line">
                <h1 class="checkout_section_title">
                    ???????????????????????????? ????????????
                </h1>
            </div>

            <div class="checkout_additional" id="additional_representer">
                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ??????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_shtori')">
                        <p class="controls_checkout_amount_inverted" id="add_type_shtori">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_shtori')">
                    </div>
                </div>

                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ????????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_glazhka')">
                        <p class="controls_checkout_amount_inverted" id="add_type_glazhka">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_glazhka')">
                    </div>
                </div>

                <div class="checkout_additional_element" id="shower_repres">
                    <p class="checkout_additional_elem_text">
                        ?????????????? ????????????/??????????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_shower')">
                        <p class="controls_checkout_amount_inverted" id="add_type_shower">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_shower')">
                    </div>
                </div>

                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ?????????????????????????? ??????????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_light')">
                        <p class="controls_checkout_amount_inverted" id="add_type_light">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_light')">
                    </div>
                </div>

                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ??????????????????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_friger')">
                        <p class="controls_checkout_amount_inverted" id="add_type_friger">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_friger')">
                    </div>
                </div>

                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ?????????????????????????? ????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_svch')">
                        <p class="controls_checkout_amount_inverted" id="add_type_svch">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_svch')">
                    </div>
                </div>

                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ?????????????? ????????
                    </p>
                    <div class="controls_checkout">
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/minus.png" alt="" onclick="change_value(0, 'add_type_owen')">
                        <p class="controls_checkout_amount_inverted" id="add_type_owen">0</p>
                        <img src="https://cleanon.ru/wp-content/uploads/2022/09/plus.png" alt="" onclick="change_value(1, 'add_type_owen')">
                    </div>
                </div>

            </div>
            
            <div class="section_title_line">
                <h1 class="checkout_section_title">
                    ??????????????????????
                </h1>
            </div>

            <div class="checkout_additional">
                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ???????????????? ??????????-????????
                    </p>
                    <input type="checkbox" class="cc_checkbox"  id="high_tower">
                </div>
                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ???????????????? ????????????????
                    </p>
                    <input type="checkbox" class="cc_checkbox" id="vaccum">
                </div>
                <div class="checkout_additional_element">
                    <p class="checkout_additional_elem_text">
                        ???????????????? ??????????????????
                    </p>
                    <input type="checkbox" class="cc_checkbox" id="stairs">
                </div>
            </div>

        </div>
        <div class="checkout_main_price">
            <div class="checkout_price_card">
                <div class="mobile_row_total">
                    <h3 class="checkout_price_card_text">?? ????????????</h3>
                    <h1 class="checkout_price_card_price" id="payment">2800???</h1>
                </div>

                <div class="checkout_price_card_btn_container" id="make_order">
                    <p class="checkout_price_card_btn_text" onclick="send_form()" id="send_from_tg">????????????????</p>
                </div>

            </div>
        </div>
    `;
};

