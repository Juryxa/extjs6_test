Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(button) {
        const form = button.up('form');
        const values = form.getValues();
        if (values.username === 'admin' && values.password === 'padmin') {
            localStorage.setItem("LoggedIn", true);
            this.getView().destroy();
            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    }

});