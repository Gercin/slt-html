$(function () {
    filterChange();
});

function filterChange() {
    $(document).on("change", "[data-type=js-filter-change]", function (e) {
        e.preventDefault();

        let thisObj = $(this),
            value = thisObj.val();

        console.log("filter change  " + value);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                value: value,
            },
            success: function (r) {
                $(document).find('[data-type=items-container-full]').empty();
                $(document).find('[data-type=items-container-full]').append($(r));
            },
            error: function (r) {
                console.debug(r);
            }
        });
    });
}