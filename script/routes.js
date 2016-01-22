page.base('');

page('/', homeController.index);
page('/about', aboutController.index);
page('/jobs', jobController.index);
page('/admin', adminController.index);

page();
