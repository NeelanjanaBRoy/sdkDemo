// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/scrolldemo$1.0.0/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Desktop Demo</title><meta name=\"viewport\" content=\"width = device-width, initial-scale = 1\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css\"><script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js\"></script><script type=\"text/javascript\" src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script><style>\n        body {\n            height: 750px;\n        }\n\n        .pdp-header {\n            height: 50px;\n            background-color: #F5F5F5;\n            width: 100%;\n        }\n\n        .shop {\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 700;\n            display: flex;\n            color: #2A2A2A;\n\n        }\n\n        .shop-text {\n            margin-top: 16px;\n        }\n        .merchant-text {\n            width:70px;\n            text-align:center;\n        }\n\n        .icons {\n            display: flex;\n            margin-left: 95%;\n            margin-top: -28px;\n            color: #2A2A2A;\n        }\n\n        .back-icon {\n            margin-right: 20px;\n            margin-top: 16px;\n            color: #2A2A2A;\n        }\n\n        .image-carousel {\n            height: 400px;\n        }\n        .product-img{\n            padding:10px;\n            width: 250px;\n        }\n\n        .skuset {\n            height: 100px;\n            background-color: #FAFAFA;\n            border-bottom: 2px solid #E8E8E8;\n            width: 100%;\n        }\n\n        .merchants-grid {\n            height: 300px;\n            background-color: #FAFAFA;\n            margin:auto;\n\n        }\n\n        .merchants-grid-title {\n            width: 100%;\n            padding: 25px 25px 15px 25px;\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 500;\n            color: #747474;\n           \n        }\n\n        .pd-grid {\n            background-color: #FAFAFA;\n            height: 800px;\n        }\n\n        .title {\n            height: 200px;\n            border-bottom: 2px solid #E8E8E8;\n        }\n\n        .title-text,\n        .product-price {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 20px;\n            font-weight: 700;\n            margin-top: 20px;\n        }\n\n        .price-alert-btn,\n        .share-btn {\n            background-color: #F5F5F5;\n            margin-right: 20px;\n            margin-top: 20px;\n        }\n\n        .icon-color {\n            color: #757575;\n        }\n\n        .description-grid {\n            height: 270px;\n            border-bottom: 2px solid #E8E8E8;\n        }\n\n        .description-title {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 20px;\n            font-weight: 700;\n            margin-top: 20px;\n        }\n\n        .description-text {\n            width: 100%;\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 500;\n            color: #6f6f6f;\n        }\n\n        .read-more {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 20px;\n            font-weight: 600;\n            margin-top: 5px;\n            margin-left: 85%;\n        }\n\n        .details-grid {\n            width: 100%;\n            height: 170px;\n            margin-top: 1px;\n        }\n\n        .brand-grid,\n        .discount-grid,\n        .division-grid,\n        .category-grid {\n            border: 1px solid #A2A2A2;\n            height: 113px;\n            width: 25%;\n        }\n\n        .row .col .s2 {\n            width: 25%;\n        }\n\n        .row .col.s5 {\n            padding: 0;\n            border-right: 2px solid #D9D9D9;\n\n        }\n\n        .brand-title,\n        .discount-title,\n        .division-title,\n        .category-title {\n            margin-top: 20px;\n            font-size: 18px;\n            font-family: sans-serif;\n            width: 100%;\n            margin-left: 10px;\n            font-weight: 300;\n            color: #6f6f6f;\n        }\n\n        .brand-name,\n        .discount-name,\n        .division-name,\n        .category-name {\n            font-size: 18px;\n            font-family: sans-serif;\n            width: 100%;\n            margin-left: 10px;\n            font-weight: 700;\n            color: #626262;\n        }\n\n        .footer-grid {\n            height: 85px;\n        }\n\n        .footer-text {\n            font-size: 15px;\n            font-family: sans-serif;\n            margin-left: 10px;\n            font-weight: 700;\n            color: #626262;\n            margin-top: 20px;\n            padding-top: 20px;\n        }\n\n        .size,\n        .color {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            color: #747474;\n            font-size: 15px;\n            font-weight: 500;\n            margin-top: 5px;\n        }\n        .nykaa-grid, .amazon-grid, .bb-grid{\n            width:70px;\n            height:80px;\n            float:left;\n            padding-left: 25px;\n        }\n    </style></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"row\"><div class=\"pdp-header\"><div class=\"shop\"><i class=\"material-icons back-icon\">arrow_back</i><span class=\"shop-text\">Shop on L'oreal</span></div><div class=\"icons\"><i class=\"material-icons\">shopping_cart</i><i class=\"material-icons\">more_vert</i></div></div><div class=\"col s5\"><div class=\"carousel carousel-slider\"><a class=\"carousel-item\"><img class=\"product-img\" src=\"assets/images/Loreal-1.png\"></a><a class=\"carousel-item\"><img class=\"product-img\" src=\"assets/images/loreal-2.jpg\"></a><a class=\"carousel-item\"><img class=\"product-img\" src=\"assets/images/Loreal-3.jpg\"></a></div><div class=\"skuset\"><div class=\"size\">Size</div><div class=\"color\">Color</div></div><div class=\"merchants-grid\"><div class=\"merchants-grid-title\">Buy Now</div><div class=\"nykaa-grid\"><img class=\"merchant-img\" width=\"57\" height=\"50\" src=\"assets/images/nykaa.png\"><div class=\"merchant-text\">Nykaa</div><div class=\"merchant-text\">" +
    marko_escapeXml(input.productPrice) +
    "</div></div><div class=\"amazon-grid\"><img class=\"merchant-img\" width=\"57\" height=\"50\" src=\"assets/images/amazon-shopping.png\"><div class=\"merchant-text\">Amazon</div><div class=\"merchant-text\">" +
    marko_escapeXml(input.productPrice) +
    "</div></div><div class=\"bb-grid\"><img class=\"merchant-img\" width=\"57\" height=\"50\" src=\"assets/images/bb.jpg\"><div class=\"merchant-text\">BigBasket</div><div class=\"merchant-text\">" +
    marko_escapeXml(input.productPrice) +
    "</div></div></div></div><div class=\"col s7 pd-grid\"><div class=\"title\"><div class=\"title-text\">" +
    marko_escapeXml(input.titleText) +
    "</div><div class=\"product-price\">" +
    marko_escapeXml(input.productPrice) +
    "</div><a class=\"btn price-alert-btn icon-color\"><i class=\"material-icons left icon-color\">add_alert</i> ADD PRICE ALERT</a><a class=\"btn share-btn icon-color\"><i class=\"material-icons left icon-color\">share</i> SHARE</a></div><div class=\"description-grid\"><div class=\"description-title\">Description</div><div class=\"description-text\">" +
    marko_escapeXml(input.descriptionText) +
    "</div><div class=\"read-more\"> Read More</div></div><div class=\"details-grid\"><div class=\"col s2 brand-grid\"><div class=\"brand-title\">Brand</div><div class=\"brand-name\">" +
    marko_escapeXml(input.brandName) +
    "</div></div><div class=\"col s2 discount-grid\"><div class=\"brand-title\">True Discount</div><div class=\"brand-name\">" +
    marko_escapeXml(input.discount) +
    "</div></div><div class=\"col s2 division-grid\"><div class=\"brand-title\">Division</div><div class=\"brand-name\">" +
    marko_escapeXml(input.division) +
    "</div></div><div class=\"col s2 category-grid\"><div class=\"brand-title\">Category</div><div class=\"brand-name\">" +
    marko_escapeXml(input.category) +
    "</div></div></div><div class=\"footer-grid z-depth-2\"><div class=\"icon\"></div><div class=\"footer-text\">" +
    marko_escapeXml(input.footerText) +
    "</div></div></div></div><script>\n        $(document).ready(function () {\n            $('.carousel').carousel();\n            $('.carousel-slider').slider({full_width: true});\n        });\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "73");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
