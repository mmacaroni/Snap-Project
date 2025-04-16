/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

let iceCreams = [
  {
  brand: "Ben & Jerry's",
  flavor: "Strawberry Cheesecake",
  rating: 4.7,
  imageURL: 
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/43_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T032929Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=57e4654d17c1a3c173808e86c2d55d4246c6422c14c75371430970120c23d52c06ce6e729dad6c235fc730218c2cd76b340dea531f6557fc94940aa395448039ab6e4fddf5147ea78f196487b5da59cd6ef5cf2ec6fb74bc9301ea87790b7df3c9d04ce0cbf577c531810201170044bb85d5fad0ea80181f675531d38332f1e8cabae521f1bc7a15eb0320b113cc237a5591d0a2272e31c11cc765cedd0ee02ab50362549a9d2e02fe3d1dcc2589b2a8dcf6d178c1716a0c83515f8aa4f00949f7cb52297ce208ca9bf7c1b060e9b1ca141648269fa7556e4cb022ff371ec47003a4f372990c00d9358e721aabe5ed1cb95d0dd744647ff9c1abc25e55f5ceeb"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Butter Pecan Ice Cream",
  rating: 4.3,
  imageURL: 
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/4_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T033853Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=49966a85d2fd8175741b77c37374860e1c78768e2da81b89995b444ff85339ab78246c2825ebb293f5b311f65da809414c95c70395e88b524f13760da1fae4f4bab84f2953749e53759e6bf9f4cde86c247d36be3fdcd2224218bfa7b3b2f817c25f9f0fb1945108c5cf20e24639ae247d8b6d1a093ea63705b1c3b1953db69af5b5c1f3ce5828961afaeebd76f1cd354dc8990319ba9109f003ef8d640ac66145451b2aefc868e51b5a667c8c4af4c8c647ecc6af392f530bc94e21a14c53fc2f581d4871f11322b6d96cde68c7019db1139336ac8cbb135cab6cff076013674eb5e0ea237333a6e3f9341d373e7a038e1a075112e75c1e3eadcae2ce055db4"
  },
  {
  brand: "Breyers",
  flavor: "Chocolate Mint",
  rating: 4.1,
  imageURL: 
  "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/19_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T033456Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=0380a10fe3305762b0ad66e68ec665811f1b24ee5f53ac7c7f78819d8c9d9cc103f4a6b6fe3c37d9888c91c08e58dc429b887b4c951bce554a79a6a90453718c4828d0f41407111bb87da38479dc902dcde6f5918feebb6b0a887e6190de9c2344e37d88d1f6f0910651fdaf1287515993490afbdb6ffdc618084fe8a418d5687001e5191262e3fca2d54473776ab25e74884bd353472afeaf21c1fb2f320aefa6098274697c2c2375aaa5059ac46332b54ea3d9d67e3e6bcd10100b15346a62b10397b833ee86722cc67d864da17e893d0992cc0b3e9c76a63ce48a096e299bbe1d9baac40c66d0d1977266d89828ae77217612d551ebf84390ebc2bebd788b"
  },
  {
  brand: "Talenti",
  flavor: "Caramel Cookie Crunch",
  rating: 4.2,
  imageURL: 
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/6_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T034157Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=aa1ae34b50faf2abec6325661c4cc6fed7e38323e88d72d5309769b0c3ec69c7bee6c75d3ea31a2223c9a361a3f35343c23818129317b48df9fccf1396b581e4553dfc4de64bda2afad3edad881432161a6de8c3221dae789c6c1e6c81f8b8ea02f1f20d32e2271d6f2a128190f643b452adeb84617c38eb4ce7bfc81807d04cf256cdb1787984d27b2d2031d2ae7e44f47e05e974b31c6bc15fe6fc6025a0c4348b7f842be9b75e36c6282554e6d0fdbe941448d8ac9664d61510c88a720db859d49871f729cbda9939acdf4abb9ea383c67d1976047e9c229e6dc897a87a5e6a5104386e673db1855ec8d8ce087af7bdd9ad59545cca93f25ac7e679be1384"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Caramel Chocolate Cheesecake",
  rating: 4.0,
  imageURL: 
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/13_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054747Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=2fac6e99b42a5ac6b5ece5052bfb27ad5e651a46d15f35169cc83893c6726869770dc84776578710f5523c9863ce2c902b791bf44ff1a8f2ae54d746447dc0b076eb050d6c11d38306faee052dd5c52f6ba8ec22a62d72a494145cfd569feb7c0b6c9ba826dbc19585a885324032baaa7d3305915c1806c9c23eedb80368492f280c4461c6850060a476b8f9f41782a015d9e4e42b3f4ef31d7392868f4b1456fa0635829bd811c256156b251318f5327dd3cac8ba96304a7a518d96794aba412bf2b1c20abc08026a914978d3202fc874038eeb2ce13a0c3efa69b19fce8bbfa150ebcf345163320f4d59edf18e9f4f37ef0176aa3bbe851b2bc32c32628748"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Pistachio Pistachio",
  rating: 4.0,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/38_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054812Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=1428665c2189b601339ced1279f303cafea9b1afae63dcccc7d44c3fa8670c3e0e6a94ae6ede048728ced08e3bd45619e7735fa158e887a03c382d4c4bff5e2cf143bf92e3592c25cb6c2e6e9edafb7e5267827af99d1f2fe1ca3ee9873229b4ba419f9990e24a90e93794b2fe31348260f57c8278c5dd6e6c7c97a65009e76c2db222f0a0a5b59c5a4c00d892805bfcaa574d8fc4f6fd33b8d7d2f41e57506651f69fccfa4435dccc8ebe2bb48198964bb1b276aff19a1a46bc66fe808e7e4ae835cf22df6eeec232712d6850c2c4c23687f4f8a514bfca54634f5363b8364f871a8f0dc14b1f3091e4bb42fb46a6f2e45782b0117b0eea8fc4c00d391857fd"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Pumpkin Cheesecake",
  rating: 4.6,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/39_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054842Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=0b7fcfd83691d7159e15041a94d8f9b65be3343d79a79be56ee8e48d7571adb284ebd6a291d358f6a435e507a0814ec9ea55c51e14108934ea9bfa52c3ca7d8b7966eafb5203c34483f43e6f456caf8fb340c025efc5d7319dbd941fac1a5874f09f15a4a1a8601caec31b2f545040bf0e9c1928401f6abf108fe676b601c5ab1f0a3cce22bacb4a70b3cfc5a12777de6c7bb00a7e1a077541af46ee6bde9352bbcac2c1c15f34b7a6afc79b42d2cf6ad38abc0a2803cb7a06ac6f59189157d8744ce13fe3a3c1bd1292ed1dafae2792e06ef1d055813f9cbc43a04f23ac7f8b20e6d01050decb949438f6b99e0adaa5f0f5d6cf84bdaceeec43f50c5314ea31"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Vanilla",
  rating: 4.7,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/47_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054923Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=07ab18c5654eb503d31d4fab1e441d62b9f727d8180198f9590e6c0f46fb2194058e5b34241aaa54f2e223756baa735e991d5ae46e942670384ca62cce47acaaf9102b154b21449ded8c7b7029f3769f9f36b080d9242ce6f5872ff3279ef36257a1934b4ef109774c96ea244c379a93b22c20218e6f4269ac203febed36f35fefb3c798b55e5b48cfc653631946f411124a2bd5520dcf648d588e60977b963e33dc312573738a9def43e7a11dc5db4220ca6d31db2238a56399be2987928f0e84d6cb6332a1aa874cc429e666dca6bd3f9fca20497f5030b7170adc70c038bc50b33b322f3b0175f0f1f4e327cb83cdf740efafd1a06cbc226032f310dacd87"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Peanut Butter Fudge Core",
  rating: 4.7,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/56_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054950Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=83f95cb2780dccde5e9b87a33f8bf065d045439f03c9cbad374df905cc805cf1ab4a2204653c8e6ec57c1b92891ca662bd616bfee57a16542f80feca0f18ae71b92dc2151c79cc9caecdbc47e3ddadd29ce8b5d04061f3d1dee899c4a302d1913cf9a6e5117e372d0c017a706ffe10bf7477663dc99dd1cce13a99f5a05129ee700c0c505cfffccebf6d26403e649fe25f19803746a6ca8e1582f09a90507db85a95c7d3453592bf8eecbe60c3a9d3f73fc4ccfb8a55d3a120a1e29b41ea2b53fc4080724de94dcc9cc800f45ec5787e66423046597710957bc2f1fec90a8f979222d9e5287bdf6926a8341f08e9447dd1b2427cd89ba911e1d13ffbdbb175e2"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Urban Bourbon",
  rating: 4.2,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/46_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T055021Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=a724b92fe481c1366e4848e8bcb0b6fb29405ee59af92ea70bd2ae49e74ab2511323c3d75b47fa6c800e1a1afaa77e53724402bc83b237a75252ab11fd22e107cf30647338956ad10b9e97bcc2d92bd147f90afb27a7f5e88c4b7a17697b9d32858cbf0b51a8eadb37b7265b33bbb8efd0f33e19b6f9b475793d6e5c71d86088b41a9b19f1be4e77031458f941277db35e6887fa71811d36c6ded29f613348fccd88bf34d5061c0579d616b400f72ef6132e9f58bd481e29d615c0063b049cae96877ce42df1716b265d47a6c62acde1f69b68fad443f94472bb36b80d81867a38637952560f89b3b01bfd2b9e5e3cb637ac37c86e68e0cca2c7ae2a24fe8fb8"
  },
  {
  brand: "Ben & Jerry's",
  flavor: "Berry Sweet Mascarpone",
  rating: 4.6,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/bj/images/6_bj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T055057Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=641346d443dfee1b259fe78be28c41b5d76ffcf3c6dc52cbd6ab60a78cbb6a8cfbc4a978143278328b2804829bf63ef3998b7bd30fa8cf1b110899da2ac9db2336956f67c250db9792726a13fd97ad663c497826d51aaf0d44af073fc31bfe2e9bbf69b8b9ae58a3c5d1edd7bfa1d15f7d7cfec1d4cdced016afe49a815122f402adc92645bf7db0b54347c96345fed2a5932a3420b28ac75dc5054ffd11998382781ded57426dcb9340abb29d6225377f41a9a309ebfdbbd3d69a1f5a341d2a7196a6ac124106052410bc91f6f5a0629813988f6569237c4d37bdc916a41e50af67d0f98b06157ae7e69afccdc8eeb34c8ca359289ba9140131e520d2634154"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Lemon Sorbet",
  rating: 4.8,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/34_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054713Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=9218aef166e12d11d8af1878faa7d883220d9f3c105d6d6cdbb64342de7dc15a3897c078234175427b3f290c3d4c9d62a6fd531520d6aa8c3da9092511c0917d713da363d6c78d57e374f2ad9620c0f453f81cb5ad06a01e4b1d20abe1179032eb5365e57b4f6ee123e3535ec0fa1bdb5428ce969ad15011af4340751bd93cb05a032b2a0f290a6c4adbb60b16df7a4973bc9a0f7300dff5e2d111fdab9cc0cda82677909712d67fd2ebbe3bb70536a66d86ac7ae880816a93732023ff9aca6d624498aba9ede98a2fb912f6dafd4c757747212926d9831083e24462644a31fc5e14ca9fc53e733cce8e0214605a9b50a15975b33273679653e5a4f961474908"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Mango Sorbet",
  rating: 4.6,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/37_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054640Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=360151117f478ae1cd691f6350a9c0e3b7a6da420d5c2f48a8cdfe585694930b545bffd2fceed5b54d851cc75f9479dfd1270a7346e02e161f349c31acd555a60166ce163042f5df9501ae3c71a6f99399080498886c71532cb9a9c534b343f8c7a8fc46a4eea7f32bef68a550a368ca59aab07e7479f99fb6eae0e11b0ff1ada16b7e45075c70207f4f99d2c51b4f4cf48020a29bad9acd8351ea3d6de8eeecb28b6fceb9b186df9fd31b93639f88599065a96b50fe73bab1ba0a6fa91508b8bec42534f3e8bf8fea7691a97062939386103f407800f08673b42e9e0314afc4863ac9d3196ab3b91258f299507e261bfd401637a3eaed798a01e76ce68a2052"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Green Tea Ice Cream",
  rating: 4.2,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/30_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054614Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=02e8c377296aeb16dd87654a175d3060bb16f2b2f5ae8d97a61829ba426410b9348c2ed9adf1fecb7634f7a3f96b5e5c2e20ebe16764de1b1da26f4b47dfffe00da6661d2fc1520d04dc6f27f65420e20c385ad9c4af6095434202b83b54c62a4c91c625bf7f0a1415f5d5cce0e009489f3a4868cf403f2c9f2592cdbe509756bc45626f2a400d71dad7496ccc16821c9a4746ea3fa2eeccdd3f1133ce5864c4dff2d6b8fd4b8cf883c83bd798b522e3fa47f13b107ac372381aaf36333d17e2ec5fdfd479d265890c3e42219a76a4f78f3f70a8929b6d36464ee3abfaedfdcd11a898b48b1e590800d797853cd35c06c71519afc0fca13abda99887b3e38516"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Dulce De Leche Ice Cream",
  rating: 4.8,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/29_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054543Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=648d4791eb221a94de8c8efdd0cd8ad72c9a1c3b241baa9b7c2fdd583cec0516e17c8bf62c0c4ad31da8a0932290df6a6873d3c1ddd2ee8b5499fe0de010d549399a63eb049da7bc3e65b23f35c8417a2a7564eaa305393dc9418faf5cb36c0d02c9b4a74da6a1a0c2fa54c3b09cf74df399cff1007ad0287433b62b5f5b9a60c323c5122f691f9fbcf42f3e1e2c116a08d7baa63bfe4b2617545d95d87e343cb820dadff54a07ff17c0a2aec5aeb4f03994da5a527bcec33a541b4d48f372a91ea2a5f83e6b4c825e0476a8c34e7e9ff3ef50b8abb49f3c945472e6d712f5e41f8cc0dda5c4017615480b02fc2908ad70a6b13161596f096a1ab901710090fa"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Coffee Ice Cream",
  rating: 4.6,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/21_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054509Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=50923d533ab0e4aaacc66309e8a7ed61dbe786c03076fe64119e484c190d0c7ee4de1f6495bbad2d04401b00ce873258da8f993b274a748521cff606b12e00be042cd899ac3663c4a28d0566c829fb344d745396ae4f294daa58a206d7bf6751991f5c94418d43cae794ecfeea91bb1d0f1f63f4e8834099761b29cdec5e5213fee2131a2c9aac2c2d501efcdd41c8ab725ab098f72b0a3534e912978844a9043b9bbeda6566c71f67b558d04fd8983ea726f10e07ad442380760d205758cf31b68fdb1eefe8a5ee431bbba70b0d0b6e52c09f006f536f450e43c1fb9ca70beac5bf9dc0790d504a2bd859c23e61889f9d8e6efbaf90574ac5ffd97a013e952e"
  },
  {
  brand: "Haagen-Dazs",
  flavor: "Cocounut Caramel Non-Dairy",
  rating: 4.9,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/hd/images/18_hd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054444Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=48de7cdb1497ec3d84f7475c16b0f61f97698d15b271e7345bc2eab8538e137bae497c956d99151d9b318a818e8cea61967e188e17d68f41907887a51952c876c088e30c39420ec793c9ed926cfa52dcb5bbbc666f6a6b853982f3c43cef03d50988131eb2936536a4da2482b55fca3cda2022e8348a03d47d4c1d8bda9040af26fc2fd93a3cc33f0dd36c07ed52c5f2a16cc28d76436e19e0bba4949f7a68b9edbafc1f9d126490c4f8004ea2b4d9d2451ff83a75c1a940d27c914ad45eab0ac6fe3472df264985445cb5e3cc96b719e040aea72a5c55efb513b8904777c530714cb25c78a8cf9558925d89e9e69b0efc9ef31cedd7d010c2570ff89617c78c"
  },
  {
  brand: "Breyers",
  flavor: "Natural Vanilla",
  rating: 4.1,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/0_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054405Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=95d97fbe6821f99bb7e63f2279fb2c8a7472651f52131d928defc5b153acba1cd808aade071cf7b118e789ddc0b811f02fdacd23d12b4a0ea28d7c725597e1dd28b2bcd550f446333a5bb7325d0824291befe86301fa99e331c3e9fafc673130714e11d10c16fec1ea2196d87d15817c0de18af5a96ee9d6f7267d6104081647e9761ffbb98beedb25d4a54ed342faf34b76772e3a91d129a44724822f2a541f4a3e52687f09096a8c6e52c1c46ff5545c0a90ee8968e77932447b5c822afa86c59e6e1018999f82eaf061174cb7edeb5d344b95771edeb7938f8b0be7a29a48c58f5806dfeabc4e761c473f4bd5143ff670134adc22f91d7c05fa804e2983d4"
  },
  {
  brand: "Breyers",
  flavor: "Natural Strawberry",
  rating: 4.5,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/4_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054341Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=49a95760f4b9631fbfda730e20796993dcb68f5e050d150ea77feebe3c43edc5f5cf6e84d30c0d0212c473154052a0ddea0dc5eae4cc91e59761c8ddb64a1811deecdb449571e05e6324f2bf773820bca6ceffb3c5263a167b7b3926eb885257bb07980e3187a079c6d32592d8f1a57e571fe32651b27b66f2f55b6d72176add6eb3c5de8442de081d1741a400ed3a9e04a46d80ad37e080415bc469c7722c419eebfb616ca97d35d9ba84ebaa66777b4887d014c1709aa489020185a266ff45f527c75ed6fff4a949e18fce254badc3fd9a1a431e2a283fc2af74d60f2918400e7e3d437ff388cbaf3b717261915555dcd1cf4ddbec99b6b8f8d8c5fc02e9ff"
  },
  {
  brand: "Breyers",
  flavor: "Vanilla Caramel",
  rating: 4.2,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/17_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054228Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=2930ed1a7150cf3c629c831f878f00d5b7adb860045372827966b0b320728d8130a30827a3378ccbde345669b1a51ac240620aa11b96fcb4027072b27d0a5fab874be18456e0e63d9d121bc3463468d126a96f16623c9be19060b0180fed4e228c057d04e388d3c7c866cf40d8ddefdf2c5f5edbafe101baddbafa06e47f9c41c7a366079afefc4487e27cdeaabe3127b94f6cf0c9963a650b0eb2787fbbc7edf68646b1347e0d5176ea1e48a5a7c4e11ae41ae91426ff7b23730fc0685aa1f1a15eda16f2b34743c04ecc99d0521e3bdd939151e7f82c49f79fd78ce1d26245a48945c4bf6c0d556ca1c5df4a0bffd4ed1a35e0248d608530bf4721a31b8a2a"
  },
  {
  brand: "Breyers",
  flavor: "SNICKERS",
  rating: 4.4,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/31_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054110Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=08b1643fefb33ab4207597d65e22625fc70ec4075c9580b44bffbc79f084535b92823eaa4a82d00f5edbac27c9b337c0909a15b1e5696631e2db352b8f87c33fc838722eb40e1669c4e79208a5f5d8d68ee1221a4b220c209c08f2dae756c8335b8378d83e2901cd0ef5fa41411d69a36660338fb98ea65b375afd6dfdc9a77a38ee3c87693bd44da926adb6ca5155351cba862d28bacc056b643e1a73250b42bab9c6bc088afb32bcc1589b56629585f69e0910df9e35d95d34e477eea08ba2e50bc1941f26ff071a0f1774ff4d9fa004e53e816f746312c2eabd8d71acafafbc881504f9443d2f021aa73a3fb254c483d056d06b4d8f1a252787e96317f5ff"
  },
  {
  brand: "Breyers",
  flavor: "Cookies & Cream",
  rating: 4.1,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/48_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T054041Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=9c01151c1e24ad9818df12dda39dd0e5c80bddc5e4ccbac6d6fa4f86bc97963fcb075923685e83152aebb3948b011a5401ca0ef5d8b20b0eda217cd1c7435b5c2b21e60debcf34c24dcc4234684310866647585a8b016337c579d8f3b110d6d138a6fd1021e436eee260bfe3edb9d971d3adabef16b5a2ac735679e24d9bac48946632683d5ae7ee57350a2fb819a5cc67b543cdc8b1652f77a2ef22f75e32974eeec286acb3e92059c69fc946d86e780a042f2ca3e6bc3b546d3a77cadb98e0fb5542e1b851e8b00933f0b7a7c324725399ce84362f3f5b9b8c08d872ced0e8bbeb0168095c5d07a1eb261b081049869caefa140337e0e36210625fe8abb154"
  },
  {
  brand: "Breyers",
  flavor: "Coconut Fudge",
  rating: 4.4,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/breyers/images/59_breyers.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053948Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=a16b0b50a40165b78128a4ca3cc38fe448482033a830006c72346a48b72c694e05125c5e5f33890169f7ba851e2025da57ad50642e013057d6873f5122881247a9489e564340dfee46ab743cfcc0ba9548985521f6d6128df45b1ad92d04bfd586285e9a9c36ce580f276b5afd48597ee43224104291a272de11cfdf63eb3b4c37240487bc6dd14787c2d7c190a59d88d84de88ecb4d78e587785a4bbc0f2b1c6e89ae5e9673719469c97c3f36f50cf9aa643fd7ba9283275e7f9e953b0095f29d49e87918a5a4d3a127d734dd5c9cf792c8d0dc26d2260250dde674098f9ea621a3289c2a9249540dde89a0045c0b3cdb6f631e26414a983d79dd43ff9c3819"
  },
  {
  brand: "Talenti",
  flavor: "Vanilla Fudge Cookie",
  rating: 4.3,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/44_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053853Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=1b0cd1a1fb2c5b0fbe00c329bcc3ed259f69966a80fa70a1e1e08ea3df58ac5c621378916ea3914924177e96f0b48d8430a63b094dc600e7a24d4dcf8b39b816ed5d0022e80a61bfcb541a88fd8597c2aa1310e20d1692ef7d2cfb9eecbae6125aa4070314423e0576e9d0a87aaba4d4e71a4c8e47780124b3002a7628817ed0046484efd136d1648c8bc2ee2fbd4824c3fc63ba341f95836a5363c767ec38a3d568e2231d37a481be02c344776086c30410a53c0369100e5d8e31d0fab198db9fd8c7438aa6eaf807ce40fc47da7cbeac5c8d1657c6c07bf9396b14ecf683036a235023b2749ec4a22724d2d54e5d3433408e2b035a85f980abc3141c36507d"
  },
  {
  brand: "Talenti",
  flavor: "Mint fudge Cookie",
  rating: 4.7,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/25_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053807Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=211c0f2f8f5b1b1467580c96d4d4ba654f73a4e3260aa64a5a6c00240f1811eb42cd717b4880f83e1bd9a3f070f5fc43337efee869f7b8473acdb958318b8206c6f0be0944524b13a645827e665c109bbd9c75e51cb7c4e5ae3e06c3e7c351ccc91be97a9f52e70d48e0ed4023344b699888ccef5ce886166328544f503da310161455f19bcd4850993d742f7b024937a5605d3d4d229f5d9c41ea4823daf38ca429d69ccab4ac188fa3f0e3254afb67e50b60c638d99920f6945d38cdd8ba2421cda8c0156a242557e8a858fb629f347f6bbbeaf6cca9367fdfe58173b424cee9625413ef94d851c392d8105949ef5e8aa1a4e345847020d72e6d8ccf6904a3"
  },
  {
  brand: "Talenti",
  flavor: "Cold Brew Coffee Sobretto",
  rating: 4.5,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/15_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053730Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=2bb07b83fc25fa1fc646d05e5ebe571a9d4de5633491d2aefa59a558ff73ef3080f48d630cc2fa246965630ed5b6ac067142a2e89b9d75a17efffcc686b2954cfc20bec4fa0b4bfd99a876fad6be26048d8b947709f5f13f38fe94e40262a1d621ae986c3d25960ce40d641fb574da0e0bdc3000292a95be4aa59b7d146c92bbac153e314d2ff3f6dd7827efe4f2a07281c8d21e32d11d092fe023c477b9dbe36b5764099bcad380a89ab4be403dee30bca701a6ec2ca3a0fadec54b68aab73772b8d0bb074298a06a37e2fd1143fd307ea8b1433c6ece69e2672b4b8c5205aeb44100620921ce8257eef69e2c0f20e7229b4e7045cebe76f4ca48792406af92"
  },
  {
  brand: "Talenti",
  flavor: "Salted Caramel Truffle",
  rating: 4.7,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/38_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T055310Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=0bd2ffe3969b31cdd94d84d008c117d84623a1e4980762d59aefc8ac1359f4be5fbcccbfaa795977690cc8317de494bd17821c73d460fc7549b9b78478bc8a99da585c9d70d3950664a0c96cafc1792797902285beea8c878df78ec87f408960061020abfcdd3241ce12e4dd7a2780b9a7120a3b6f4fbc4a06f8359ff0830ea129c09dc0740be00c97dfa0235b46b067cf0a9fdb7c1bd5959458ba6cd88aecf67af9abcd66af0bd1952581e5b41542b8874524cc174e8430a6db04d93defbfea95d737633092ed7df5202a1ddffc35d606c272c38727decf2b40617563e67e49b138e0e0607d458e0728c4acae28ab9069277872a086ef71dc2a078380b01cce"
  },
  {
  brand: "Talenti",
  flavor: "Organic Ginger Matcha Gelato",
  rating: 4.7,
  imageURL:
    "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/29_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053543Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=53121315b3fc1b9e881168bcd563b41b18347f20b0d26d706a30a856706094d4c60462b7679773a8fc265bea6050530273776c7febccef6fdce2ebe422b394f0ab00f882a77ca9239b387c978b9d2f68add19006d9fd97e662c3993f970bfd3d7b6ecf6028d8a6134defad12049fe99c97b1a1b56518e5970d3e97ff8eec8704b82407135665056bf79eba8138ffd3ab42b2ccb79eae12f8e674478a27b3b324a8fc96a9761f6db6cac6dd05daa01dda88a0523821230d78ac1ad1e919c12504ca5fa862c0c24efa8ae2665009f03b8f13be070267c536e8878b1e0ac140c331740625492d8e4c8bc980247ab97fe5ce6361bd660a2fe91c48332bdd821123f8"
  },
  {
    brand: "Talenti",
    flavor: "Banana Caramel Crunch",
    rating: 4.2,
    imageURL:
      "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/1_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053317Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=0d1ad61ae5dc474e91e0159e15ee40594617636bf443ce8d0b0f851c25e3161485ba5107ca4f67cba257a10afe74a355628fa14b09d39e41678e382591f3a8432084657ab47a7ea8422fd24fae5409ad8e7b520182ebb272d98a2450ccf29505895507ff86ad4c1085982141d9a2b73ec3e37773e49146411a7e7b85de2824132bedf4a315d5c2e9c0f2ac13247d67da19c71dc7836abf56499ace74d763896f4287e7cb49c99fb36e0739d716bafef56b2f759a0784a6b47f3bc6d4bdd69a941aa53d818990b17e7c259e8135a3683a64a2b86f1f6627bf181fe5e2b8db7a6ab3fee5ecdf4eb693ee0b429d6f0fe21b7b6cae08ff1279049c333c8f2e66ab5d"
  },
  {
    brand: "Talenti",
    flavor: "Dark Chocolate Cherry",
    rating: 4.2,
    imageURL:
      "https://storage.googleapis.com/kagglesdsdata/datasets/893332/1536671/talenti/images/16_talenti.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20250416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250416T053141Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=af686762d41025ad8094b0eefc24c819f9287d6e3bce83dfc5b2c2a5f32098df27705d1ee38a0194c369ee766f48237b6ed3a75c643f858e7c55561b2ca62c92574f745315d6cf2611ce9215ecb1c8d49fb7e27a10ef1e3fe6aec1139944238fa1b2dde46cfade25640f1589de0ac8e1ff55ac92e57552d5562562b1e3061008c8e930ee0c69c40941c7f9981ae397172f68efebf8d7b4649ec7ff050022c082777c8e1e0222e667f01f0423bc03a4f32f5660c75a6cd13036c4096ea4f3b2d3b48bd34e69467b9fc1638f0c56fecc34b53754b0b538ec6b39627c38de598efc67c61e5db8de5f177eaf14e2f0f94cd41282637598947ae5b203757c87280845"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  showCards();
  document
    .getElementById("searchBar")
    .addEventListener("input", (e) => showCards(e.target.value));
});

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(filterText = "") {
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  const template = document.querySelector(".card");

  for (let ice of iceCreams) {
    if (
      !ice.flavor.toLowerCase().includes(filterText.toLowerCase()) &&
      !ice.brand.toLowerCase().includes(filterText.toLowerCase())
    ) {
      continue;
    }

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    const card = template.cloneNode(true); // Copy the template card // Edit title and image
    card.style.display = "block";


    card.querySelector("h2").textContent = ice.flavor;
    card.querySelector("img").src = ice.imageURL;
    card.querySelector("img").alt = ice.flavor + " Image";
    card.querySelector(".brand").textContent = ice.brand;
    card.querySelector(".flavor").textContent = ice.flavor;
    card.querySelector(".rating").textContent = ice.rating;


    container.appendChild(card);
  }
}

function sortByRating() {
  iceCreams.sort((a, b) => b.rating - a.rating);
  showCards(document.getElementById("searchBar").value);
}

function removeLastCard() {
  iceCreams.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

function quoteAlert() {
  const quotes = [
    "Ice Cream is happiness condensed. - Jessi Lane Adams",
    "Life is better with sprinkles on top(;",
    "All you need is love(and Ice Cream)"
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  alert(quote);
}