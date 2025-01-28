Ext.define('MyApp.view.list.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainlist',

    onCellClick: function (view, td, cellIndex, record) {
        const grid = this.getView();
        const column = grid.getColumns()[cellIndex];

        if (column && column.dataIndex === 'name') {
            this.openProductCard(record);
        }
    },

    openProductCard: function (record) {
        const grid = this.getView();

        grid.hide();

        const productCard = Ext.create({
            xtype: 'productCard',
            record: record,
            grid: grid
        });
        const parent = grid.up();
        parent.add(productCard);
        productCard.show();

        if (productCard.getForm) {
            productCard.getForm().loadRecord(record);
        }
    },


    onFilterEnter: function (field, event) {
        if (event.getKey() === Ext.event.Event.ENTER) {
            const grid = this.getView();
            const store = grid.getStore();
            const idFilterValue = grid.down('[name=filterById]').getValue();
            const descriptionFilterValue = grid.down('[name=filterByDescription]').getValue();

            store.clearFilter();

            if (idFilterValue) {
                store.addFilter({
                    filterFn: record => record.get('id') === parseInt(idFilterValue)
                });
            }

            if (descriptionFilterValue) {
                store.addFilter({
                    filterFn: record =>
                        record.get('description').toLowerCase().includes(descriptionFilterValue.toLowerCase())
                });
            }
        }
    }
});
