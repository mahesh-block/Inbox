"use strict";

var routes = require("next-routes")();

routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUVHLEFBRkgsSUFFTyxBQUZQLGtCQUV5QixBQUZ6QixrQkFHRyxBQUhILElBR08sQUFIUCx1QkFHOEIsQUFIOUIsbUJBSUcsQUFKSCxJQUlPLEFBSlAsZ0NBSXVDLEFBSnZDLDZCQUtHLEFBTEgsSUFLTyxBQUxQLG9DQUsyQyxBQUwzQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkQ6L0RBcHBzL2tpY2tzdGFydCJ9