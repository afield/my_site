(function () {
    app.controller('MainCtrl', MainCtrl);

    function MainCtrl(PageLoad) {

        var mainVm = this;

        PageLoad.load();


    }
})();