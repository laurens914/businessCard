page.base(''); //sets up a base page

page('/', homeController.index); //
page('/about', aboutController.index); //about page, when about is selected or navigated to aboutcontroller.index is called.
page('/jobs', jobController.index); //jobs page, when jobs is selected or navigated to jobController.index is called
page('/admin', adminController.index); //when admin is navigated to (since there is no link to this page, it is meant to be hidden) admin.Controller.index is called

page();
