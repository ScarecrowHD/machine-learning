document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist95929183\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-torch101_model-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-torch101_model-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-torch101_model-py-LC1\" class=\"blob-code blob-code-inner js-file-line\">torch.manual_seed(<span class=\"pl-c1\">42<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-torch101_model-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-torch101_model-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Now we can create a model and send it at once to the device<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-torch101_model-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">model <span class=\"pl-k\">=<\/span> ManualLinearRegression().to(device)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-torch101_model-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> We can also inspect its parameters using its state_dict<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-torch101_model-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(model.state_dict())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-torch101_model-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-torch101_model-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">lr <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">1e-1<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-torch101_model-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">n_epochs <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">1000<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-torch101_model-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-torch101_model-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">loss_fn <span class=\"pl-k\">=<\/span> nn.MSELoss(<span class=\"pl-v\">reduction<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>mean<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-torch101_model-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">optimizer <span class=\"pl-k\">=<\/span> optim.SGD(model.parameters(), <span class=\"pl-v\">lr<\/span><span class=\"pl-k\">=<\/span>lr)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-torch101_model-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-torch101_model-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">for<\/span> epoch <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(n_epochs):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-torch101_model-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> What is this?!?<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-torch101_model-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    model.train()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-torch101_model-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-torch101_model-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> No more manual prediction!<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-torch101_model-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> yhat = a + b * x_tensor<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-torch101_model-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    yhat <span class=\"pl-k\">=<\/span> model(x_train_tensor)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-torch101_model-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-torch101_model-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">    loss <span class=\"pl-k\">=<\/span> loss_fn(y_train_tensor, yhat)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-torch101_model-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    loss.backward()    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-torch101_model-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">    optimizer.step()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-torch101_model-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    optimizer.zero_grad()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-torch101_model-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_model-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-torch101_model-py-LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(model.state_dict())<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/dvgodoy/ca789b2aedfe67b9db0f64084c8bc9bf/raw/52f8913f513bd53c5f5b17502fc6f9a866d04dd0/torch101_model.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/dvgodoy/ca789b2aedfe67b9db0f64084c8bc9bf#file-torch101_model-py\">torch101_model.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')