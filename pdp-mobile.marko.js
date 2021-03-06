// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/scrolldemo$1.0.0/pdp-mobile.marko", function() {
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

  out.w("<!DOCTYPE html><html><head><title>Mobile Demo</title><meta name=\"viewport\" content=\"width = device-width, initial-scale = 1\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css\"><script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js\"></script><style>\n        body {\n            width: 110%;\n            height: 1450px;\n        }\n\n        .pdp-header {\n            height: 50px;\n            background-color: #F5F5F5;\n            width: 100%;\n        }\n\n        .shop {\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 700;\n            display: flex;\n            color: #2A2A2A;\n            background-color: #FAFAFA;\n\n        }\n\n        .product-price-grid {\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 700;\n            background-color: #FAFAFA;\n        }\n\n        .shop-text {\n            margin-top: 16px;\n        }\n\n        .icons {\n            display: flex;\n            margin-left: 75%;\n            margin-top: -28px;\n            color: #2A2A2A;\n        }\n\n        .shop-icons {\n            display: flex;\n            margin-left: 72%;\n            margin-top: -37px;\n            color: #2A2A2A;\n        }\n\n        .back-icon {\n            margin-right: 20px;\n            margin-top: 16px;\n            color: #2A2A2A;\n        }\n\n        .image-gallery {\n            height: 400px;\n        }\n\n        .skuset {\n            height: 100px;\n            background-color: #FAFAFA;\n            border-bottom: 2px solid #E8E8E8;\n            width: 100%;\n        }\n\n        .merchants-grid {\n            height: 200px;\n            background-color: #FAFAFA;\n            border-bottom: 2px solid #E8E8E8;\n            width: 100%;\n        }\n\n        .merchants-grid-title {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 500;\n            color: #747474;\n            padding-top: 20px;\n        }\n\n        .pd-grid {\n            background-color: #FAFAFA;\n            height: 500px;\n        }\n\n        .title {\n            height: 150px;\n            border-bottom: 2px solid #E8E8E8;\n            background-color: #FAFAFA;\n        }\n\n        .title-text {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 19px;\n            font-weight: 700;\n            margin-top: 20px;\n        }\n\n        .product-price {\n            width: 70%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 20px;\n            font-weight: 700;\n            margin-top: 20px;\n        }\n\n        .icon-color {\n            color: #757575;\n        }\n\n        .description-grid {\n            height: 210px;\n            border-bottom: 2px solid #E8E8E8;\n        }\n\n        .description-title {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 20px;\n            font-weight: 700;\n            margin-top: 20px;\n        }\n\n        .description-text {\n            width: 100%;\n            font-family: sans-serif;\n            font-size: 17px;\n            font-weight: 500;\n            color: #6f6f6f;\n        }\n\n        .read-more {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            font-size: 20px;\n            font-weight: 600;\n            margin-top: 5px;\n            margin-left: 57%;\n        }\n\n        .details-grid {\n            width: 100%;\n            height: 250px;\n            margin-top: 20px;\n            padding-left: 10px;\n            border-bottom: 2px solid #E8E8E8;\n\n        }\n\n        .brand-grid,\n        .discount-grid,\n        .division-grid,\n        .category-grid {\n            border: 1px solid #A2A2A2;\n            height: 113px;\n            width: 45%;\n        }\n\n        .row .col .s2 {\n            width: 45%;\n        }\n\n        .row .col.s5 {\n            padding: 0;\n            border-right: 2px solid #D9D9D9;\n\n        }\n\n        .brand-title,\n        .discount-title,\n        .division-title,\n        .category-title {\n            margin-top: 20px;\n            font-size: 18px;\n            font-family: sans-serif;\n            width: 100%;\n            margin-left: 10px;\n            font-weight: 300;\n            color: #6f6f6f;\n        }\n\n        .brand-name,\n        .discount-name,\n        .division-name,\n        .category-name {\n            font-size: 18px;\n            font-family: sans-serif;\n            width: 100%;\n            margin-left: 10px;\n            font-weight: 700;\n            color: #626262;\n        }\n\n        .footer-grid {\n            height: 75px;\n            background-color: #FAFAFA;\n        }\n\n        .footer-text {\n            font-size: 15px;\n            font-family: sans-serif;\n            margin-left: 10px;\n            font-weight: 700;\n            color: #626262;\n            margin-top: 20px;\n            padding-top: 20px;\n        }\n\n        .size,\n        .color {\n            width: 100%;\n            padding: 10px;\n            font-family: sans-serif;\n            color: #747474;\n            font-size: 15px;\n            font-weight: 500;\n            margin-top: 5px;\n        }\n    </style></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"row\"><div class=\"pdp-header\"><div class=\"shop\"><i class=\"material-icons back-icon\">arrow_back</i><span class=\"shop-text\">Shop on L'oreal</span></div><div class=\"icons\"><i class=\"material-icons\">shopping_cart</i><i class=\"material-icons\">more_vert</i></div></div><div class=\"col s12 image-gallery\"></div><div class=\"col s12 title\"><div class=\"title-text\">" +
    marko_escapeXml(input.titleText) +
    "</div><div class=\"product-price-grid\"><span class=\"product-price\">" +
    marko_escapeXml(input.productPrice) +
    "</span></div><div class=\"shop-icons\"><i class=\"material-icons left icon-color\">add_alert</i><i class=\"material-icons left icon-color\">share</i></div></div><div class=\"col s12 skuset\"><div class=\"size\">Size</div><div class=\"color\">Color</div></div><div class=\"col s12 merchants-grid\"><div class=\"merchants-grid-title\">Buy Now</div></div><div class=\"col s12 pd-grid\"><div class=\"description-grid\"><div class=\"description-title\">Description</div><div class=\"description-text\">" +
    marko_escapeXml(input.descriptionText) +
    "</div><div class=\"read-more\"> Read More</div></div><div class=\"details-grid\"><div class=\"col s2 brand-grid\"><div class=\"brand-title\">Brand</div><div class=\"brand-name\">" +
    marko_escapeXml(input.brandName) +
    "</div></div><div class=\"col s2 discount-grid\"><div class=\"brand-title\">True Discount</div><div class=\"brand-name\">" +
    marko_escapeXml(input.discount) +
    "</div></div><div class=\"col s2 division-grid\"><div class=\"brand-title\">Division</div><div class=\"brand-name\">" +
    marko_escapeXml(input.division) +
    "</div></div><div class=\"col s2 category-grid\"><div class=\"brand-title\">Category</div><div class=\"brand-name\">" +
    marko_escapeXml(input.category) +
    "</div></div></div></div><div class=\"col s12 footer-grid\"><div class=\"icon\"></div><div class=\"footer-text\">" +
    marko_escapeXml(input.footerText) +
    "</div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "52");

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
