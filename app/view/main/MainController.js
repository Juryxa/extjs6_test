Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickButton: function () {
        localStorage.removeItem('LoggedIn');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },
    onAddTabClick: function () {
        const view = this.getView();
        const newTab = view.add({
            title: `Товары`,
            items: [{
                xtype: 'mainlist',
            }]
        });

        view.setActiveTab(newTab);
    }
});